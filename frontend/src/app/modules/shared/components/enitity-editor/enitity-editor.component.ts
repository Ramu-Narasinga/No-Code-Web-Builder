import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-newsletter';

@Component({
  selector: 'app-enitity-editor',
  templateUrl: './enitity-editor.component.html',
  styleUrls: ['./enitity-editor.component.scss']
})
export class EnitityEditorComponent implements OnInit {

  editor: grapesjs.Editor = {} as grapesjs.Editor;

  // TODO: code smell move it to service
  @Input()
  get html(): string { return this._html; }
  set html(html: string) {
    this._html = (html && html.trim());
    console.log("html", html);
    if (
      this.editor &&
      this.editor.setComponents
    ) {
      this.editor.setComponents(this._html);
    }
    localStorage.removeItem('gjsProject');
  }
  private _html = '';

  @Input()
  get css(): string { return this._css; }
  set css(css: string) {
    this._css = (css && css.trim());
    console.log("css", css);
    if (
      this.editor &&
      this.editor.setStyle
    ) {
      this.editor.setStyle(this._css);
    }
    localStorage.removeItem('gjsProject');
  }
  private _css = '';

  @Input() editorSaveEndpoint = '';

  constructor( ) {}


  ngOnInit() {
    console.log("editorSaveEndpoint:", this.editorSaveEndpoint);
    this.editor = grapesjs.init({
      container : '#ncwb-editor',
      plugins: [plugin],
      pluginsOpts: {
        plugin: {}
      },
      storageManager: {
        type: 'remote', // Storage type. Available: local | remote
        autosave: true, // Store data automatically
        autoload: false, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
        // Default storage options
        options: {
          remote: {
            urlStore: this.editorSaveEndpoint,
            onStore: data => {
              let html = this.editor.getHtml();
              let css = this.editor.getCss();
              console.log("htmml:", html, "css:", css, "data:", data);
              return {
                html,
                css
              }
            },
          }
        }
      }
    });

    // TODO: clean up
    this.editor.on('load', () => {
      console.log("editor loaded successfully");
      console.log("html:", this.html, "css:", this.css);
      localStorage.removeItem('gjsProject');
      this.editor.setComponents(this.html);
      this.editor.setStyle(this.css);
    });
  }
}

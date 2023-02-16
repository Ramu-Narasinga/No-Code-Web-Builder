import { Injectable } from '@angular/core';
import plugin from 'grapesjs-preset-newsletter';
import grapesjs from 'grapesjs';

@Injectable({
  providedIn: 'root'
})
export class EntityEditorService {

  editor: grapesjs.Editor = {} as grapesjs.Editor;

  constructor() { }

  getEditorStorageConfig(editorSaveEndpoint) {
    return {
      type: 'remote', // Storage type. Available: local | remote
      autosave: true, // Store data automatically
      autoload: false, // Autoload stored data on init
      stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
      // Default storage options
      options: {
        remote: {
          urlStore: editorSaveEndpoint,
          onStore: data => {
            let html = this.editor.getHtml();
            let css = this.editor.getCss();
            return {
              html,
              css
            }
          },
        }
      }
    }
  }

  getEditorConfig(editorSaveEndpoint: string) {
    return {
      container : '#ncwb-editor',
      plugins: [plugin],
      pluginsOpts: {
        plugin: {}
      },
      storageManager: this.getEditorStorageConfig(editorSaveEndpoint)
    }
  }

  html;
  setEditorHtml(html) {
    this.html = html;
    if (
      this.editor &&
      this.editor.setComponents
    ) {
      this.editor.setComponents(html);
    }
  }

  css;
  setEditorCss(css) {
    this.css = css;
    if (
      this.editor &&
      this.editor.setStyle
    ) {
      this.editor.setStyle(css);
    }
  }

  initEditor(editorSaveEndpoint: string) {
    this.editor = grapesjs.init(this.getEditorConfig(editorSaveEndpoint));
  }

  onEditorLoad() {
    this.editor.on('load', () => {
      this.editor.setComponents(this.html);
      this.editor.setStyle(this.css);
    });
  }
}

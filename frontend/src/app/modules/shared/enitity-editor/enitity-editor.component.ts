import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';

@Component({
  selector: 'app-enitity-editor',
  templateUrl: './enitity-editor.component.html',
  styleUrls: ['./enitity-editor.component.scss']
})
export class EnitityEditorComponent implements OnInit {

  editor: grapesjs.Editor = {} as grapesjs.Editor;

  ngOnInit() {
    this.editor = grapesjs.init({
      container : '#ncwb-editor',
      plugins: [plugin],
      pluginsOpts: {
        plugin: {
          // options
        }
      }
    });
    console.log("Editor initialised", this.editor);
  }
}

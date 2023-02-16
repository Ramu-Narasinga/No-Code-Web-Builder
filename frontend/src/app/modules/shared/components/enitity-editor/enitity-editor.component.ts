import { Component, Input, OnInit } from '@angular/core';
import { EntityEditorService } from './entity-editor.service';
@Component({
  selector: 'app-enitity-editor',
  templateUrl: './enitity-editor.component.html',
  styleUrls: ['./enitity-editor.component.scss']
})
export class EnitityEditorComponent implements OnInit {

  private _html = ''
  @Input()
  get html(): string { return this._html; }
  set html(html: string) {
    this._html = (html && html.trim());
    this.entityEditorService.setEditorHtml(html);
  }

  private _css = '';
  @Input()
  get css(): string { return this._css; }
  set css(css: string) {
    this._css = (css && css.trim());
    this.entityEditorService.setEditorCss(css);
  }

  @Input() editorSaveEndpoint = '';

  constructor(
    private entityEditorService: EntityEditorService
  ) {}

  ngOnInit() {
    this.entityEditorService.initEditor(this.editorSaveEndpoint)
    this.entityEditorService.onEditorLoad();
  }

}

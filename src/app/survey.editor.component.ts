import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyEditor from "surveyjs-editor";

import "inputmask/dist/inputmask/phone-codes/phone.js";


var CkEditor_ModalEditor = {
  afterRender: function(modalEditor, htmlElement) {
   
  },
  destroy: function(modalEditor, htmlElement) {
   
  }
};
SurveyEditor.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);

@Component({
  selector: "survey-editor",
  template: `<div id="surveyEditorContainer"></div>`
})
export class SurveyEditorComponent {
  editor: SurveyEditor.SurveyEditor;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    SurveyKo.JsonObject.metaData.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");

    let editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    this.editor.text = JSON.stringify(this.json);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    console.log(JSON.stringify(this.editor.text));
    this.surveySaved.emit(JSON.parse(this.editor.text));
  };
}

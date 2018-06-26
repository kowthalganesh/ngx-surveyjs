import { Component, Input } from "@angular/core";
import * as Survey from "survey-angular";
import * as jQuery from 'jquery';

import "inputmask/dist/inputmask/phone-codes/phone.js";

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div>`
})
export class SurveyComponent {
  @Input()
  set json(value: object) {  
    let surveyModel = new Survey.Model(value);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      console.log(surveyModel);
      
      if (!options.question.popupdescription) return;
      //Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      var question = options.question;
      btn.onclick = function() {
        //showDescription(question);
        alert(options.question.popupdescription);
      };
      var header = options.htmlElement.querySelector("h5");
      var span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });

    surveyModel.onCurrentPageChanged.add(function(result, options){
      let value = options.oldCurrentPage.getValue();
      let defaultSurvey = [{product : "100", liking:"IFF"}];
      if (value.pretest) {
         for (let i=0; i<value.pretest.length; i++) {
           if (value.pretest[i].rank == "1") {
             defaultSurvey.push(value.pretest[i]);
           }
         }
        }
      if(value.test) {
         for (let j=0; j<value.test.length; j++) {
           if (value.test[j].rank == "1") {
             defaultSurvey.push(value.test[j]);
           }
         }
      }
      surveyModel.setValue("survey", defaultSurvey);
    });

    surveyModel.onComplete.add(function (result, options) {
      console.log(result);
      console.log(options);
    });

    surveyModel.setValue("pretest", [{product : "2100", liking:"kowthal"}, {product : "2101", liking:"ganesh"}]);
    surveyModel.setValue("test", [{product : "3100", liking:"kowthal"}, {product : "3102", liking:"ganesh"}]);
    
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  } 

  ngOnInit() {}
}

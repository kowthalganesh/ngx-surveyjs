import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  json = {
    pages: [{
    questions: [
        {
            type: "matrixdynamic",
            name: "pretest",
            columns: [{
                name: "product",
                title: "Product",
                cellType: "text"
            },{
                    name: "liking",
                    title: "Liking",
                    cellType: "text"
                },{
                    name: "rank",
                    title: "Rank",
                    cellType: "text",
                    inputType: "number",
                }, {
                    name: "experience",
                    title: "How do you mainly wash ?",
                    choices: [{value: 1, text: "Laundry Service"}, 
                              {value: 2, text: "Common Service"},
                              {value: 3, text: "Other Service"}]
                }, {
                  name: "scale",
                  title: "0-5 Scale",
                  cellType: "text",
                  inputType: "number",
              }, {
                    name: "energy",
                    title: "Energy",
                    cellType: "text",
                    inputType: "number",
                },  {
                    name: "mood",
                    title: "mood",
                    choices: [{value: 1, text: "Relaxed"}, 
                              {value: 2, text: "Weak"},
                              {value: 3, text: "Strong"}]
                }, {
                  name: "Comments",
                  title: "Comments",
                  cellType: "text"
              }
            ]
        }, 
        {
            type: "matrixdynamic",
            name: "test",
            columns: [{
                name: "product",
                title: "Product",
                cellType: "text",
                readOnly: true,
            },{
                    name: "liking",
                    title: "Liking",
                    cellType: "text",
                },{
                    name: "rank",
                    title: "Rank",
                    cellType: "text",
                    inputType: "number"
                }, {
                    name: "experience",
                    title: "How do you mainly wash ?",
                    choices: [{value: 1, text: "Laundry Service"}, 
                              {value: 2, text: "Common Service"},
                              {value: 3, text: "Other Service"}]
                }, {
                  name: "scale",
                  title: "0-5 Scale",
                  cellType: "text",
                  inputType: "number",
              }, {
                    name: "energy",
                    title: "Energy",
                    cellType: "text",
                    inputType: "number",
                },  {
                    name: "mood",
                    title: "mood",
                    choices: [{value: 1, text: "Relaxed"}, 
                              {value: 2, text: "Weak"},
                              {value: 3, text: "Strong"}]
                }, {
                  name: "Comments",
                  title: "Comments",
                  cellType: "text"
              }
            ]
        }
    ]
  }, {
    questions: [
        {
            type: "matrixdynamic",
            name: "survey",
            columns: [{
                name: "product",
                title: "Product",
                cellType: "text",
                readOnly: true,
            },{
                    name: "liking",
                    title: "Liking",
                    cellType: "text",
                }, {
                    name: "rank",
                    title: "Rank",
                    cellType: "text",
                    inputType: "number"
                }, {
                    name: "experience",
                    title: "How do you mainly wash ?",
                    choices: [{value: 1, text: "Laundry Service"}, 
                              {value: 2, text: "Common Service"},
                              {value: 3, text: "Other Service"}]
                }, {
                  name: "scale",
                  title: "0-5 Scale",
                  cellType: "text",
                  inputType: "number",
              }, {
                    name: "energy",
                    title: "Energy",
                    cellType: "text",
                    inputType: "number",
                },  {
                    name: "mood",
                    title: "mood",
                    choices: [{value: 1, text: "Relaxed"}, 
                              {value: 2, text: "Weak"},
                              {value: 3, text: "Strong"}]
                }, {
                  name: "Comments",
                  title: "Comments",
                  cellType: "text"
              }
            ],
            rowCount: 3
        }
    ]
  }
]
};

  onSurveySaved(survey) {
    this.json = survey;
  }
}

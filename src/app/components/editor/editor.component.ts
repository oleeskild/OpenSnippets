import { Component, OnInit, ViewChild } from '@angular/core';
import { Snippet } from "../../../models/snippet";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('monaco') monacoEditor;

  snippets: Snippet[];
  selectedSnippet: Snippet;

  constructor() {
    console.log('init')
  }

  ngOnInit() {
    this.snippets = [
      {
        title: "Javascript print",
        content: "console.log('Hello world')",
        created: new Date(),
        lastEdited: new Date(),
        language: "javascript",
        tags: ["javascript", "print"]
      },
      {
        title: "Java print",
        content: "System.out.println(\"Hello world\")",
        created: new Date(),
        lastEdited: new Date(),
        language: "java",
        tags: ["java", "print"]
      }
    ]
    this.selectedSnippet = this.snippets[0];
  }

  selectSnippet(snippet: Snippet) {
    this.monacoEditor.value=snippet.content;
    this.monacoEditor.language=snippet.language;
    console.log(this.monacoEditor.value);
    this.selectedSnippet = snippet;
  }

}

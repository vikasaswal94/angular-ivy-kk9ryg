import { Component, VERSION } from "@angular/core";
import Editor from "./ckeditor5/build/ckeditor";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public Editor = Editor;
  editorConfig = {
    ckfinder: {
      uploadUrl: `/images/ckeditor`,
    },
  };
  public onReady(editor) {}
}

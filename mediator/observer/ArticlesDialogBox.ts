import ListBox from "./ListBox";
import Button from "./Button";
import TextBox from "./TextBox";

class ArticlesDialogBox {
  private _articles = new ListBox();
  private _titleTextBox = new TextBox();
  private _saveButton = new Button();
  constructor() {
    this._articles.attach({ update: () => this.articleSelected() });
    this._titleTextBox.attach({ update: () => this.titleChanged() });
  }

  public simulateUserInteraction() {
    this._articles.selection = "Article 1";
    this._titleTextBox.content = "";
    console.log("TittleTextBox:", this._titleTextBox.content);
    console.log("SaveButton:", this._saveButton.isEnabled);
  }

  private articleSelected() {
    this._titleTextBox.content = this._articles.selection;
    this._saveButton.isEnabled = true;
  }

  private titleChanged() {
    this._saveButton.isEnabled = !this._titleTextBox.isEmpty();
  }
}

export default ArticlesDialogBox;

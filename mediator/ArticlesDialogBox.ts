import Button from "./Button";
import DialogBox from "./DialogBox";
import ListBox from "./ListBox";
import TextBox from "./TextBox";
import UIControl from "./UIConrol";

class ArticlesDialogBox implements DialogBox {
  private _saveButton = new Button(this);
  private _articleListBox = new ListBox(this);
  private _titleTextBox = new TextBox(this);
  public simulateUserInteraction() {
    this._articleListBox.selection = "Article 1";
    this._titleTextBox.content = "";
    console.log("TittleTextBox:", this._titleTextBox.content);
    console.log("SaveButton:", this._saveButton.isEnabled);
  }
  changed(control: UIControl): void {
    if (control === this._articleListBox) this.articleSelected();
    else if (control === this._titleTextBox) this.titleChanged();
  }

  private articleSelected() {
    this._titleTextBox.content = this._articleListBox.selection;
    this._saveButton.isEnabled = true;
  }

  private titleChanged() {
    this._saveButton.isEnabled = !this._titleTextBox.isEmpty();
  }
}
export default ArticlesDialogBox;

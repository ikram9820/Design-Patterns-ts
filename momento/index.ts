class Editor {
  private _content: string[] = [];

  public get content(): string {
    return this._content[this._content.length - 1];
  }
  public set content(value: string) {
    this._content.push(value);
  }

  public undo(): string | undefined {
    return this._content.pop();
  }
}

let editor = new Editor();

editor.content = "ikram";
editor.content = "khan";
editor.content = "kako";

console.log(editor.content);

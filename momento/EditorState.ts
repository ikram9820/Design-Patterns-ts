
class EditorState{
    constructor(private _data: string){}



    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }
}

export default EditorState;
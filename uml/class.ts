class Person {
    //In a typescript constructor, we can declare 
    //and initialize variable at same time
  constructor(private _name: string, protected _id: number) {}

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

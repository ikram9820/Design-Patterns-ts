export default class Product {
  constructor(private _id: number, private _name: string) {}

  public toString(): string {
    return "Product{" + "id=" + this._id + ", name='" + this._name + "'" + "}";
  }
}

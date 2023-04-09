export default class CartItem {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _price: number,
    private _quantity: number
  ) {}

  public toString(): string {
    return `id=${this._id}, name=${this._name}, price=$${this._price}, quantity=${this._quantity}`;
  }

  public get quantity(): number {
    return this._quantity;
  }
  public get price(): number {
    return this._price;
  }
}

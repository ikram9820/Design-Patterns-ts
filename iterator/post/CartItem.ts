class CartItem {
  constructor(
    private readonly _id: number,
    private _name: string,
    private _price: number
  ) {}
  public getDetails(): string {
    return `id:${this._id}, name:${this._name}, price:${this._price}`;
  }
  public set price(value: number) {
    this._price = value;
  }
  public set name(value: string) {
    this._name = value;
  }
}
export default CartItem;

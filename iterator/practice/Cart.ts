import Iterator from "./Iterator";
import CartItem from "./CartItem";

export default class Cart {
  private _cartItems: CartItem[] = [];

  public addItem(item: CartItem) {
    this._cartItems.push(item);
  }

  public showCartDetails(): void {
    let iterator = this.createIterator();
    let totalItem = 0;
    let totalPrice = 0;
    while (iterator.hasNext()) {
      let item = iterator.current();
      totalItem += item.quantity;
      totalPrice += item.quantity * item.price;
      iterator.next();
    }
    console.log(`Total item in cart is ${totalItem} `);
    console.log(`Total price cart's items is $${totalPrice} `);
  }

  public createIterator(): Iterator<CartItem> {
    class ListIterator implements Iterator<CartItem> {
      private _index: number = 0;
      constructor(private _cart: Cart) {}

      hasNext(): boolean {
        return this._index < this._cart._cartItems.length;
      }
      current(): CartItem {
        return this._cart._cartItems[this._index];
      }
      next(): void {
        this._index++;
      }
    } //end ListIterator

    return new ListIterator(this);
  }
}

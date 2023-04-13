import Iterator from "./Iterator";
import CartItem from "./CartItem";
import Iterable from "./Iterable";

class Cart implements Iterable<CartItem> {
  private _items: CartItem[] = [];
  public addCartItem(product: CartItem) {
    this._items.push(product);
  }
  public createIterator(): Iterator<CartItem> {
    class ListIterator implements Iterator<CartItem> {
      private _index = 0;
      constructor(private _cart: Cart) {}
      hasNext(): boolean {
        return this._index < this._cart._items.length;
      }
      current(): CartItem {
        return this._cart._items[this._index];
      }
      next(): void {
        this._index++;
      }
    } //end ListIterator
    return new ListIterator(this);
  }
}
export default Cart;

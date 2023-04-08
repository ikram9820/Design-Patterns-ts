import Iterator from "./Iterator";
import Product from "./Product";

export default class ProductCollection {
  private _products: Product[] = [];

  public add(product: Product) {
    this._products.push(product);
  }

  public createIterator(): Iterator<Product> {
    class ListIterator implements Iterator<Product> {
      private _index = 0;
      constructor(private _collection: ProductCollection) {}
      hasNext(): boolean {
        return this._index < this._collection._products.length;
      }
      current(): Product {
        return this._collection._products[this._index];
      }
      next(): void {
        this._index++;
      }
    } //end ListIterator

    return new ListIterator(this);
  }
}

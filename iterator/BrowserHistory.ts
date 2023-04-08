import Iterator from "./Iterator";

export default class BrowseHistory {
  private _urls: string[] = [];

  public push(url: string): void {
    this._urls.push(url);
  }

  public pop(): string {
    let removedItem = this._urls.pop();
    if (removedItem) return removedItem;
    throw new Error("there is no history");
  }

  public createIterator(): Iterator {
    return this.arrayIterator();
  }

  private arrayIterator() {
    class ArrayIterator implements Iterator {
      private _index = 0;
      constructor(private _history: BrowseHistory) {}

      public hasNext(): boolean {
        return this._index < this._history._urls.length;
      }
      public current(): string {
        return this._history._urls[this._index];
      }
      public next() {
        this._index++;
      }
    }//end ArrayIterator
    return new ArrayIterator(this);
  }
}

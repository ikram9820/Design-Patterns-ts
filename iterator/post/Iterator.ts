interface Iterator<T> {
  hasNext(): boolean;
  current(): T;
  next(): void;
}
export default Iterator;

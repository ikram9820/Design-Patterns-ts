export default interface Iterator<T> {
  hasNext(): boolean;
  current(): T;
  next(): void;
}

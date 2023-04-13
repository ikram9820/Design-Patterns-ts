import Iterator from "./Iterator";

interface Iterable<T> {
  createIterator(): Iterator<T>;
}
export default Iterable;

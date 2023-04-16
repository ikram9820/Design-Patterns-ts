//Observable.ts
import Observer from "./Observer";

interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notifyObserver(): void;
}
export default Observable;

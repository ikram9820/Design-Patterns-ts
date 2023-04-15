import Observer from "./Observer";

interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

export default Observable;

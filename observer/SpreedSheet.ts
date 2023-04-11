import Observer from "./Observer";

class SpreedSheet implements Observer {
  update(value: number): void {
    console.log(`value: ${value} in spreesheet.`);
  }
}

export default SpreedSheet;

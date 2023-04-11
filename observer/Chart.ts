import Observer from "./Observer";

class Chart implements Observer {
  update(value: number): void {
    console.log(`value: ${value} in chart.`);
  }
}

export default Chart;

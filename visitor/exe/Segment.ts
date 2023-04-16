import Operation from "../Operation";

interface Segment {
  execute(operation:Operation):void;
}
export default Segment;

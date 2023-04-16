import Operation from "./Operation";
import Segment from "./Segment";

class FactSegment implements Segment {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}
export default FactSegment;

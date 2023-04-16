import Operation from "./Operation";
import Segment from "./Segment";

class FormatSegment implements Segment {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}
export default FormatSegment;

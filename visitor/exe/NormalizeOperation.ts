import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Operation from "./Operation";
import Segment from "./Segment";

class NormalizeOperation implements Operation {
  apply(segment: Segment): void {
    if (segment instanceof FactSegment) this.normalizeFact();
    else if (segment instanceof FormatSegment) this.normalizeFormat();
  }
  normalizeFact() {
    console.log("Normalize - Fact Segment");
  }
  normalizeFormat() {
    console.log("Normalize - Format Segment");
  }
}
export default NormalizeOperation;

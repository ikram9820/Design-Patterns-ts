import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import AudioFilter from "./AudioFilter";
import Segment from "./Segment";

class Normalize implements AudioFilter {
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
export default Normalize;

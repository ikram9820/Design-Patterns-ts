import AudioFilter from "./AudioFilter";
import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Segment from "./Segment";

class ReduceNoise implements AudioFilter {
  apply(segment: Segment): void {
    if (segment instanceof FactSegment) this.reduceNoiseFact();
    else if (segment instanceof FormatSegment) this.reduceNoiseFormat();
  }
  reduceNoiseFact() {
    console.log("Reduce Noise - Fact Segment");
  }
  reduceNoiseFormat() {
    console.log("Reduce Noise - Format Segment");
  }
}
export default ReduceNoise;

import AudioFilter from "./AudioFilter";
import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Segment from "./Segment";

class AddReverb implements AudioFilter {
  apply(segment: Segment): void {
    if (segment instanceof FactSegment) this.addReverbFact();
    else if (segment instanceof FormatSegment) this.addReverbFormat();
  }
  addReverbFact() {
    console.log("Add Reverb - Fact Segment");
  }
  addReverbFormat() {
    console.log("Add Reverb - Format Segment");
  }
}
export default AddReverb;

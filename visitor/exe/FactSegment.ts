import AudioFilter from "./AudioFilter";
import Segment from "./Segment";

class FactSegment implements Segment {
  apply(filter: AudioFilter): void {
    filter.apply(this);
  }
}
export default FactSegment;

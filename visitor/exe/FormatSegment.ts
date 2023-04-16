import AudioFilter from "./AudioFilter";
import Segment from "./Segment";

class FormatSegment implements Segment {
  apply(filter: AudioFilter): void {
    filter.apply(this);
  }
}
export default FormatSegment;

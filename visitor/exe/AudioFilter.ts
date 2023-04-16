import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";

interface AudioFilter {
  apply(segment: FactSegment): void;
  apply(segment: FormatSegment): void;
}
export default AudioFilter;

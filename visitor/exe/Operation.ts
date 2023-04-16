import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";

interface Operation {
  apply(segment: FactSegment): void;
  apply(segment: FormatSegment): void;
}
export default Operation;

import AudioFilter from "./AudioFilter";

interface Segment {
  apply(filter: AudioFilter): void;
}
export default Segment;

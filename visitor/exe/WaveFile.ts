import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Operation from "./Operation";
import Segment from "./Segment";

class WavFile {
  private _segments: Segment[] = [];
  public static read(fileName: string): WavFile {
    // Simulate reading a wav file and building the segments
    var wavFile = new WavFile();
    wavFile._segments.push(new FormatSegment());
    wavFile._segments.push(new FactSegment());
    wavFile._segments.push(new FactSegment());
    wavFile._segments.push(new FactSegment());

    return wavFile;
  }
  execute(operation: Operation) {
    this._segments.forEach((segment) => segment.execute(operation));
  }
}
export default WavFile;

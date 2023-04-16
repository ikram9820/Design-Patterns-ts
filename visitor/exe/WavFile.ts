import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import AudioFilter from "./AudioFilter";
import Segment from "./Segment";

class WavFile {
  private _segments: Segment[] = [];
  public static read(fileName: string): WavFile {
    console.log(`Reading data from ${fileName}`)
    var wavFile = new WavFile();
    wavFile._segments.push(new FormatSegment());
    wavFile._segments.push(new FactSegment());
    return wavFile;
  }
  execute(filter: AudioFilter) {
    this._segments.forEach((segment) => segment.apply(filter));
  }
}
export default WavFile;

import AddReverb from "./AddReverb";
import Normalize from "./Normalize";
import ReduceNoise from "./ReduceNoise";
import WavFile from "./WavFile";

let file = WavFile.read("file.wav");
file.execute(new Normalize());
file.execute(new ReduceNoise());
file.execute(new AddReverb());
// Output 
// Reading data from file.wav
// Normalize - Format Segment
// Normalize - Fact Segment
// Reduce Noise - Format Segment
// Reduce Noise - Fact Segment
// Add Reverb - Format Segment
// Add Reverb - Fact Segment
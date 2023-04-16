import NormalizeOperation from "./NormalizeOperation";
import WavFile from "./WaveFile";

let wave = WavFile.read('wave.wav');
wave.execute(new NormalizeOperation());
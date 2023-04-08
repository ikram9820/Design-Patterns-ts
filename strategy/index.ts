import BlackAndWhite from "./B&w";
import ImageStorage from "./ImageStorage";
import Png from "./Png";

let storage = new ImageStorage(new Png(), new BlackAndWhite());

storage.store();

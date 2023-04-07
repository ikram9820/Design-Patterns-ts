import TravelMode from "./TravelMode";

class Bicycling implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (bicycling)");
    return 2;
  }
  getDirection(): number {
    console.log("Calculating Direction (bicycling)");
    return 2;
  }
}

export default Bicycling;

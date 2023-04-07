import TravelMode from "./TravelMode";

class Driving implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (driving)");
    return 1;
  }
  getDirection(): number {
    console.log("Calculating Direction (driving)");
    return 1;
  }
}
export default Driving;

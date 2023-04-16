// Driving.ts
import TravelMode from "./TravelMode";

class Driving implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (driving)");
    return 1;
  }
  getDirection() {
    console.log("Calculating Direction (driving)");
  }
}
export default Driving;

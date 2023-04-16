// Walking.ts
import TravelMode from "./TravelMode";

class Walking implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (walking)");
    return 4;
  }
  getDirection() {
    console.log("Calculating Direction (walking)");
  }
}
export default Walking;

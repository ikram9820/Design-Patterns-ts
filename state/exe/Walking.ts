import TravelMode from "./TravelMode";

class Walking implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (walking)");
    return 4;
  }
  getDirection(): number {
    console.log("Calculating Direction (walking)");
    return 4;
  }
}

export default Walking;

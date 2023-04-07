import TravelMode from "./TravelMode";

class Transit implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (transit)");
    return 3;
  }
  getDirection(): number {
    console.log("Calculating Direction (transit)");
    return 3;
  }
}

export default Transit;

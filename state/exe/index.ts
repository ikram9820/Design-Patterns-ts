//index.ts
import DirectionService from "./DirectionService";
import Driving from "./Driving";
import Walking from "./Walking";

let map = new DirectionService(new Walking());
map.getEta();
map.getDirection();
map.travelMode = new Driving();
map.getEta();
map.getDirection();
//Output
// Calculating ETA (walking)
// Calculating Direction (walking)
// Calculating ETA (driving)
// Calculating Direction (driving)
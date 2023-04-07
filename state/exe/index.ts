import Bicycling from "./Bicycling";
import DirectionService from "./DirectionService";
import Walking from "./Walking";

let googleMap = new DirectionService(new Walking());
googleMap.getEta();
googleMap.getDirection();
googleMap.travelMode = new Bicycling();
googleMap.getEta();
googleMap.getDirection();

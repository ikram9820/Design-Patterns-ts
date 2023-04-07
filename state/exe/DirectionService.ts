import TravelMode from "./TravelMode";

class DirectionService {
 constructor( private _travelMode: TravelMode){};

  public getEta() {
    this._travelMode?.getEta();
  }

  public getDirection() {
    this._travelMode?.getDirection();
  }

  public get travelMode(): TravelMode {
    return this._travelMode;
  }

  public set travelMode(travelMode: TravelMode) {
    this._travelMode = travelMode;
  }
}

export default DirectionService;
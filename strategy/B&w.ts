import Filter from "./Filteter";

export default class BlackAndWhite implements Filter {
  apply(): void {
    console.log("black and white filter applied.");
  }
}

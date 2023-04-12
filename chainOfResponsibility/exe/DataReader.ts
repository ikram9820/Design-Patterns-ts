abstract class DataReader {

  constructor(private _next: DataReader | null) {}

  public read(fileName: string) {
    if (fileName.endsWith(this.getExtension())) {
      this.doRead(fileName);
      return;
    }
    if (this._next) this._next.read(fileName);
    else throw new Error("File format not supported.");
  }

  protected abstract getExtension(): string;
  protected abstract doRead(fileName: string): void;
}
export default DataReader;

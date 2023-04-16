import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

class HtmlDocument {
  private _nodes: HtmlNode[] = [];

  public addNode(node: HtmlNode) {
    this._nodes.push(node);
  }
  public execute(operation: Operation) {
    this._nodes.forEach((node) => node.execute(operation));
  }
}
export default HtmlDocument;
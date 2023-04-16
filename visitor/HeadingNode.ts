import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

class HeadingNode implements HtmlNode {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}
export default HeadingNode;

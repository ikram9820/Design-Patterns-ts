import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

class AnchorNode implements HtmlNode{
    execute(operation: Operation): void {
        operation.apply(this)
    }
}
export default AnchorNode;
import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";
import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

class PlainTextOperation implements Operation {
  apply(node: HtmlNode): void {
    if (node instanceof HeadingNode) this.headingText();
    else if (node instanceof AnchorNode) this.anchorText();
  }
  anchorText() {
    console.log("PlainText - Anchor.");
  }
  headingText() {
    console.log("PlainText - Heading.");
  }
}
export default PlainTextOperation;

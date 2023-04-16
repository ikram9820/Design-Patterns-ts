import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";
import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

class HighlightOperation implements Operation {
  apply(node: HtmlNode): void {
    if (node instanceof AnchorNode) this.anchorHighlit();
    else if (node instanceof HeadingNode) this.headingHighlight();
  }
  anchorHighlit() {
    console.log("Highlight - Anchor.");
  }
  headingHighlight() {
    console.log("Highlight - Heading.");
  }
}
export default HighlightOperation;

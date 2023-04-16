import Operation from "./Operation";

interface HtmlNode {
    execute(operation:Operation):void;
}
export default HtmlNode;
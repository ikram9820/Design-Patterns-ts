import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";
import HighlightOperation from "./HighlightOperation";
import HtmlDocument from "./HtmlDocument";
import PlainTextOperation from "./PlainTextOperation";

let doc = new HtmlDocument();
doc.addNode(new AnchorNode());
doc.addNode(new HeadingNode());
doc.execute(new PlainTextOperation());
doc.execute(new HighlightOperation());

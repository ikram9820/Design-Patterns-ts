import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";

interface Operation {
    apply(anchor:AnchorNode):void;
    apply(heading:HeadingNode):void;
}

export default Operation;
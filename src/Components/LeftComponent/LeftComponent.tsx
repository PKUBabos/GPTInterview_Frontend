import { MarkDown } from "./MarkDown/MarkDown";
import { MindMap } from "./MindMap/MindMap";
import "./LeftComponent.css";

interface LeftComponentProps {
  buttonOnClick(): void
}

export default function LeftComponent(props: LeftComponentProps) {

  return (
    <div className="leftCpnt">
      <MarkDown />
      <div id="btn-container">
        <button className="mind-map-btn" onClick={props.buttonOnClick}>思维导图</button>
      </div>
      {/* <MindMap /> */}
    </div>
  );
}

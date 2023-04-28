import { MarkDown } from "./MarkDown/MarkDown";
import { MindMap } from "./MindMap/MindMap";
import "./LeftComponent.css";

export default function LeftComponent() {
  return (
    <div className="leftCpnt">
      <MarkDown />
      <MindMap />
    </div>
  );
}
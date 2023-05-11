import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './MarkDown.css';

export function MarkDown() {
  return (
    <div className="markDown">
      <Editor
        placeholder="请输入内容"
        previewStyle="tab"
        height="100%"
        initialValue="..."
        hideModeSwitch={true}
        autofocus={false}
        toolbarItems={[]}
      ></Editor>
    </div>
  );
}
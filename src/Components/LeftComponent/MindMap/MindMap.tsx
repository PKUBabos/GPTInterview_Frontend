import { useEffect, useState } from 'react';
import { message } from 'antd';
import LogicFlow from '@logicflow/core';
import NodePanel from './Components/NodePanel';
import RegisteNode from './Components/registerNode';
import { themeApprove, data } from './config';
import './index.css';

const config = {
  stopScrollGraph: false,
  stopZoomGraph: false,
  grid: false,
  keyboard: { enabled: true },
  style: themeApprove,
}

export function MindMap() {
  const [lf, setLf] = useState({} as LogicFlow);
  const setNodeData = useState()[1];

  useEffect(() => {
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector('#graph') as HTMLElement
    });
    setLf(lf);
    RegisteNode(lf);
    lf.render(data);
    initEvent(lf);
  }, []);
  const initEvent = (lf: LogicFlow) => {
    lf.on('element:click', ({ data }) => {
      setNodeData(data);
      console.log(JSON.stringify(lf.getGraphData()));
    });
    lf.on('connection:not-allowed', (data: any) => {
      message.error(data.msg);
    });
  }

  return (
    <div className="approve-example-container">
      <div className="node-panel">
        {NodePanel(lf)}
      </div>
      <div id="graph" className="viewport" />
    </div>
  )
}

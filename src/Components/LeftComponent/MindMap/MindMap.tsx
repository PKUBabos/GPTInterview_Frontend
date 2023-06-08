import { useEffect, useState } from 'react';
import { message } from 'antd';
import LogicFlow from '@logicflow/core';
import NodePanel from './Components/NodePanel';
import RegisteNode from './Components/registerNode';
import { themeApprove, data } from './config';
import './MindMap.css';

const config = {
  stopScrollGraph: false,
  stopZoomGraph: false,
  grid: false,
  keyboard: { enabled: true },
  style: themeApprove,
}

interface MindMapProps {
  lf: LogicFlow;
  setLf(lf: LogicFlow): void;
  setNodeData: React.Dispatch<React.SetStateAction<undefined>>;
}

export function MindMap(props: MindMapProps) {
  useEffect(() => {
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector('#graph') as HTMLElement
    });
    props.setLf(lf);
    RegisteNode(lf);
    lf.render(data);
    initEvent(lf);
    // var width = window.screen.width * 0.3;
    // var height = window.screen.height * 0.5 - 100;
    var width = window.screen.width;
    var height = window.screen.height * 0.7;
    lf.resize(width, height);
  }, []);
  const initEvent = (lf: LogicFlow) => {
    lf.on('element:click', ({ data }) => {
      props.setNodeData(data);
      console.log(JSON.stringify(lf.getGraphData()));
    });
    lf.on('connection:not-allowed', (data: any) => {
      message.error(data.msg);
    });
  }

  window.addEventListener(`resize`, function () {
    // var width = window.screen.width * 0.3;
    // var height = window.screen.height * 0.5 - 200;
    // lf.resize(undefined, height);
  });

  return (
    <div className="container">
      <div className="node-panel">
        {NodePanel(props.lf)}
      </div>
      <div id="graph" className="viewport" />
    </div>
  )
}

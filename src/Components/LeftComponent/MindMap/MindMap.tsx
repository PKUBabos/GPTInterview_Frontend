import React, { useEffect, useState } from 'react';
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
  const [nodeData, setNodeData] = useState();

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

  const updateProperty = (id: string, data: any) => {
    const node = lf.graphModel.nodesMap[id];
    const edge = lf.graphModel.edgesMap[id];
    if (node) {
      node.model.setProperties(Object.assign(node.model.properties, data));
    } else if (edge) {
      edge.model.setProperties(Object.assign(edge.model.properties, data));
    }
  }

  const hidePropertyPanel = () => {
    setNodeData(undefined);
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
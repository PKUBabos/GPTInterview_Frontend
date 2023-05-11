import React from 'react';
import LogicFlow from '@logicflow/core';
import { approveNodes } from '../config';
import { HtmlNodeConfig } from '../type';

export default function NodePanel(lf: LogicFlow) {
  const dragNode = (item: HtmlNodeConfig) => {
    lf.dnd.startDrag({
      type: item.type,
      text: item.label
    })
  }

  const getNodePanel = (): JSX.Element[] => {
    const nodeList: JSX.Element[] = [];
    approveNodes.forEach((item, key) => {
      nodeList.push(
        <div
          className={`approve-node node-${item.type}`}
          key={key}
        >
          <div
            className="node-shape"
            style={{ ...item.style }}
            onMouseDown={() => dragNode(item)}
          ></div>
        </div>
      )
    })
    return nodeList;
  }
  return getNodePanel()
}
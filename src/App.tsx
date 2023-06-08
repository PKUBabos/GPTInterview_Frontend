import { SetStateAction, useState } from 'react';
import Header from './Components/Header/Header';
import { HomePage } from './Components/HomePage';
import { MindMap } from './Components/LeftComponent/MindMap/MindMap';
import './App.css';
import './Components/LeftComponent/LeftComponent.css';
import LogicFlow from '@logicflow/core';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [lf, setLf] = useState({} as LogicFlow);
  const setNodeData = useState()[1];
  const buttonOnClick = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <div style={showModal ? {
        display: 'block'
      } : {
        display: 'none'
      }}>
        <div id='close-btn-container'>
          <button className='mind-map-btn' onClick={buttonOnClick}>close</button>
        </div>
        <MindMap lf={lf} setLf={setLf} setNodeData={setNodeData} />
      </div>
      <div style={showModal ? {
        display: 'none'
      } : {
        display: 'block'
      }}>
        <Header />
        <HomePage onClick={buttonOnClick} />
      </div>
    </div>
  );

  //   if (showModal) {
  //     return (
  //       <>
  //         <div id='close-btn-container'>
  //           <button className='mind-map-btn' onClick={buttonOnClick}>close</button>
  //         </div>
  //         <MindMap lf={lf} setLf={setLf} setNodeData={setNodeData} />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div className="App">
  //         <Header />
  //         <HomePage onClick={buttonOnClick} />
  //       </div>
  //     );
  //   }
}

export default App;

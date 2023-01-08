import React, { useEffect, useState } from 'react';
import "./../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';
import Balance from './components/Balance/Balance';
import Expenditure, { ExpenditureProps } from './components/Expenditure/Expenditure';
import SwipableViews from 'react-swipeable-views';

function App() {
  const getIsMobile = () => window.innerWidth <= 768;

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
      const onResize = () => {
          setIsMobile(getIsMobile());
      }

      window.addEventListener("resize", onResize);
  
      return () => {
          window.removeEventListener("resize", onResize);
      }
  }, []);

  if(!isMobile) {
    return (
      <div className="App">
        <div className="row h-100">
          <div className="col-md-6">
            <Balance></Balance>
          </div>
          <div className="col-md-6 f-white bg-black">
            <Expenditure isMobile></Expenditure>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App d-flex flex-column">
        {/* <div className="tab-content flex-grow-1" id="myTabContent">
          <div className="tab-pane fade show active h-100" id="tabPaneBalance" role="tabpanel" aria-labelledby="balance-tab">
            <Balance></Balance>
          </div>
          <div className="tab-pane fade h-100" id="tabPaneExpenditure" role="tabpanel" aria-labelledby="expenditure-tab">
            <Expenditure></Expenditure>
          </div>
        </div>
        <div className="nav nav-tabs mt-5" id="myTab" role="tablist">
            <button className="btn active w-50" id="home-tab" data-bs-toggle="tab" data-bs-target="#tabPaneBalance" type="button" role="tab" aria-controls="tabPaneBalance" aria-selected="true">Balance</button>
            <button className="btn w-50" id="profile-tab" data-bs-toggle="tab" data-bs-target="#tabPaneExpenditure" type="button" role="tab" aria-controls="tabPaneExpenditure" aria-selected="false">Expenditure</button>
        </div> */}

        <SwipableViews enableMouseEvents className=''>
          <div className='mnh-100vh'>
            <Balance></Balance>
          </div>
          <div className='mnh-100vh h-100 bg-black mt-0 f-white'>
            <Expenditure isMobile></Expenditure>
          </div>
        </SwipableViews>
      </div>
    )
  }
}

export default App;

import './css/skeleton.css';
import './css/App.css';
import React from 'react';
import MainContainer from './mainContainer';
import SideBarContainer from './sideBarContainer';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from '../redux/store';
import Curtain from './curtain';


const App = () => {
  return <Provider store={store}>
    <BrowserRouter>
      <div>
        <Curtain />
        <Route path="/" render={() => {
          return <div className="App">
            <SideBarContainer />
            <MainContainer />
          </div>;
        }} />
      </div>
    </BrowserRouter>
  </Provider>;
};

export default App;

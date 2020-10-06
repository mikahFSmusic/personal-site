import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './components/TopBar';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppContainer />
    </div>
  );
}

export default App;
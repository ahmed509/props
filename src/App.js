import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from '/AB.js';
import Title from '/Title.js';
import Photo from '/Photo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Wrapper>

	<Photo src='/profile.png'/>

	<Title style={{

		color:'red'

}}>My Name here</Title>

	<Title small>My job here</Title>


</Wrapper>
      
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.scss';

const Card = (props) => {
  return (
    <div>
      <img src="http://placehold.it/75"></img>
      <div style={{display: 'inline-block', marginLeft: '1em'}}>
        <div style={{fontSize: '1.25rem', fontWeight: '500'}}>Person's Name</div>
        <div>Person's Company</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      <Card />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <CardList />
      </div>
    );
  };
};

export default App;

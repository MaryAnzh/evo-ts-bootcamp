import React from 'react';
import './App.scss';
import { Sea } from './components/container/sea/Sea';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Bubble sort</h2>
        <Sea name='sea'/>
      </div>
    );
  }
}

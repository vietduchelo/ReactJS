import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleableTimerForm from './ToggleableTimerForm.js';
import EditableTimerList from './edittabletimelist';
class App extends Component {
  state =
  {
    timers: [
      { title: 'Practice squat', project: 'Gym Chores', elapsed: 5456099, runningSince: Date.now(), },
      { title: 'Bake squash', project: 'Kitchen Chores', elapsed: 1273998, runningSince: null, },
    ],
  };
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Timer</h1>
        </header>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
          />
          {/* <ToggleableTimerForm isOpen={true} /> */}
        </div>
      </div>
    );
  }
}

export default App;

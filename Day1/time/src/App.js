import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleableTimerForm from './ToggleableTimerForm.js';
import EditableTimerList from './edittabletimelist';
class App extends Component {
  state =
    {
      timers: [
        { id: 1,title: 'Practice squat', project: 'Gym Chores', elapsed: 5456099, runningSince: Date.now(), },
        { id: 2, title: 'Bake squash', project: 'Kitchen Chores', elapsed: 1273998, runningSince: null, },
      ],
    };
  handleCreateFormSubmit = (timer) => { this.createTimer(timer); }
  createTimer = (timer) => {
    // const t = helpers.newTimer(timer);
    this.setState({
      // timers: this.state.timers.concat(t),
    });
  };
  handleEditFormSubmit = (attrs) => { this.updateTimer(attrs); };
  updateTimer = (attrs) => {
     this.setState({ timers: this.state.timers.map((timer)  => { if (timer.id === attrs.id) 
        { return Object.assign({}, timer,
           { title: attrs.title, project: attrs.project, }); }
            else { return timer; } 
          }), 
        }); 
      }
      handleTrashClick = (timerId) => { this.deleteTimer(timerId); };
      deleteTimer = (timerId) => { this.setState({ timers: this.state.timers.filter(t => t.id !== timerId), }); };
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
            onFormSubmit={this.handleEditFormSubmit} 
            onTrashClick={this.handleTrashClick} 
          />
          <ToggleableTimerForm 
          onFormSubmit={this.handleCreateFormSubmit}/>
        </div>
      </div>
    );

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import TimerForm from './TimerForm.js'
import Timer from './Timer.js'
class EditableTimer extends Component {
  render() {
    if (this.props.editFormOpen) {
      return (<TimerForm 
        title={this.props.title}
        project={this.props.project} />);
    }
    else {
      return (<Timer title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince} />
      )
    }
    return (
      <div></div>
    );
  }
}

export default EditableTimer;

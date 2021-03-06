import React, { Component } from 'react';
import './App.css';
import TimerForm from './TimerForm.js'
import Timer from './Timer.js'
class EditableTimer extends Component {
  
  state = {
    editFormOpen: false
  };
  handleEditClick = () => { 
    this.openForm();
   };
  handleFormClose = () => { this.closeForm(); };
  handleSubmit = (timer) => { 
    this.props.onFormSubmit(timer); this.closeForm(); 
  };
  closeForm = () => {
     this.setState({ editFormOpen: false });
     };
  openForm = () => { 
    //console.log("sds");
    this.setState({ editFormOpen: true });
   };
  render() {
    if (this.state.editFormOpen) {
      return (<TimerForm 
        id = {this.id}
        title={this.props.title}
        project={this.props.project} 
        onFormSubmit={this.handleSubmit}
         onFormClose={this.handleFormClose} 
         
        />);

    }
    else {
      return (<Timer 
        id={this.props.id} 
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince} 
        onEditClick={this.handleEditClick}
        onTrashClick={this.props.onTrashClick} />
        
      )
    }
    return (
      <div></div>
    );
  }
}

export default EditableTimer;

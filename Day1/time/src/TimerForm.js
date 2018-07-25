import React, { Component } from 'react';
import './TimeForm.css';
class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };
    handleTitleChange = (e) => {
         this.setState({ title: e.target.value });
         };
    handleProjectChange = (e) => { 
        this.setState({ project: e.target.value }); 
    };
    handleSubmit = () => {
        this.props.onFormSubmit({
                id: this.props.id,
                title: this.state.title,
                project: this.state.project,
            });
    };
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';

        return (
            <div className='ui centered card1'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' className="form-control"  value={this.props.title} onChange={this.handleTitleChange} />
                        </div> <div className='field'>
                            <label>Project</label> 
                            <input className="form-control"  type='text' value={this.props.project} onChange={this.handleProjectChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className="btn btn-success haha" onClick={this.handleSubmit}>{submitText}</button>
                            <button className="btn btn-danger haha" onClick={this.props.onFormClose} > Cancel </button> </div>
                    </div>
                </div>
            </div>);
    }
}
export default TimerForm

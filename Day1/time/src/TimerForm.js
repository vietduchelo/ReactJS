import React, { Component}  from 'react';
import './TimeForm.css';
class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='ui centered card1'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' className="form-control" id="formGroupExampleInput" defaultValue={this.props.title} />
                        </div> <div className='field'>
                            <label>Project</label> <input className="form-control" id="formGroupExampleInput" type='text' defaultValue={this.props.project} />
                        </div> 
                        <div className='ui two bottom attached buttons'>
                            <button className="btn btn-success haha" > {submitText}</button>
                            <button className="btn btn-danger haha" > Cancel </button> </div>
                    </div>
                </div>
            </div>);
    }
    
}
export default TimerForm

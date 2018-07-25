import React, { Component}  from 'react';
import './Timer.css'
class Timer extends Component {
    handleTrashClick = () => { this.props.onTrashClick(this.props.id); };
    
    
    render() {
        // const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                       <span>18:18:18</span>
                    </div>
                     <div className='extra content'>
                     <i  onClick={this.handleTrashClick} className="fas fa-trash-alt"></i>
                     <span onClick={this.props.onEditClick}><i   className="fas fa-edit"></i></span>
                    </div>
                </div>
                <div ><button className="btn btn-danger hihi"> Start </button></div>
            </div>);
    }
}
export default Timer;

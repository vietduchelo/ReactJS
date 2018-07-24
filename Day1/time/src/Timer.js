import React, { Component}  from 'react';
import './Timer.css'
class Timer extends Component {
    render() {
        // const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                       <span>18:18:18</span>
                    </div>
                     <div className='extra content'>
                     <i class="fas fa-trash-alt"></i>
                     <i class="fas fa-edit"></i>
                    </div>
                </div>
                <div ><button className="btn btn-danger hihi"> Start </button></div>
            </div>);
    }
}
export default Timer;

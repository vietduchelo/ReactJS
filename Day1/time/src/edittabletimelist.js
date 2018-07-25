import React, { Component } from 'react';
import './App.css';
import EditableTimer from './Editabletimer'
class EditableTimerList extends Component {
    render() {
        const timers =
            this.props.timers.map((timer) =>
                (<EditableTimer 
                    key={timer.id + 1}
                    id={timer.id}
                    title={timer.title}
                    project={timer.project}
                    // elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
                    onFormSubmit={this.props.onFormSubmit}
                    onTrashClick={this.props.onTrashClick} 
                     />)
            );
        return (<div id='timers'> {timers}
        </div>);

        // return (
        //     <div id='timers'>
        //         {/* <EditableTimer
        //         /> */}
        //     </div>

        // );
    }
}

export default EditableTimerList;

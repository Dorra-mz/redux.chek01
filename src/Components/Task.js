import React from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../actions';

const Task = ({ task, dispatch }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleTask(task.id))}
            />
            <span>{task.description}</span>
        </div>
    );
};

export default connect()(Task);
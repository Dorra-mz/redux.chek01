import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ListTask = ({ tasks }) => {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'done') {
            return task.isDone;
        } else {
            return !task.isDone;
        }
    });

    return (
        <div>
            <h2>Tasks List</h2>
            <div>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="notDone">Not Done</option>
                </select>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

export default connect(mapStateToProps)(ListTask);
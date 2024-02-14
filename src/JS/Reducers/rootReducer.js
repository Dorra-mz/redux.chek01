import { combineReducers } from 'redux';
import { ADD_TASK, TOGGLE_TASK } from './actionTypes';

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState.tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TOGGLE_TASK:
            return state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, isDone: !task.isDone }
                    : task
            );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default rootReducer;
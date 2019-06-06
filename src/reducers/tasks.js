import types from "src/actions/Types";

const initial_state = {
  tasks: [],
  error: null,
  cant: 0
};

const tasks = (state = initial_state, action) => {
  switch (action.type) {
    case types.GET_TASKS_SUCCESS: {
      return {
        tasks: action.payload.tasks
      };
    }
    case types.FAILURE: {
      return {
        error: action.payload.error
      };
    }
    case types.ADD_TASK_SUCCESS: {
      return {
        tasks: [...state.tasks, action.payload.task]
      };
    }
    case types.TOGGLE_DONE: {
      const toggle = x => {
        if (x.url === action.payload.url) x.completed = !x.completed;
        return x;
      };
      return {
        tasks: state.tasks.map(toggle)
      };
    }
    case types.CLEAR_ALL_SUCCESS: {
      return {
        tasks: state.tasks.filter(x => !x.completed)
      };
    }
    default:
      return state;
  }
};

export default tasks;

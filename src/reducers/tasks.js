const initial_state = {
  tasks: [],
  error: null,
  cant: 0
};

const tasks = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_TASKS_SUCCESS": {
      return {
        tasks: action.payload.tasks
      };
    }
    case "GET_TASKS_FAILURE": {
      return {
        error: action.payload.error
      };
    }
    case "ADD_TASK": {
      return {
        tasks: [...state.tasks, action.payload.task]
      };
    }
    case "ADD_TASK_FAILURE": {
      return {
        error: action.payload.error
      };
    }
    case "TOGGLE_DONE": {
      const toggle = x => {
        if (x.url === action.payload.url) x.completed = !x.completed;
        return x;
      };
      return {
        tasks: state.tasks.map(toggle)
      };
    }
    case "CLEAR_ALL": {
      return {
        tasks: state.tasks.filter(x => !x.completed)
      };
    }
    default:
      return state;
  }
};

export default tasks;

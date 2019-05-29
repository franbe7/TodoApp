const initial_state = {
  tasks: []
};

const tasks = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            done: false
          }
        ]
      };
    }
    case "TOGGLE_DONE": {
      const toggle = x => {
        if (x.id === action.id) x.done = !x.done;
        return x;
      };
      return {
        tasks: state.tasks.map(toggle)
      };
    }
    case "CLEAR_ALL": {
      return {
        tasks: state.tasks.filter(x => !x.done)
      };
    }
    default:
      return state;
  }
};

export default tasks;

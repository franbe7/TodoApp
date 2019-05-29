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
    default:
      return state;
  }
};

export default tasks;

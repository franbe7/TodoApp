const initial_state = {
  title: "",
  description: ""
};

const formNewTask = (state = initial_state, action) => {
  switch (action.type) {
    case "CHANGE_FORM": {
      return {
        title: action.title,
        description: action.description
      };
    }
    case "RESET_FORM": {
      return initial_state
    }
    default:
      return state;
  }
};

export default formNewTask;

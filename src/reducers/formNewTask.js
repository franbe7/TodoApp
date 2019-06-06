import types from "src/actions/Types";

const initial_state = {
  title: "",
  description: ""
};

const formNewTask = (state = initial_state, action) => {
  switch (action.type) {
    case types.CHANGE_FORM: {
      return {
        title: action.payload.title,
        description: action.payload.description
      };
    }
    case types.RESET_FORM: {
      return initial_state;
    }
    default:
      return state;
  }
};

export default formNewTask;

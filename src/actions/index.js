import axios from "axios";

export const getTasks = () => {
  return async dispatch => {
    // dispatch(addTodoStarted());
    try {
      const res = await axios.get(`http://todo-backend-express.herokuapp.com/`);
      if (res.status !== 200) {
        throw Error(res.statusText);
      }
      dispatch(getTasksSuccess(res.data));
    } catch (err) {
      dispatch(getTasksFailure(err.message));
    }
  };
};

export const addTask = (title, description) => ({
  type: "ADD_TASK",
  payload: {
    title,
    description
  }
});

export const onChangeForm = (title, description) => ({
  type: "CHANGE_FORM",
  payload: {
    title,
    description
  }
});

export const resetForm = (title, description) => ({
  type: "RESET_FORM",
  payload: {
    title,
    description
  }
});

export const toggleDone = url => ({
  type: "TOGGLE_DONE",
  payload: {
    url
  }
});

export const clearAllDone = () => ({
  type: "CLEAR_ALL",
  payload: {}
});

export const getTasksSuccess = tasks => ({
  type: "GET_TASKS_SUCCESS",
  payload: {
    tasks
  }
});

export const getTasksFailure = error => ({
  type: "GET_TASKS_FAILURE",
  payload: {
    error
  }
});

import axios from "axios";

let taskId = 0;

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

export const addTask = (title, description) => {
  debugger;
  return async dispatch => {
    try {
      const url = `http://todo-backend-express.herokuapp.com/${taskId++}`;
      const res = await axios.post(
        `http://todo-backend-express.herokuapp.com/`,
        {
          title,
          url
        }
      );
      if (res.status !== 200) {
        throw Error(res.statusText);
      }
      dispatch(addTaskSuccess(res.data, url));
    } catch (err) {
      dispatch(addTasksFailure(err.message));
    }
  };
};

export const addTaskSuccess = (task) => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});

export const addTasksFailure = error => ({
  type: "ADD_TASKS_FAILURE",
  payload: {
    error
  }
})

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

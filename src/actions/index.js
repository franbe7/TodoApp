import axios from "axios";
import types from "src/actions/Types";

export const getTasks = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://todo-backend-express.herokuapp.com/`);
      dispatch(getTasksSuccess(res.data));
    } catch (err) {
      dispatch(getTasksFailure(err.message));
    }
  };
};

export const addTask = (title, description) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `http://todo-backend-express.herokuapp.com/`,
        {
          title
        }
      );
      dispatch(addTaskSuccess(res.data));
    } catch (err) {
      dispatch(addTasksFailure(err.message));
    }
  };
};

export const addTaskSuccess = task => ({
  type: types.ADD_TASK_SUCCESS,
  payload: {
    task
  }
});

export const addTasksFailure = error => ({
  type: types.FAILURE,
  payload: {
    error
  }
});

export const onChangeForm = (title, description) => ({
  type: types.CHANGE_FORM,
  payload: {
    title,
    description
  }
});

export const resetForm = (title, description) => ({
  type: types.RESET_FORM,
  payload: {
    title,
    description
  }
});

export const toggleDone = url => ({
  type: types.TOGGLE_DONE,
  payload: {
    url
  }
});

export const clearAllDone = tasks => {
  async function clear(x) { 
    try {
      await axios.delete(x.url);
    } catch (err){
      dispatch(clearAllDoneFailure(err.message));
    }
  }
  return dispatch => {
    tasks.map(clear)
    dispatch(clearAllDoneSuccess());
  };
}

export const clearAllDoneSuccess = () => ({
  type: types.CLEAR_ALL_SUCCESS,
  payload: {}
});

export const clearAllDoneFailure = error => ({
  type: types.FAILURE,
  payload: {}
});

export const getTasksSuccess = tasks => ({
  type: types.GET_TASKS_SUCCESS,
  payload: {
    tasks
  }
});

export const getTasksFailure = error => ({
  type: types.FAILURE,
  payload: {
    error
  }
});

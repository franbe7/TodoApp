import axios from 'axios'
import stringTypes from 'src/actions/stringTypes'
import controller from 'src/networking/controllers/ToDoController'
import {
  taskAddedAction,
  changeFormAction,
  toggleDoneAction,
  clearAllDoneAction,
  getTasksAction,
  failureAction,
} from 'src/actions/types'
import { ActionCreator } from 'redux'
import { Task } from 'src/types/task'

export const getTasks = () => {
  return async dispatch => {
    try {
      const res = await controller.getToDo()
      dispatch(getTasksSuccess(res.data))
    } catch (err) {
      dispatch(getTasksFailure(err.message))
    }
  }
}

export const addTask = (title, description) => {
  return async dispatch => {
    try {
      const res = await controller.sendToDo({ title })
      dispatch(addTaskSuccess(res.data))
    } catch (err) {
      dispatch(addTasksFailure(err.message))
    }
  }
}

export const addTaskSuccess: ActionCreator<taskAddedAction> = (task: Task) => ({
  type: stringTypes.ADD_TASK_SUCCESS,
  payload: {
    task,
  },
})

export const addTasksFailure: ActionCreator<failureAction> = (
  error: string,
) => ({
  type: stringTypes.FAILURE,
  payload: {
    error,
  },
})

export const onChangeForm: ActionCreator<changeFormAction> = (
  title: string,
  description: string,
) => ({
  type: stringTypes.CHANGE_FORM,
  payload: {
    title,
    description,
  },
})

export const resetForm: ActionCreator<changeFormAction> = (
  title: string,
  description: string,
) => ({
  type: stringTypes.RESET_FORM,
  payload: {
    title,
    description,
  },
})

export const toggleDone: ActionCreator<toggleDoneAction> = (url: string) => ({
  type: stringTypes.TOGGLE_DONE,
  payload: {
    url,
  },
})

export const clearAllDone = (tasks: Task[]) => {
  async function clear(x: Task) {
    try {
      await controller.deleteToDo(x.url)
    } catch (err) {
      dispatch(clearAllDoneFailure(err.message))
    }
  }
  return dispatch => {
    tasks.map(clear)
    dispatch(clearAllDoneSuccess())
  }
}

export const clearAllDoneSuccess: ActionCreator<clearAllDoneAction> = () => ({
  type: stringTypes.CLEAR_ALL_SUCCESS,
  payload: {},
})

export const clearAllDoneFailure: ActionCreator<failureAction> = (
  error: string,
) => ({
  type: stringTypes.FAILURE,
  payload: {
    error,
  },
})

export const getTasksSuccess: ActionCreator<getTasksAction> = (
  tasks: Task[],
) => ({
  type: stringTypes.GET_TASKS_SUCCESS,
  payload: {
    tasks,
  },
})

export const getTasksFailure: ActionCreator<failureAction> = (
  error: string,
) => ({
  type: stringTypes.FAILURE,
  payload: {
    error,
  },
})

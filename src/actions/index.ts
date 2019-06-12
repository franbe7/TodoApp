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
import { ActionCreator, Dispatch } from 'redux'
import { Task } from 'src/types/global'

export interface newTodo {
  title: string
}

export const getTasks: any = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await controller.getToDo()
      dispatch(getTasksSuccess(res.data))
    } catch (err) {
      dispatch(getTasksFailure(err.message))
    }
  }
}

export const addTask: any = (title: string, description: string) => {
  return async (dispatch: Dispatch) => {
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

export const clearAllDone: any = (tasks: Task[]) => {
  return async (dispatch: Dispatch) => {
    try {
      await tasks.map((x: Task) => controller.deleteToDo(x.url))
      dispatch(clearAllDoneSuccess())
    } catch (err) {
      dispatch(clearAllDoneFailure(err.message))
    }
  }
}

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

export const Actions = {
  getTasks,
  addTask,
  addTaskSuccess,
  clearAllDone,
  addTasksFailure,
  onChangeForm,
  resetForm,
  toggleDone,
  clearAllDoneSuccess,
  clearAllDoneFailure,
  getTasksSuccess,
  getTasksFailure,
}

import { AxiosResponse } from 'axios'
import { ActionCreator, Dispatch, Action } from 'redux'
import stringTypes from 'src/actions/stringTypes'
import {
  clearAllDoneAction,
  failureAction,
  getTasksAction,
  taskAddedAction,
  toggleDoneAction,
} from 'src/actions/types'
import controller from 'src/networking/controllers/ToDoController'
import { Task, State } from 'src/types/global'
import { ThunkAction } from 'redux-thunk'

export interface newTodo {
  title: string
}

export type ThunkResult<S, E, A extends Action> = ThunkAction<
  Promise<void>,
  S,
  E,
  A
>

export const getTasks: ActionCreator<
  ThunkResult<State, {}, getTasksAction | failureAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res: AxiosResponse<Task[]> = await controller.getToDo()
      dispatch(getTasksSuccess(res.data))
    } catch (err) {
      dispatch(getTasksFailure(err.message))
    }
  }
}

export const addTask: ActionCreator<
  ThunkResult<State, {}, taskAddedAction | failureAction>
> = (title: string, description?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res: AxiosResponse<Task> = await controller.sendToDo({ title })
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

export const clearAllDone: ActionCreator<
  ThunkResult<State, {}, clearAllDoneAction | failureAction>
> = (tasks: Task[]) => {
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
  toggleDone,
  clearAllDoneSuccess,
  clearAllDoneFailure,
  getTasksSuccess,
  getTasksFailure,
}

import { Action } from 'redux'
import { Task } from 'src/types/task'

export interface taskAddedAction extends Action {
  type: string
  payload: {
    task: Task
  }
}

export interface changeFormAction extends Action {
  type: string
  payload: {
    title: string
    description: string
  }
}

export interface toggleDoneAction extends Action {
  type: string
  payload: {
    url: string
  }
}

export interface clearAllDoneAction extends Action {
  type: string
  payload?: {}
}

export interface getTasksAction extends Action {
  type: string
  payload: {
    tasks: Task[]
  }
}

export interface failureAction extends Action {
  type: string
  payload: {
    error?: string
  }
}

export type Actions =
  | taskAddedAction
  | changeFormAction
  | toggleDoneAction
  | clearAllDoneAction
  | getTasksAction
  | failureAction

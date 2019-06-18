import { Action } from 'redux'
import { Task } from 'src/types/global'

export interface taskAddedAction extends Action {
  type: string
  payload: {
    task: Task
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
  | toggleDoneAction
  | clearAllDoneAction
  | getTasksAction
  | failureAction

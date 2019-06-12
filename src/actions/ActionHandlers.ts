import { TasksState, NewTaskState } from 'src/reducers/types'
import { Actions } from 'src/actions/types'
import { Task } from 'src/types/global'

const _ = require('lodash')

export const getTasks = (state: TasksState, action: Actions) => {
  return Object.assign({}, state, {
    tasks: _.get(action, 'payload.tasks', ''),
  })
}

export const addTask = (state: TasksState, action: Actions) => {
  return Object.assign({}, state, {
    tasks: [...state.tasks, _.get(action, 'payload.task', [])],
    error: {},
  })
}

export const toggleDone = (state: TasksState, action: Actions) => {
  const toggle = (x: Task) => {
    if (x.url === _.get(action, 'payload.url', '')) x.completed = !x.completed
    return x
  }
  return Object.assign({}, state, {
    tasks: state.tasks.map(toggle),
  })
}

export const clearAll = (state: TasksState, action: Actions) => {
  return Object.assign({}, state, {
    tasks: state.tasks.filter(x => !x.completed),
  })
}

export const failure = (state: TasksState, action: Actions) => {
  return Object.assign({}, state, {
    error: _.get(action, 'payload.error', ''),
  })
}

export const changeForm = (state: NewTaskState, action: Actions) => {
  return Object.assign({}, state, {
    title: _.get(action, 'payload.title', ''),
    description: _.get(action, 'payload.description', ''),
  })
}

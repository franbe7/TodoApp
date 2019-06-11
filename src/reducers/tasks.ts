import { Reducer } from 'redux'
import { TasksState } from 'src/reducers/types'

import stringTypes from 'src/actions/stringTypes'
import { Actions } from 'src/actions/types'
import {
  getTasks,
  addTask,
  toggleDone,
  clearAll,
  failure,
} from 'src/actions/ActionHandlers'

const initial_state: TasksState = {
  tasks: [],
  error: '',
}

const tasksReducer: Reducer<TasksState, Actions> = (
  state = initial_state,
  action: Actions,
): TasksState => {
  switch (action.type) {
    case stringTypes.ADD_TASK_SUCCESS:
      return addTask(state, action)
    case stringTypes.GET_TASKS_SUCCESS:
      return getTasks(state, action)
    case stringTypes.TOGGLE_DONE:
      return toggleDone(state, action)
    case stringTypes.CLEAR_ALL_SUCCESS:
      return clearAll(state, action)
    case stringTypes.FAILURE:
      return failure(state, action)
    default:
      return state
  }
}

export default tasksReducer

import { Reducer } from 'redux'
import { TasksState } from 'src/reducers/types'

import { actionTypes } from 'src/actions/actionTypes'
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
  error: undefined,
}

const tasksReducer: Reducer<TasksState, Actions> = (
  state = initial_state,
  action: Actions,
): TasksState => {
  switch (action.type) {
    case actionTypes.ADD_TASK_SUCCESS:
      return addTask(state, action)
    case actionTypes.GET_TASKS_SUCCESS:
      return getTasks(state, action)
    case actionTypes.TOGGLE_DONE:
      return toggleDone(state, action)
    case actionTypes.CLEAR_ALL_SUCCESS:
      return clearAll(state, action)
    case actionTypes.FAILURE:
      return failure(state, action)
    default:
      return state
  }
}

export default tasksReducer

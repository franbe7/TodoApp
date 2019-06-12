import { Reducer } from 'redux'
import stringTypes from 'src/actions/stringTypes'
import { NewTaskState } from 'src/reducers/types'
import { Actions } from 'src/actions/types'
import { changeForm } from 'src/actions/ActionHandlers'

const initial_state = {
  title: '',
  description: '',
}

const formNewTaskReducer: Reducer<NewTaskState> = (
  state = initial_state,
  action: Actions,
): NewTaskState => {
  switch (action.type) {
    case stringTypes.CHANGE_FORM:
      return changeForm(state, action)
    case stringTypes.RESET_FORM:
      return initial_state
    default:
      return state
  }
}

export default formNewTaskReducer

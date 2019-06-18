import { AnyAction, combineReducers, Reducer } from 'redux'
import tasksReducer from 'src/reducers/tasks'
import { NewTaskState, TasksState } from 'src/reducers/types'

export type EntitiesState = TasksState & NewTaskState

export type ApplicationState = Reducer<EntitiesState, AnyAction>

export default combineReducers<ApplicationState>({
  tasks: tasksReducer,
})

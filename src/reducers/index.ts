import { AnyAction, combineReducers, Reducer } from 'redux'
import formNewTaskReducer from 'src/reducers/formNewTask'
import tasksReducer from 'src/reducers/tasks'
import { NewTaskState, TasksState } from 'src/reducers/types'

export type EntitiesState = TasksState & NewTaskState

export type ApplicationState = Reducer<EntitiesState, AnyAction>

export default combineReducers<ApplicationState>({
  tasks: tasksReducer,
  formNewTask: formNewTaskReducer,
})

import { combineReducers, Reducer, AnyAction } from 'redux'
import tasksReducer from 'src/reducers/tasks'
import formNewTaskReducer from 'src/reducers/formNewTask'
import { TasksState, NewTaskState } from 'src/reducers/types'

type EntitiesState = TasksState & NewTaskState

export type ApplicationState = Reducer<EntitiesState, AnyAction>

export const reducers = combineReducers<ApplicationState>({
  tasks: tasksReducer,
  formNewTask: formNewTaskReducer,
})

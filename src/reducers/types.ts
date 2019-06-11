import { Task } from 'src/types/task'

export interface TasksState {
  tasks: Task[]
  error?: string
}

export interface NewTaskState {
  title: string
  description: string
}

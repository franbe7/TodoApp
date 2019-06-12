import { Task } from 'src/types/global'

export interface TasksState {
  tasks: Task[]
  error?: string
}

export interface NewTaskState {
  title: string
  description: string
}

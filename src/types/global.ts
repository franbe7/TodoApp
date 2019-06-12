export interface Task {
  title: string
  description: string
  completed: boolean
  url: string
}

export interface State {
  tasks: {
    tasks: Task[]
    error: ''
  }
  formNewTask: {
    title: ''
    description: ''
  }
}

import HttpService from 'src/networking/HttpService'
import { Task } from 'src/types/task'
import { newTodo } from 'src/actions'

class ToDoController {
  getToDo = () => {
    return HttpService.get('')
  }

  sendToDo = (newToDo: newTodo) => {
    return HttpService.post('', newToDo)
  }

  deleteToDo = (id: string) => {
    return HttpService.delete(id)
  }

  patchToDo = (id: string, body: Task) => {
    return HttpService.patch(id, body)
  }
}

export default new ToDoController()

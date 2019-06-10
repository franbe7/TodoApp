import HttpService from 'src/networking/HttpService'
import { Task } from 'src/types/task';

class ToDoController {
  getToDo = () => {
    return HttpService.get('')
  }

  sendToDo = (newToDo: Task) => {
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

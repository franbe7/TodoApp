import HttpService from '../HttpService';

class ToDoController {
  getToDo = () => {
    return HttpService.get('');
  }

  sendToDo = (newToDo) => {
    return HttpService.post('', newToDo);
  }

  deleteToDo = (id) => {
    return HttpService.delete(id);
  }

  patchToDo = (id, body) => {
    return HttpService.patch(id, body);
  }
}

export default new ToDoController();

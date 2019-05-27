let todoId = 0;
export const addTodo = (title, description) => ({
  type: "ADD_TODO",
  id: todoId++,
  title,
  description
});

let taskId = 0;
export const addTask = (title, description) => ({
  type: "ADD_TASK",
  id: taskId++,
  title,
  description
});

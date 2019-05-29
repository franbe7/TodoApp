let taskId = 0;

export const addTask = (title, description) => ({
  type: "ADD_TASK",
  id: taskId++,
  title,
  description
});

export const onChangeForm = (title, description) => ({
  type: "CHANGE_FORM",
  title,
  description
});

export const resetForm = (title, description) => ({
  type: "RESET_FORM",
  title,
  description
})

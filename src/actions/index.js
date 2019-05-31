let taskId = 0;

export const addTask = (title, description) => ({
  type: "ADD_TASK",
  payload: {
    id: taskId++,
    title,
    description
  } 
});

export const onChangeForm = (title, description) => ({
  type: "CHANGE_FORM",
  payload: {
    title,
    description
  }
});

export const resetForm = (title, description) => ({
  type: "RESET_FORM",
  payload: {
    title,
    description
  }
})

export const toggleDone = id => ({
  type: "TOGGLE_DONE",
  payload: {
    id
  } 
})

export const clearAllDone = () => ({
  type: "CLEAR_ALL",
  payload: {}
})

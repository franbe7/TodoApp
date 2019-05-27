const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          done: false
        }
      ];
  }
};

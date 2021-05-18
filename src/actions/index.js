export const add = (newCategoryObject) => {
  return {
    type: "Add",
    payload: newCategoryObject,
  };
};

export const onDelete = (id) => {
  return {
    type: "Delete",
    payload: id,
  };
};

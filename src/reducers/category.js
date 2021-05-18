const initialState = {
  categories: [
    {
      id: "1",
      node: "Cat 1",
      parentId: null,
      children: [
        {
          id: "1.1",
          node: "Sub Cat 1",
          parentId: "1",
        },
        {
          id: "1.2",
          node: "Sub Cat 2",
          parentId: "1",
        },
      ],
    },
    {
      id: "1",
      node: "Cat 2",
      parentId: null,
      children: [
        {
          id: "1.1",
          node: "Sub Cat 1",
          parentId: "1",
          children: [
            {
              id: "1.1.1",
              node: "sub cat cat 1",
              parentId: "1.1",
            },
          ],
        },
        {
          id: "1.2",
          node: "Sub Cat 2",
          parentId: "1",
          children: [
            {
              id: "1.2.1",
              node: "sub cat cat 2",
              parentId: "1.2",
            },
          ],
        },
      ],
    },
  ],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

export default category;

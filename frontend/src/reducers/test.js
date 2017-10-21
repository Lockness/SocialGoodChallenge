const test = (state = [], action) => {
  switch(action.type) {
    case 'TEST':
      return [...state, 1];
    default:
      return state;
  }
};

export default test;

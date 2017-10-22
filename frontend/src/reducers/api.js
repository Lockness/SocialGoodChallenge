const api = (state = {}, action) => {
  switch (action.type) {
    case 'COMPANY_FETCH_SUC':
      return true;
    default:
      return state
  }
};

export default api;
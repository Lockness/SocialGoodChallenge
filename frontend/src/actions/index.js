
export const test = () => {
  return {
    type: 'TEST'
  }
};

export const logIn = () => {
  return {
    type: 'LOG_IN',
  }
};

export const companyFetchSuc = payload => {
  return {
    type: 'COMPANY_FETCH_SUC',
    payload
  }
};
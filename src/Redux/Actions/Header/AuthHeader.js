export const getHeaders = (isAuth = false) => {
  if (isAuth) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }
  return {
    'Content-Type': 'application/json',
  };
};

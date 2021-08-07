export function validateEmail(email) {
  // eslint-disable-next-line
  const userSubmission = /^([a-z0-9\.-_]{4,12})@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return userSubmission.test(String(email).toLowerCase());
}


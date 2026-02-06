function validateEmailPassword(email, password) {
  // Simple email regex
  const emailRegex = /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  // Password: minimum 6 characters
  const passwordRegex = /^.{6,}$/;

  const isValidEmail = emailRegex.test(email);
  const isStrongPassword = passwordRegex.test(password);

  return isValidEmail && isStrongPassword;
}

export { validateEmailPassword };
//Netflix@123
function validateEmailPassword(email, password) {
  // Simple email regex
  const emailRegex = /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  // Password: at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isValidEmail = emailRegex.test(email);
  const isStrongPassword = passwordRegex.test(password);

  console.log(isValidEmail ? 'Valid Email Address' : 'Invalid Email Address');
  console.log(isStrongPassword ? 'Strong Password' : 'Weak Password');

  return isValidEmail && isStrongPassword;
}

export { validateEmailPassword };

import validator from 'email-validator';

const emailValidation = (email) => {
  if (validator.validate(email)) {
    return true;
  } else {
    return false;
  }
};

const passwordValidation = (password) => {
  if (!password || password.length < 3) {
    return false;
  } else {
    return true;
  }
};

const usernameValidation = (username) => {
  if (!username || username.length < 3) {
    return false;
  } else {
    return true;
  }
};

const registerValidation = (
  email,
  username,
  password
) => {
  const checkEmail = emailValidation(email);
  const checkPassword = passwordValidation(password);
  const checkUsername = usernameValidation(username);
  if (checkEmail && checkPassword && checkUsername) {
    return true;
  } else {
    return false;
  }
};

export default registerValidation;

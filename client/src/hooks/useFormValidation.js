import { useEffect, useState } from "react";

const useFormValidation = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState("");

  const checkIfFormIsValid = () => {
    // check if all input fields are provided
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setFormError("all input fields are required");
      return setFormIsValid(false);
    }

    // email regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // check if email is valid
    if (!emailRegex.test(email)) {
      setFormError("invalid email address");
      return setFormIsValid(false);
    }

    // check password length
    if (password.length < 8) {
      setFormError("password must be at least 8 characters");
      return setFormIsValid(false);
    }

    const validPassword = {
      hasUpper: /[A-Z]/,
      hasLower: /[a-z]/,
      hasNumber: /[0-9]/,
      hasSpclChr: /[@,#,$,%,&]/,
    };

    // check if password has uppercase, lowercase, number and special character
    if (!validPassword.hasUpper.test(password)) {
      setFormError("password must contain at least one uppercase letter");
      return setFormIsValid(false);
    }

    if (!validPassword.hasLower.test(password)) {
      setFormError("password must contain at least one lowercase letter");
      return setFormIsValid(false);
    }

    if (!validPassword.hasNumber.test(password)) {
      setFormError("password must contain at least one number");
      return setFormIsValid(false);
    }

    if (!validPassword.hasSpclChr.test(password)) {
      setFormError("password must contain at least one special character");
      return setFormIsValid(false);
    }
    // check if password is equals confirm password
    if (password !== confirmPassword) {
      setFormError("passwords do not match");
      return setFormIsValid(false);
    }
    setFormError("");
    return setFormIsValid(true);
  };

  // use effect hook
  useEffect(() => {
    const timer = setTimeout(() => {
      checkIfFormIsValid();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [firstName, lastName, email, password, confirmPassword]);
  return { formIsValid, formError };
};

export default useFormValidation;

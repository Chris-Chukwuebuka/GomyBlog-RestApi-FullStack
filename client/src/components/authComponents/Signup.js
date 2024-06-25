import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import styles from "./Auth.module.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  );

  return (
    <>
      <h1>Signup Here</h1>
      <h4>Signup to get started</h4>

      {formError && (
        <div className="alert alert-danger mt-5" role="alert">
          {formError}
        </div>
      )}
      <div className="mt-5">
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Firstname"
              className="form-control"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Lasttname"
              className="form-control"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="confirm Password"
              className="form-control"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className={`btn btn-secondary ${styles.auth_btn} ${
                !formIsValid ? "disabled" : ""
              }`}
            >
              Signup
            </button>
          </div>

          <div className="">
            <p>
              Already have an account?{" "}
              <Link to="/get-started/signin">Signin</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Signin = () => {
  return (
    <>
      <h1>Signin Here</h1>
      <h4>Signin to get started</h4>

      <div className="mt-5">
        <form>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className={`btn btn-secondary ${styles.auth_btn}`}
            >
              Signin
            </button>
          </div>

          <div className={styles.form_links}>
            <p>
              Don't have an account?
              <Link to="/get-started/signup">Signup</Link>
            </p>

            <p>
              Forgot Password ?
              <Link to="/get-started/reset-password">Reset Password</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;

import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const ResetPassword = () => {
  return (
    <>
      <h1>Reset Password</h1>
      <h4>Enter email to reset your password</h4>

      <div className="mt-5">
        <form>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className={`btn btn-secondary ${styles.auth_btn}`}
            >
              Reset Password
            </button>
          </div>

          <div className={styles.form_links}>
            <p>
              Don't have an account?
              <Link to="/get-started/signup">Signup</Link>
            </p>

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

export default ResetPassword;

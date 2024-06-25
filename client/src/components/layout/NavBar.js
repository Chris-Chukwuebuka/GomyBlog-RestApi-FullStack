import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../lib/redux/userSlice";
import profileImage from "../../Assets/dummy-profile-pic.jpg";
import { useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCurrentUser({
        firstName: "Ebuka",
        lastName: "Nwankwo",
        age: "30",
        isVerified: true,
      })
    );
  },[]);
  return (
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="##">
          BlogApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/get-started/signin"
              >
                Get Started
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="##">
                <img
                  src={profileImage}
                  alt="user_profile_image"
                  className={styles.profile_image}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

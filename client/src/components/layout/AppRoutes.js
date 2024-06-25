import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BlogsPage from "../../pages/BlogsPage";
import Error404Page from "../../pages/Error404Page";
import AuthPage from "../../pages/AuthPage";
import SingleBlogPage from "../../pages/SingleBlogPage";
import Signup from "../authComponents/Signup";
import Signin from "../authComponents/Signin";
import ResetPassword from "../authComponents/ResetPassword";
import AboutPage from "./AboutPage";
import NewBlogPage from "../../pages/NewBlogPage";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  let user = "Tboy";
  return (
    <Routes>
      <Route path="*" element={<Error404Page />} />
      <Route path="/get-started" element={<Error404Page />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/home" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs/:blogTitle" element={<SingleBlogPage />} />

      <Route path="/get-started" element={<AuthPage />}>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route
        path="/create-blog"
        element={
          <ProtectedRoutes user={user}>
            <NewBlogPage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

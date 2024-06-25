import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <Outlet />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default AuthPage;

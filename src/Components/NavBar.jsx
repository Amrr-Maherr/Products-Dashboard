import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand me-auto" to="/">
            Home
          </Link>
          <div className="ms-auto">
            <Link className="btn btn-outline-primary me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-success" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

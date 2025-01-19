import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand me-auto" to="/">
            Home
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

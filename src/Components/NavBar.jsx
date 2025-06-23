import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* لوجو */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          title
        </Link>

        {/* رابط الصفحة الرئيسية */}
        <div className="d-none d-lg-block">
          <Link className="nav-link text-dark fw-semibold" to="/">
            Home
          </Link>
        </div>

        {/* زر تسجيل الخروج */}
        <button className="btn btn-outline-danger btn-sm">
          <i className="fas fa-sign-out-alt me-1"></i> Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

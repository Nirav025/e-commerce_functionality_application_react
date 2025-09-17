import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
        <div className="container">

          {/* Brand Logo / Name */}
          <NavLink className="navbar-brand" to="/">
            🛒 ShopFusion
          </NavLink>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered Nav Links */}
          <div className="collapse navbar-collapse justify-content-start ms-5" id="navbarNav">
            <ul className="navbar-nav nav-gap">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    "nav-link" + (isActive ? " active-link" : "")
                  } 
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    "nav-link" + (isActive ? " active-link" : "")
                  } 
                  to="/AddStd"
                >
                  Add Products
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;



import "../index.css";
import { RiHome4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  

  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <Link to="/home">
          <RiHome4Fill color="white" size={44} className="home-icon" />
        </Link>

        <a
          className="navbar-brand"
          style={{ background: "black", marginLeft: "50px" }}
          href="/home"
        >
          <h2> 🎊 Get Set The Vibe !!! 🎊</h2>
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
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown" // Use data-bs-toggle for Bootstrap 5
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h4>
                      <i className="fa fa-user"></i> {user.user.email}
                    </h4>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/podcasts">
                      Podcasts
                    </Link>
                    <Link className="dropdown-item" to="/myplaylists">
                      My Playlist
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      onClick={handleClick}
                    >
                      <button onClick={handleClick}>Log out</button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <h4> Signup </h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <h4>Login</h4>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" role="search"></form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

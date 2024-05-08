import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
export default () => {
  const location = useLocation();
  return (
    <div className="n-video-conference-app-container">
      <div className="n-header-container">
        <span className="n-logo">Video Conference</span>
        <span className="n-header-links">
          {location.pathname !== "/" && (
            <Link to={"/"} className="n-header-link">
              Create Room
            </Link>
          )}
          {location.pathname !== "/joinroom" && (
            <Link to={"/joinroom"} className="n-header-link">
              Join Room
            </Link>
          )}
        </span>
      </div>
      <Outlet />
    </div>
  );
};

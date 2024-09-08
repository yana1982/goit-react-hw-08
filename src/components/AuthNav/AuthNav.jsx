import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/login" className={css.navLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={css.wrapper}>
      <span className={css.span}>Hello, {user.name}!</span>
      <button onClick={handleLogOut} className={css.btn}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;

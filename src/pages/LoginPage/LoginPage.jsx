import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Please, log in</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

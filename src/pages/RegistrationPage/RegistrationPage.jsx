import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div>
      <h1 className={css.title}>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;

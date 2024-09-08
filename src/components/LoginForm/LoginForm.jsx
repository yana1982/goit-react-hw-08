import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        console.log(err);
        toast.error("This didn't work.");
      });
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}

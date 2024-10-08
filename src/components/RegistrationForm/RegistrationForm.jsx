import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value))
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
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.input} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

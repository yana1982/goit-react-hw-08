import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Your contacts</h1>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in the process of processing"}</div>
      <ContactList />
    </div>
  );
};
export default ContactsPage;

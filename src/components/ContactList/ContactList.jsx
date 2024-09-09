import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

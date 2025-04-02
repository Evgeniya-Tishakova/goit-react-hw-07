import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

export default function ContactList() {
  const users = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name) || "";

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterUsers.map((user) => (
        <li key={user.id} className={css.item}>
          <Contact id={user.id} name={user.name} number={user.number} />
        </li>
      ))}
    </ul>
  );
}

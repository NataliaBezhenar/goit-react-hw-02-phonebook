import React from "react";

const ContactList = ({ contacts }) => (
  <ul className="ContactList">
    {contacts.map((cont) => (
      <li className="ContactList__item" key={cont.id}>
        {cont.name}:
      </li>
    ))}
  </ul>
);

export default ContactList;

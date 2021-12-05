import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map((cont) => (
      <li className="ContactList__item" key={cont.id}>
        {cont.name}: {cont.number}
        <button onClick={() => onDeleteContact(cont.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

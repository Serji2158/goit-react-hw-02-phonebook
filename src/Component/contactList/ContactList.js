import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deletContact }) => {
  return (
    <>
      <div>
        <ol className={s.List}>
          {contacts.map((contact) => (
            <li className={s.data} key={contact.id}>
              <p>
                {contact.name} : {contact.number}
              </p>
              <button
                className={s.btn}
                type="button"
                id={contact.id}
                onClick={deletContact}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  deletContact: PropTypes.func.isRequired,
};

export default ContactList;

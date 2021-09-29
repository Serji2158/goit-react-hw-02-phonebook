import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deletContact }) => {
  return (
    <>
      <div>
        <ol>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name}:{contact.number}
                <button type="button" id={contact.id} onClick={deletContact}>
                  Delete
                </button>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func,
  deletContact: PropTypes.func,
};

export default ContactList;

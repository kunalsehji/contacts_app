import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Index = ({ contacts, handleDeleteClick }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {contacts && contacts.length > 0 ? (
        <div>
          {contacts.map((contact, index) => (
            <div key={`contact-${index}`} className={styles.contacts}>
              <div>{contact.name}</div>
              <div>{contact.phone}</div>
              <div>{contact.type}</div>
              <button onClick={() => navigate(`edit-contact/${contact.id}`)}>
                Edit
              </button>
              <button onClick={() => handleDeleteClick(contact)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <div>No contacts to display</div>
      )}
    </div>
  );
};

export default Index;

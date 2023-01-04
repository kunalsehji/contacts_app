import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import ContactList from "../../components/contactLIst";
import ConfirmationPopup from "../../components/confirmationPopup";
import { onContactDelete, fetchContacts } from "../../utils";

const Index = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState({});

  useEffect(() => {
    fetchContacts(setContacts);
  }, []);

  const handlePopupOpen = () => setIsOpen(true);
  const handlePopupClose = () => setIsOpen(false);

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    handlePopupOpen();
  };

  const handleContactDelete = () => {
    onContactDelete(contacts, contactToDelete);
    fetchContacts(setContacts);
    handlePopupClose();
  };

  return (
    <div className={styles.container}>
      <ConfirmationPopup
        isOpen={isOpen}
        handlePopupClose={handlePopupClose}
        handleContactDelete={handleContactDelete}
      />
      <div>Contacts App</div>
      <div>
        <Link to="/add-contact">Add Contact</Link>
      </div>
      <ContactList contacts={contacts} handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default Index;

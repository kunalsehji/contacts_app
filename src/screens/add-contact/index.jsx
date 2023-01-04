import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onContactAdd, fetchContacts } from "../../utils";
import ContactDetails from "../../components/contactDetails";
import styles from "./index.module.scss";

const initState = {
  name: "",
  phone: "",
  type: "personal",
  isWhatsapp: false,
  profilePicture: "",
  id: "",
};

const Index = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState(initState);
  const [contactList, setContactList] = useState([]);

  const handleSubmit = (e) => {
    onContactAdd(e, contactList, contact);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    // const contacts = localStorage.getItem("contacts");
    // setContactList(JSON.parse(contacts));
    fetchContacts(setContactList);
    setContact((contact) => ({ ...contact, id: Date.now() }));
  }, []);

  return (
    <div className={styles.container}>
      <ContactDetails
        contact={contact}
        handleSubmit={handleSubmit}
        setContact={setContact}
      />
    </div>
  );
};

export default Index;

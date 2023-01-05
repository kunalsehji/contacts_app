import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactDetails from "../../components/contactDetails";
import { onContactAdd } from "../../utils";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    setContactList(contacts);
    const selectedContact = contacts?.filter((item) => item.id == id);
    setContact(selectedContact[0]);
  }, [id]);

  const handleSubmit = (e) => {
    onContactAdd(e, contactList, contact);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <ContactDetails
        contact={contact}
        handleSubmit={handleSubmit}
        setContact={setContact}
      />
    </div>
  );
};

export default Index;

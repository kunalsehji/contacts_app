export const onContactAdd = (e, contactList, contact) => {
  e.preventDefault();
  const updatedContactList = contactList
    ? [...contactList].filter((item) => item.id != contact.id)
    : [];
  console.log(updatedContactList);
  updatedContactList.unshift(contact);
  localStorage.setItem("contacts", JSON.stringify(updatedContactList));
};

export const onContactDelete = (contactList, contact) => {
  console.log("Deleting...");
  const updatedContactLIst = [...contactList].filter(
    (item) => item.id != contact.id
  );
  localStorage.setItem("contacts", JSON.stringify(updatedContactLIst));
};

export const fetchContacts = (stateToUpdate) => {
  const fetchedContacts = JSON.parse(localStorage.getItem("contacts"));
  stateToUpdate(fetchedContacts);
};

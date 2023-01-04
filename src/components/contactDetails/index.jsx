import React from "react";
import styles from "./index.module.scss";

const Index = ({ contact, handleSubmit, setContact }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Enter Number"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
        <div>
          <select
            name="type"
            value={contact.type}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, type: e.target.value }))
            }
          >
            <option value="personal">Personal</option>
            <option value="office">Office</option>
          </select>
          <input
            type="checkbox"
            id="iswhatsapp"
            checked={contact.isWhatsapp}
            onClick={() =>
              setContact((contact) => ({
                ...contact,
                isWhatsapp: !contact.isWhatsapp,
              }))
            }
          />
          <label htmlFor="iswhatsapp">isWhatsapp?</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Index;

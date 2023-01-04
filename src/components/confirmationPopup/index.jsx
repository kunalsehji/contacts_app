import React from "react";
import styles from "./index.module.scss";

const Index = ({ isOpen, handlePopupClose, handleContactDelete }) => {
  return (
    <div className={styles.container} style={{ display: isOpen ? "" : "none" }}>
      <div>Permanently delete this contact?</div>
      <div>
        <button onClick={handleContactDelete}>Yes</button>
        <button onClick={handlePopupClose}>No</button>
      </div>
    </div>
  );
};

export default Index;

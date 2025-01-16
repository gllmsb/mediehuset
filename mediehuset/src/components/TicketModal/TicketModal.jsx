import React from "react";
import styles from "./TicketModal.module.scss";
import { MdClose } from "react-icons/md";

export const TicketModal = ({ message, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <MdClose />
        </button>
        <h2>Tak for dit køb!</h2>
        <p>{message}</p>
        <button className={styles.confirmButton} onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

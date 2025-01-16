import React from "react";
import styles from "./CampCard.module.scss";

export const CampCard = ({ camp }) => {
  const ticketInfo = camp.tickets.map(ticket => (
    <p key={ticket.id} className={styles.ticket}>
      <span className={styles.ticketType}>{ticket.name}:</span> {parseFloat(ticket.price).toFixed(2).replace(".", ",")} DKK
    </p>
  ));

  return (
    <div className={styles.campCard}>
      <img src={camp.image} alt={camp.name} className={styles.campImage} />
      <div className={styles.campContent}>
        <h3>{camp.name}</h3>
        <p className={styles.description}>{camp.description}</p>
        <p className={styles.capacity}>Kapacitet: {camp.num_people} pladser</p>
        <div className={styles.ticketInfo}>
          <p className={styles.access}>Adgang med:</p>
          {ticketInfo}
        </div>
      </div>
    </div>
  );
};

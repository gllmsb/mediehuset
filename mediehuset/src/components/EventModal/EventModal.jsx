import React from "react";
import styles from "./EventModal.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";

export const EventModal = ({ event, onClose }) => {
  if (!event) return null; // does not render if no event is slected 

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* close button using react icons */}
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        {/* header with dynamic stage color */}
        <div className={styles.header} style={{ backgroundColor: getStageColor(event.stage_name) }}>
          {event.stage_name} KL. {new Date(event.datetime).toLocaleTimeString('da-DK', { hour: "2-digit", minute: "2-digit" })}
        </div>

        <div className={styles.body}>
          <img src={event.image} alt={event.title} className={styles.eventImage} />
          <div className={styles.eventInfo}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>

            {/* social media icons */}
            <div className={styles.socials}>
              <FaFacebook className={styles.icon} />
              <FaTwitter className={styles.icon} />
              <FaInstagram className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// function to see which background color is according to stage 
const getStageColor = (stage) => {
  const colors = {
    "Rød scene": "#e74c3c",
    "Blå scene": "#2980b9",
    "Grøn scene": "#27ae60",
    "Lilla scene": "#8e44ad",
  };
  return colors[stage] || "#333"; // default 
};

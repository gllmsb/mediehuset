import React, { useContext, useState, useEffect } from "react";
import styles from "./MitProgram.module.scss";
import { useGet } from "../../hooks/UseGet"; 
import { UserContext } from "../../context/UserContext";

export const MitProgram = () => {
  const { user } = useContext(UserContext); // get logged-in user
  const { data, error } = useGet("https://api.mediehuset.net/mediesuset/"); // fetch user data
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    if (data?.user_events) {
      setSavedEvents(data.user_events);
    }
  }, [data]);

  const handleRemoveEvent = (eventId) => {
    setSavedEvents(savedEvents.filter(event => event.id !== eventId));
  };

  if (!user) {
    return <p className={styles.error}>Du skal være logget ind for at se denne side.</p>;
  }

  return (
    <div className={styles.mitProgram}>
      <h2>Mit Program</h2>
      {error && <p className={styles.error}>Kunne ikke hente data.</p>}

      {savedEvents.length > 0 ? (
        <ul className={styles.eventList}>
          {savedEvents.map(event => (
            <li key={event.id} className={styles.eventItem}>
              <span>{event.title} - {new Date(event.datetime).toLocaleDateString("da-DK")}</span>
              <button onClick={() => handleRemoveEvent(event.id)}>Fjern</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noEvents}>Du har ikke tilføjet nogen events endnu.</p>
      )}
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import styles from "./MitProgram.module.scss";
import { useGet } from "../../hooks/UseGet"; 
import { UserContext } from "../../context/UserContext";
import { Header } from "../Header/Header";
import homeImage from '../../assets/images/Background.png';
import { Title } from "../Title/Title";
import { FaTimes } from "react-icons/fa"; // Delete icon
import { useProgramActions } from "../../hooks/UseProgramAction";

export const MitProgram = () => {
  const { user } = useContext(UserContext); // Get logged-in user
  const { data, error } = useGet("https://api.mediehuset.net/mediesuset/usertickets"); // Fetch user events
  const { removeFromProgram } = useProgramActions(); // Get remove function
  const [savedEvents, setSavedEvents] = useState([]);

  // Load user events when data is available
  useEffect(() => {
    if (data?.items) {
      setSavedEvents(data.items);
    }
  }, [data]);

  // Group events by weekday
  const groupedEvents = savedEvents.reduce((acc, event) => {
    const eventDay = new Date(event.datetime).toLocaleDateString("da-DK", { weekday: "long" });
    if (!acc[eventDay]) {
      acc[eventDay] = [];
    }
    acc[eventDay].push(event);
    return acc;
  }, {});

  // remove event from Mit Program
  const handleRemoveEvent = async (eventId) => {
    const success = await removeFromProgram(eventId);
    if (success) {
      setSavedEvents(savedEvents.filter(event => event.id !== eventId)); // update UI
    }
  };

  return (
    <>
      <div className={styles.mitProgram}>
        {error && <p className={styles.error}>Kunne ikke hente data.</p>}

        {Object.keys(groupedEvents).length > 0 ? (
          Object.entries(groupedEvents).map(([day, events]) => (
            <div key={day} className={styles.daySection}>
              <h3 className={styles.dayTitle}>{day.toUpperCase()}</h3>
              {events.map(event => (
                <div key={event.id} className={styles.eventRow}>

                  {/* color-coded time based on stage */}
                  <span className={`${styles.eventTime} ${styles[event.stage_name.replace(/\s/g, '').toLowerCase()]}`}>
                    {new Date(event.datetime).toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" })}
                  </span>

                  <span className={styles.eventTitle}>{event.title}</span>
                  
                  {/* remove event button */}
                  <button className={styles.deleteButton} onClick={() => handleRemoveEvent(event.id)}>
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className={styles.noEvents}>Du har ikke tilføjet nogen events endnu.</p>
        )}
      </div>
    </>
  );
};

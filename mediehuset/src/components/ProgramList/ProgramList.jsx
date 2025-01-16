import React, { useState, useEffect } from "react";
import { useGet } from "../../hooks/UseGet";
import styles from "./ProgramList.module.scss";

export const ProgramList = ({ selectedDay }) => {
  const { data: events } = useGet("https://api.mediehuset.net/mediesuset/events");
  const [groupedEvents, setGroupedEvents] = useState({});

  useEffect(() => {
    if (events?.items) {
      // Filter events by selected day
      const filtered = events.items.filter(event => {
        const eventDate = new Date(event.datetime).toLocaleDateString("da-DK", {
          weekday: "long",
        });
        return eventDate.toLowerCase() === selectedDay.toLowerCase();
      });

      // Group events by stage
      const grouped = filtered.reduce((acc, event) => {
        if (!acc[event.stage_name]) {
          acc[event.stage_name] = [];
        }
        acc[event.stage_name].push(event);
        return acc;
      }, {});

      setGroupedEvents(grouped);
    }
  }, [events, selectedDay]);

  return (
    <div className={styles.programList}>
      {Object.keys(groupedEvents).length > 0 ? (
        Object.entries(groupedEvents).map(([stage, events]) => (
          <div key={stage} className={styles.stageGroup}>
            <h3 className={`${styles.stageTitle} ${styles[stage.replace(/\s/g, '').toLowerCase()]}`}>
              {stage}
            </h3>
            <div className={styles.eventTable}>
              {events.map((event) => (
                <div key={event.id} className={styles.eventRow}>
                  <span className={styles.eventTime}>
                    {new Date(event.datetime).toLocaleTimeString("da-DK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className={styles.eventArtist}>{event.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className={styles.error}>Ingen events for denne dag.</p>
      )}
    </div>
  );
};

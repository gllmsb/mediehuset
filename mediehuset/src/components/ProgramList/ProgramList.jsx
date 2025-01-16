import React, { useState, useEffect } from "react";
import { useGet } from "../../hooks/UseGet";
import { EventModal } from "../EventModal/EventModal";
import styles from "./ProgramList.module.scss";

//displays events grouped by stage and day
export const ProgramList = ({ selectedDay }) => {
  const { data: events } = useGet("https://api.mediehuset.net/mediesuset/events");
  const [groupedEvents, setGroupedEvents] = useState({}); //state to store group events by stage
  const [selectedEvent, setSelectedEvent] = useState(null); // state for modal (selected events)


  // useeffect runs whenever events or selectedDay changes
  useEffect(() => {
    if (events?.items) {
      // filter selected by day
      const filtered = events.items.filter(event => {
        const eventDate = new Date(event.datetime).toLocaleDateString("da-DK", {
          weekday: "long",
        });
        return eventDate.toLowerCase() === selectedDay.toLowerCase();
      });

      // group events by stage
      const grouped = filtered.reduce((acc, event) => {
        if (!acc[event.stage_name]) {
          acc[event.stage_name] = [];//create array if stage doesnt exist
        }
        acc[event.stage_name].push(event);//add an event to correct stahe
        return acc;
      }, {});

      setGroupedEvents(grouped);//update state with grouped events
    }
  }, [events, selectedDay]);

  //fucntion to open modal withe event details
  const handleEventClick = (event) => {
    setSelectedEvent(event); 
  };

  //close modal
  const closeModal = () => {
    setSelectedEvent(null); // close modal
  };

  return (
    <div className={styles.programList}>
      {/* if events exist , display them grouped by stage  */}
      {Object.keys(groupedEvents).length > 0 ? (
        Object.entries(groupedEvents).map(([stage, events]) => (

          // removes the space from the stage name and changes it to lowercase
          <div key={stage} className={styles.stageGroup}>
            <h3 className={`${styles.stageTitle} ${styles[stage.replace(/\s/g, '').toLowerCase()]}`}>
              {stage}
            </h3>

            {/* list of events under each stage  */}
            <div className={styles.eventTable}>
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className={styles.eventRow} 
                  onClick={() => handleEventClick(event)} // opens modal when clicked
                >

                  {/* display event time */}
                  <span className={styles.eventTime}>
                    {new Date(event.datetime).toLocaleTimeString("da-DK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  {/* display event title */}
                  <span className={styles.eventArtist}>{event.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (

        // display error message if no events found on selected day
        <p className={styles.error}>Ingen events for denne dag.</p>
      )}

      {/* modal only appears when event is selected */}
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

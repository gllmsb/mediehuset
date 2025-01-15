import React, { useState, useEffect } from 'react';
import homeImage from '../assets/images/Background.png';
import styles from './LineUp.module.scss';
import { useGet } from '../hooks/UseGet';
import { Title } from '../components/Title/Title';
import { Header } from '../components/Header/Header';

export const LineUp = () => {
  const { data: stages } = useGet('https://api.mediehuset.net/mediesuset/stages');
  const { data: events } = useGet('https://api.mediehuset.net/mediesuset/events');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedStage, setSelectedStage] = useState('');

  useEffect(() => {
    if (events) {
      setFilteredEvents(events.items);
    }
  }, [events]);

  const handleFilter = (stageName) => {
    if (stageName) {
      const filtered = events.items.filter((event) => event.stage_name === stageName);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events.items);
    }
    setSelectedStage(stageName);
  };

  return (
    <div className={styles.lineUp}>
      <Header backgroundImage={homeImage} />
      <Title title="LINE UP" />

      {/* Filters */}
      <div className={styles.filters}>
        <button onClick={() => handleFilter('')}>A-Å</button>
        {stages?.items.map((stage) => (
          <button
            key={stage.id}
            onClick={() => handleFilter(stage.name)}
            className={selectedStage === stage.name ? styles.active : ''}
          >
            {stage.name}
          </button>
        ))}
      </div>

      {/* Event Cards */}
        <div className={styles.events}>
          {filteredEvents?.map((event) => (
            <div
            key={event.id}
            className={`${styles.eventWrapper} ${styles[event.stage_name.replace(/\s/g, '').toLowerCase()]}`}
            >
            <div className={styles.eventCard}>
              <img src={event.image} alt={event.title} />
              <h2>{event.title}</h2>
              <p className={styles.dateTime}>
                {new Date(event.datetime).toLocaleString('da-DK', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

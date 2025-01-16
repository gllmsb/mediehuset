import React, { useState } from 'react';
import styles from './DayFilter.module.scss';

export const DayFilter = ({ onSelectDay }) => {
  const days = ['Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  const [selectedDay, setSelectedDay] = useState('Torsdag'); 

  const handleDayClick = (day) => {
    setSelectedDay(day);
    onSelectDay(day); 
  };

  return (
    <div className={styles.dayFilter}>
      {days.map((day) => (
        <button
          key={day}
          className={selectedDay === day ? styles.active : ''}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

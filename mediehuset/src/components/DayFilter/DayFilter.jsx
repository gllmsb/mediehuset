import React, { useState } from 'react';
import styles from './DayFilter.module.scss';

export const DayFilter = ({ onSelectDay }) => {
  const days = ['Onsdag', 'Torsdag', 'Fredag', 'Lørdag']; //list of available days
  const [selectedDay, setSelectedDay] = useState('Torsdag'); //default selected day

  //function to handle day selection
  const handleDayClick = (day) => {
    setSelectedDay(day);//update seelected day state
    onSelectDay(day); //pass selected day to parent component which is program
  };

  return (
    <div className={styles.dayFilter}>
      {days.map((day) => (//loops the array 
        <button
          key={day}//gives button unique identifier eg "Onsdag", "Torsdag"
          className={selectedDay === day ? styles.active : ''}//highlight selected button
          onClick={() => handleDayClick(day)}
        >
          {day}//display day name
        </button>
      ))}
    </div>
  );
};

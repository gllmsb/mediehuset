import React, { useState } from 'react';
import homeImage from '../assets/images/Background.png';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { DayFilter } from '../components/DayFilter/DayFilter';
import { ProgramList } from '../components/ProgramList/ProgramList';

export const Program = () => {

  const [selectedDay, setSelectedDay] = useState("Thursday");

  return (
    <>
    <div>
      <Header backgroundImage={homeImage} />
      <Title title="PROGRAM" />

      <DayFilter onSelectDay={setSelectedDay} />
      <ProgramList selectedDay={selectedDay} />
    </div>
    </>
  );
};

import React from 'react';
import homeImage from '../assets/images/Background.png';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';

export const Program = () => {
  return (
    <>
    <Header backgroundImage={homeImage} />
    <Title title="PROGRAM" />
    </>
  );
};

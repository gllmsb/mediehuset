import React from 'react';
import homeImage from '../assets/images/Background.png';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { NewsList } from '../components/NewsList/NewsList';

export const Home = () => {
  return (
    <>
    <div>
      <Header backgroundImage={homeImage} />
      <Title title="NYHEDER" />
      <NewsList />
    </div>
    </>
  );
};

// src/components/NewsList/NewsCard.jsx
import React from 'react';
import styles from './NewsCard.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

export const NewsCard = ({ news }) => {
  return (
    <div className={styles.newsCard}>
      <img src={news.image} alt={news.title} />
      <div className={styles.content}>
        <h3>{news.title}</h3>
        <p>{news.teaser}</p>
        <button>
          Læs mere
          <span className={styles.arrow}>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

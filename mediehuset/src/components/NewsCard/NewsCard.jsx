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
        <div className={styles.buttonContainer}> 
          <button>
            Læs Mere <IoIosArrowForward className={styles.arrow} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

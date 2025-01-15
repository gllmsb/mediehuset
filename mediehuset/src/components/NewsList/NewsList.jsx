import React from 'react';
import { useGet } from '../../hooks/UseGet';
import { NewsCard } from '../NewsCard/NewsCard';
import styles from './NewsList.module.scss';

export const NewsList = () => {
  const { data, loading, error } = useGet('https://api.mediehuset.net/mediesuset/news');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.newsList}>
      {data.items.map((newsItem) => (
        <NewsCard key={newsItem.id} news={newsItem} />
      ))}
    </div>
  );
};

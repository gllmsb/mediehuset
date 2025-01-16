import React from "react";
import { useGet } from "../../hooks/UseGet"; 
import styles from "./CampList.module.scss";
import { CampCard } from "../CampCard/CampCard";


export const CampList = ({ onSelectCamp }) => {
  const { data: camps, error } = useGet("https://api.mediehuset.net/mediesuset/camps");

  if (error) return <p className={styles.error}>Kunne ikke hente campingpladser. Prøv igen senere.</p>;
  if (!camps?.items) return <p className={styles.loading}>Indlæser campingpladser...</p>;

  return (
    <div className={styles.campList}>
      {camps.items.map((camp) => (
        <CampCard key={camp.id} camp={camp} onSelect={() => onSelectCamp(camp)} />
      ))}
    </div>
  );
};

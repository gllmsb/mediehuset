import React from "react";
import styles from "./PracticalInfo.module.scss";
import { Header } from "../components/Header/Header";
import { Title } from "../components/Title/Title";
import festivalMap from "../assets/images/mediesuset-map.jpg";
import homeIcon from "../assets/images/Background.png"; 

export const PracticalInfo = () => {
  return (
    <>
      <Header backgroundImage={homeIcon} />
      <Title title="PRAKTISK INFO" />

      <div className={styles.container}>
        {/* festival opening hours */}
        <section className={styles.infoSection}>
          <h2>Åbningstider</h2>
          <p>Festivalen åbner onsdag den 6. juli kl. 12:00 og lukker søndag den 10. juli kl. 14:00.</p>
        </section>

        {/* camping information */}
        <section className={styles.infoSection}>
          <h2>Camping</h2>
          <p>Der er tre campingområder: Camp Colorit, Camp Kultunaut, og Camp De Luxe. Alle med forskellige faciliteter.</p>
        </section>

        {/* food & drinks */}
        <section className={styles.infoSection}>
          <h2>Mad & Drikke</h2>
          <p>Madboder og barer er åbne fra kl. 10:00 til midnat. Der er både vegetariske og veganske muligheder.</p>
        </section>

        {/* festival rules */}
        <section className={styles.infoSection}>
          <h2>Regler & Sikkerhed</h2>
          <p>Festivalen har et nultolerance-politik for vold og stoffer. Kontakt sikkerhedspersonalet ved behov.</p>
        </section>

        {/*transport & parking */}
        <section className={styles.infoSection}>
          <h2>Transport & Parkering</h2>
          <p>Busser kører til festivalpladsen hver time. Parkering er tilgængelig tæt på indgangen.</p>
        </section>

        {/* contact information */}
        <section className={styles.infoSection}>
          <h2>Kontakt</h2>
          <p>Har du spørgsmål? Kontakt os på <strong>info@festival.dk</strong> eller ring til <strong>+45 1234 5678</strong>.</p>
        </section>

        {/* festival map */}
        <section className={styles.mapSection}>
          <h2>Festival Kort</h2>
          <img src={festivalMap} alt="Festival Map" className={styles.mapImage} />
        </section>
      </div>
    </>
  );
};

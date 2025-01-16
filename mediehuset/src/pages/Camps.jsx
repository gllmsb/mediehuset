import React from 'react';
import homeImage from '../assets/images/Background2.png';
import styles from './Camps.module.scss';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { CampList } from '../components/CampList/CampList';

export const Camps = () => {
  return (
   <>
   <Header backgroundImage={homeImage}/>
   <Title title="CAMPS" />
   <div className={styles.campIntro}>
       <p>
         På Mediesuset har du mulighed for at overnatte på et af vores tre campingområder, der hver især tilbyder unikke faciliteter og stemninger. 
         Uanset om du ønsker et livligt festivalmiljø, en mere rolig atmosfære eller luksuscamping med ekstra faciliteter, har vi en plads til dig!
         Nedenfor kan du finde information om de forskellige campingområder og hvilke armbånd der kræves for adgang.
       </p>
     </div>
   <CampList />
   </>
  )
}

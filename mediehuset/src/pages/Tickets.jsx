import React, { useState } from 'react';
import homeImage from '../assets/images/Background2.png';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { TicketList } from '../components/TicketList/TicketList';
import { TicketDetails } from '../components/TicketDetails/TicketDetails';

export const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <>
      <Header backgroundImage={homeImage} />
      <Title title="BILLETER" />
    
      {!selectedTicket ? (
        <TicketList onSelectTicket={setSelectedTicket} />
      ) : (
        <TicketDetails ticket={selectedTicket} onBack={() => setSelectedTicket(null)} />
      )}
    </>
  );
};

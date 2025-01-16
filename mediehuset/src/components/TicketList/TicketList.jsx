import React from 'react';
import { useGet } from '../../hooks/UseGet';
import styles from './TicketList.module.scss';

export const TicketList = ({ onSelectTicket }) => {
  const { data: tickets, error } = useGet("https://api.mediehuset.net/mediesuset/tickets");

  if (error) return <p className={styles.error}>Kunne ikke hente billetter. Prøv igen senere.</p>;
  if (!tickets?.items) return <p className={styles.loading}>Indlæser billetter...</p>;

  const partoutTickets = tickets.items.filter(ticket => ticket.type === "partout");
  const singleDayTickets = tickets.items.filter(ticket => ticket.type === "single");

  return (
    <div className={styles.ticketList}>
      {/* Partout Tickets */}
      <div className={styles.ticketCategory}>
        <h3>PARTOUT BILLET - ALLE DAGE</h3>
        <div className={styles.ticketContainer}>
          {partoutTickets.map(ticket => (
            <div key={ticket.id} className={styles.ticketRow}>
              <span className={styles.ticketName}>{ticket.name}</span>
              <span className={styles.ticketPrice}>
                {parseFloat(ticket.price).toFixed(2).replace('.', ',')} DKK
              </span>
              <button 
                className={styles.buyButton} 
                onClick={() => onSelectTicket(ticket)} // Set selected ticket on click
              >
                KØB BILLET
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Single-Day Tickets */}
      <div className={styles.ticketCategory}>
        <h3>ENKELTBILLETTER</h3>
        <div className={styles.ticketContainer}>
          {singleDayTickets.map(ticket => (
            <div key={ticket.id} className={styles.ticketRow}>
              <span className={styles.ticketName}>{ticket.name}</span>
              <span className={styles.ticketPrice}>
                {parseFloat(ticket.price).toFixed(2).replace('.', ',')} DKK
              </span>
              <button 
                className={styles.buyButton} 
                onClick={() => onSelectTicket(ticket)} // Set selected ticket on click
              >
                KØB BILLET
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

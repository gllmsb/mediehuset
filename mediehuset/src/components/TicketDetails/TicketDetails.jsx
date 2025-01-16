import React, { useState } from 'react';
import styles from './TicketDetails.module.scss';
import { MdArrowBackIos } from "react-icons/md";
import { TicketForm } from '../TicketForm/TicketForm';

export const TicketDetails = ({ ticket, onBack }) => {
  if (!ticket) return null; // if no ticket is selected , dont render componemt

  const [quantity, setQuantity] = useState(1); //state for ticket quantity

  //calculate total price (formatted with danish currency style)
  const totalPrice = (parseFloat(ticket.price) * quantity).toFixed(2).replace('.', ',');

  return (
    <div className={styles.ticketDetails}>

      {/* ticket header with back button */}
      <div className={styles.ticketHeader}>
        <MdArrowBackIos className={styles.backIcon} onClick={onBack} />
        INFORMATION OM DEN VALGTE BILLET
      </div>

      {/* ticket name and description */}
      <h3 className={styles.title}>{ticket.name}</h3>
      <p className={styles.description}>{ticket.description}</p>

      {/* order section */}
      <div className={styles.orderSection}>
        <div className={styles.orderHeader}>BESTILLING</div>
        <div className={styles.orderContent}>

          {/* quantity selection row */}
          <div className={styles.row}>
            <span>Antal:</span>
            <span>
              <select 
                className={styles.quantitySelect} 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
              >

                {/* generate options 1-10 tickets */}
                {[...Array(10).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </span>
            <span>Stk. {ticket.name}</span>
            <span>DKK {parseFloat(ticket.price).toFixed(2).replace('.', ',')}</span>
            <span>DKK {totalPrice}</span>
          </div>

          {/* tital price display */}
          <div className={styles.totalPrice}>
            <strong className={styles.pris}>Pris i alt:</strong> <span>DKK {totalPrice}</span>
          </div>
        </div>

        {/* ticket purchase form */}
        <TicketForm />
      </div>
    </div>
  );
};

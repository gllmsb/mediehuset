import React, { useState } from 'react';
import styles from './TicketDetails.module.scss';
import { MdArrowBackIos } from "react-icons/md";
import { TicketForm } from '../TicketForm/TicketForm';

export const TicketDetails = ({ ticket, onBack }) => {
  if (!ticket) return null; 

  const [quantity, setQuantity] = useState(1); 

  const totalPrice = (parseFloat(ticket.price) * quantity).toFixed(2).replace('.', ',');

  return (
    <div className={styles.ticketDetails}>

      <div className={styles.ticketHeader}>
        <MdArrowBackIos className={styles.backIcon} onClick={onBack} />
        INFORMATION OM DEN VALGTE BILLET
      </div>


      <h3 className={styles.title}>{ticket.name}</h3>
      <p className={styles.description}>{ticket.description}</p>


      <div className={styles.orderSection}>
        <div className={styles.orderHeader}>BESTILLING</div>
        <div className={styles.orderContent}>
          <div className={styles.row}>
            <span>Antal:</span>
            <span>
              <select 
                className={styles.quantitySelect} 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(10).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </span>
            <span>Stk. {ticket.name}</span>
            <span>DKK {parseFloat(ticket.price).toFixed(2).replace('.', ',')}</span>
            <span>DKK {totalPrice}</span>
          </div>
          <div className={styles.totalPrice}>
            <strong className={styles.pris}>Pris i alt:</strong> <span>DKK {totalPrice}</span>
          </div>
        </div>
        <TicketForm />
      </div>
    </div>
  );
};

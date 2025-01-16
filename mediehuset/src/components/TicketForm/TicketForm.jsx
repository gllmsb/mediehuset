import React, { useState } from "react";
import styles from "./TicketForm.module.scss";
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaCity, FaHashtag } from "react-icons/fa";
import { TicketModal } from "../TicketModal/TicketModal";

export const TicketForm = () => {
    // usestate hook for form data management
  const [formData, setFormData] = useState({
    camp: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    postalCode: "",
    city: "",
    deliveryMethod: "", //determines how the ticket is received
  });

  const [errors, setErrors] = useState({}); // validation errors
  const [isModalOpen, setIsModalOpen] = useState(false); // controls modal visibility
  const [modalMessage, setModalMessage] = useState(""); // stores modal message

  //function to handle input field changes
  // updates formData state whenever an input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //function to validate form fields
  //checks missing/incorrect data and sets error message
  // returns true is form is valid and fakse if not
  const validateForm = () => {
    let newErrors = {}; //store errors
    if (!formData.email.includes("@")) newErrors.email = "Ugyldig e-mailadresse"; //email must contain @
    if (formData.password.length < 6) newErrors.password = "Adgangskoden skal være mindst 6 tegn"; //pass has to be at least 6 characters
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Adgangskoderne stemmer ikke overens"; //passwords must match
    if (!formData.name) newErrors.name = "Navn er påkrævet"; //name cannot be empty
    if (!formData.address) newErrors.address = "Adresse er påkrævet";// address cant be empty
    if (!/^\d+$/.test(formData.postalCode)) newErrors.postalCode = "Postnummer skal være et tal"; //post number has to be a number
    if (!formData.city) newErrors.city = "By er påkrævet";// city cant be empty
    if (!formData.deliveryMethod) newErrors.deliveryMethod = "Vælg venligst en forsendelsesmetode";//user has to select delivery method

    setErrors(newErrors); //update the error state
    return Object.keys(newErrors).length === 0;// returns true if no error
  };

  //function handle form submission
  //prevents default
  //validates the form before processing
  //opens modal with a messge based on selected delivery method
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.deliveryMethod === "send") {
        setModalMessage("Tak for din bestilling! Dine billetter vil blive sendt til din adresse.");
      } else {
        setModalMessage("Vi har sendt dine billetter til din e-mail. Tak for dit køb!");
      }
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formContent}>
            {/* left input fiedl */}
          <div className={styles.left}>
            {/* dropdown for selecting cmap */}
            <div className={styles.inputGroup}>
              <label className={styles.chooseCamp}>Vælg camp:</label>
              <select className={styles.selectCamp} name="camp" value={formData.camp} onChange={handleChange}>
                <option value="">---</option>
                <option value="Camp Colorit">Camp Colorit</option>
                <option value="Camp Kultunaut">Camp Kultunaut</option>
                <option value="Camp De Luxe">Camp De Luxe</option>
              </select>
            </div>

            {/* dynamic input fields for user data */}
            {[
              { label: "Email", name: "email", icon: <FaEnvelope />, type: "email" },
              { label: "Adgangskode", name: "password", icon: <FaLock />, type: "password" },
              { label: "Gentag adgangskode", name: "confirmPassword", icon: <FaLock />, type: "password" },
              { label: "Navn", name: "name", icon: <FaUser />, type: "text" },
              { label: "Adresse", name: "address", icon: <FaMapMarkerAlt />, type: "text" },
              { label: "Postnummer", name: "postalCode", icon: <FaHashtag />, type: "text" },
              { label: "By", name: "city", icon: <FaCity />, type: "text" },
            ].map((field) => (
              <div key={field.name} className={styles.inputGroup}>
                <label>{field.label}:</label>
                <div className={styles.inputWrapper}>
                  <span className={styles.icon}>{field.icon}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Indtast din ${field.label.toLowerCase()}`}
                  />
                </div>
                {errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}
              </div>
            ))}
          </div>

            {/* right section delivery method */}
          <div className={styles.right}>
            <label className={styles.deliveryLabel}>Vælg forsendelsesmetode:</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="send"
                  checked={formData.deliveryMethod === "send"}
                  onChange={handleChange}
                />
                Jeg ønsker billetterne tilsendt
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="print"
                  checked={formData.deliveryMethod === "print"}
                  onChange={handleChange}
                />
                Jeg udskriver billetterne selv
              </label>
            </div>
            {errors.deliveryMethod && <p className={styles.error}>{errors.deliveryMethod}</p>}
          </div>
        </div>

        {/* submit button */}
        <button type="submit" className={styles.sendButton}>SEND</button>
      </form>
        
        {/* display modal if form is submitted correctly */}
      {isModalOpen && <TicketModal message={modalMessage} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};


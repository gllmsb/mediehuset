import React, { useState, useContext } from "react";
import { usePost } from "../../hooks/UsePost";
import styles from "./LoginForm.module.scss";
import { UserContext } from "../../context/UserContext";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons

export const LoginForm = () => {
  const { postData, data, error } = usePost();
  const { login } = useContext(UserContext);

  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData("https://api.mediehuset.net/token", formData);

    if (data?.access_token) {
      const userInfo = {
        username: data.username,
        email: data.user.email,
      };
      login(userInfo);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <p>Indtast login oplysninger:</p>

      {/* Email Field */}
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <span className={styles.icon}><FaEnvelope /></span> {/* Email Icon */}
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            placeholder="Indtast din email"
            required 
          />
        </div>
      </div>

      {/* Password Field */}
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <span className={styles.icon}><FaLock /></span> {/* Password Icon */}
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Indtast adgangskode"
            required 
          />
        </div>
      </div>

      {error && <p className={styles.error}>Forkert email eller adgangskode</p>}

      <button type="submit" className={styles.loginButton}>LOGIN</button>
    </form>
  );
};

import React, { useState } from "react";
import styles from "./Frame1.module.css";

const Frame1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/request_password_reset.php?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.inscriptionBnficiezDeNosWrapper}>
        <div className={styles.inscriptionBnficiezDeContainer}>
          <p className={styles.inscription}>INSCRIPTION</p>
          <p className={styles.bnficiezDeNos}>
            Bénéficiez de nos services d'assurance en créant votre compte en ligne
          </p>
        </div>
      </div>
      <section className={styles.frameWrapper}>
        <form onSubmit={handleSubmit} className={styles.frameGroup}>
          <div className={styles.saisissezVotreAdresseEmailWrapper}>
            <div className={styles.saisissezVotreAdresse}>
              Saisissez votre adresse email
            </div>
          </div>
          <div className={styles.inputformControl}>
            <input
              className={styles.email}
              placeholder="E-mail*"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              name="email"
            />
          </div>
          <button type="submit" className={styles.inputformControl1}>
            <div className={styles.email1}>Envoyer le lien de réinitialisation</div>
          </button>
        </form>
      </section>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Frame1;

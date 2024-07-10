import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Root.module.css";

const Root = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    civilization: '',
    nom: '',
    prenom: '',
    date_de_naissance: '',
    email: '',
    numero_de_telephone: '',
    adresse: '',
    wilaya: '',
    commune: '',
    password: '',
    assurance_start_date: '',
    assurance_end_date: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        
      const result = await response.json();
      console.log('Sign-Up result:', result);

      if (result.success) {
        alert('Sign-Up successful!');
        navigate('/frame-3');
      } else {
        alert('Sign-Up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error signing up.');
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <main className={styles.inscriptionBannerParent}>
        <div className={styles.inscriptionBanner}>
          <div className={styles.inscriptionBnficiezDeContainer}>
            <p className={styles.inscription}>INSCRIPTION</p>
            <p className={styles.bnficiezDeNos}>
              Bénéficiez de nos services d'assurance en créant votre compte en
              ligne
            </p>
          </div>
        </div>
        <section className={styles.emailContainer}>
          <div className={styles.tripleEmail}>
            <div className={styles.doubleEmail}>
              <div className={styles.inputformControl}>
                <select className={styles.email} name="civilization" value={formData.civilization} onChange={handleChange}>
                  <option value="">Select Civilization</option>
                  <option value="Association">Association</option>
                  <option value="Companie Etrangère">Companie Etrangère</option>
                  <option value="Melle">Melle</option>
                  <option value="Mm">Mm</option>
                  <option value="EPE">EPE</option>
                  <option value="EPIC">EPIC</option>
                  <option value="Locataire">Locataire</option>
                </select>
              </div>
              <div className={styles.inputformControl1}>
                <input
                  className={styles.email1}
                  placeholder="Nom*"
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputformControl2}>
              <input
                className={styles.email2}
                placeholder="Prenom*"
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputformControl2}>
              <label className={styles.label} htmlFor="date_de_naissance">
                Date de naissance :<br />
              </label>
              <input
                className={styles.dateInput}
                type="date"
                name="date_de_naissance"
                id="date_de_naissance"
                value={formData.date_de_naissance}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <div className={styles.nestedInput}>
          <div className={styles.inputformControl3}>
            <input
              className={styles.email3}
              placeholder="E-mail*"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.nestedInput1}>
          <div className={styles.inputformControl4}>
            <input
              className={styles.email4}
              placeholder="Numero de Telephone*"
              type="text"
              name="numero_de_telephone"
              value={formData.numero_de_telephone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputformControl5}>
          <input
            className={styles.email5}
            placeholder="Adresse*"
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputformControl6}>
          <select className={styles.email6} name="wilaya" value={formData.wilaya} onChange={handleChange}>
            <option value="">Select Wilaya</option>
            <option value="ALGER">ALGER</option>
            <option value="ORAN">ORAN</option>
            <option value="BEDJAYA">BEDJAYA</option>
            <option value="TELEMCEN">TELEMCEN</option>
            <option value="TIZIOUZOU">TIZIOUZOU</option>
            <option value="ADRAR">ADRAR</option>
          </select>
        </div>
        <div className={styles.sixthEmailField}>
          <div className={styles.inputformControl7}>
            <input
              className={styles.email7}
              placeholder="Commune"
              type="text"
              name="commune"
              value={formData.commune}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputformControl7}>
          <input
            className={styles.email7}
            placeholder="Password*"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputformControl2}>
          <label className={styles.label} htmlFor="assurance_start_date">
            Date de début d'assurance :<br />
          </label>
          <input
            className={styles.dateInput}
            type="date"
            name="assurance_start_date"
            id="assurance_start_date"
            value={formData.assurance_start_date}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputformControl2}>
          <label className={styles.label} htmlFor="assurance_end_date">
            Date de fin d'assurance :<br />
          </label>
          <input
            className={styles.dateInput}
            type="date"
            name="assurance_end_date"
            id="assurance_end_date"
            value={formData.assurance_end_date}
            onChange={handleChange}
          />
        </div>
      </main>
      <button type="submit" className={styles.inputformControl8}>
        <div className={styles.email8}>Create an Account</div>
      </button>
    </form>
  );
};

export default Root;

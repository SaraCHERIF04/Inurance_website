import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Rc_chasse.module.css';
import { useNavigate } from 'react-router-dom';



interface Dog {
  name: string;
  insuranceCost: number;
  age: number;
  hasTattoo: boolean;
  coatColor: string;
  medicalConditions: string;
  gender: string;
  color: string;
}

interface Chasseur {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  dogs: Dog[];
}

interface InsuranceData {
  chasseur: {
    name: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
  };
  dogs: {
    name: string;
    age: number;
    insuranceCost: number;
    hasTattoo: boolean;
    coatColor: string;
    medicalConditions: string;
    gender: string;
    color: string;
  }[];
  totalInsuranceCost: number;
  insurance_cost: number;
  baseInsuranceCost: number;
  
  user: {
    civilization: string;
    nom: string;
    prenom: string;
    date_de_naissance: string;
    email: string;
    numero_de_telephone: string;
    adresse: string;
    wilaya: string;
    commune: String;
    assurance_start_date: string;
    assurance_end_date:string;
  };
}

const Insurance: React.FC = () => {
  const [chasseurs, setChasseurs] = useState<Chasseur[]>([
    {
      name: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      address: '',
      dogs: [{ name: '', insuranceCost: 1000, age: 0, hasTattoo: false, coatColor: '', medicalConditions: '', gender: '', color: '' }]
    }
  ]);
  const [insuranceData, setInsuranceData] = useState<InsuranceData[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'summary'>('form');
  const initialDogState: Dog = { name: '', insuranceCost: 1000, age: 0, hasTattoo: false, coatColor: '', medicalConditions: '', gender: '', color: '' };
  const [souscripteur, setSouscripteur] = useState({
    nom: '',
    raisonSociale: '',
    adresse: '',
  });
  const handleChasseurChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedChasseurs = [...chasseurs];
    updatedChasseurs[index] = { ...updatedChasseurs[index], [name]: value };
    setChasseurs(updatedChasseurs);
  };

  const handleDogChange = (chasseurIndex: number, dogIndex: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;

    const updatedChasseurs = [...chasseurs];
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    updatedChasseurs[chasseurIndex].dogs[dogIndex] = {
      ...updatedChasseurs[chasseurIndex].dogs[dogIndex],
      [name]: newValue,
    };

    setChasseurs(updatedChasseurs);
  };

  const addChasseur = () => {
    const newChasseur: Chasseur = {
      name: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      address: '',
      dogs: []
    };

    // Check if the new chasseur's name or email already exists
    const isDuplicate = chasseurs.some(chasseur =>
      chasseur.name === newChasseur.name || chasseur.email === newChasseur.email
    );

    if (isDuplicate) {
      alert('Chasseur with this name or email already exists.');
      return;
    }

    setChasseurs([...chasseurs, newChasseur]);
  };
 const addDog = (chasseurIndex: number) => {
  const updatedChasseurs = [...chasseurs];
  if (!updatedChasseurs[chasseurIndex].dogs) {
    updatedChasseurs[chasseurIndex].dogs = []; // Initialize the dogs array if it doesn't exist
  }
  updatedChasseurs[chasseurIndex].dogs.push(initialDogState); // Add a new dog to the specified chasseur
  setChasseurs(updatedChasseurs);
};

  
  const removeDog = (chasseurIndex: number, dogIndex: number) => {
    const updatedChasseurs = [...chasseurs];
    updatedChasseurs[chasseurIndex].dogs.splice(dogIndex, 1);
    setChasseurs(updatedChasseurs);
  };

  const handleSubmit = async () => {
    // Check if all chasseur fields are filled out
    for (const chasseur of chasseurs) {
      if (!chasseur.name || !chasseur.email || !chasseur.phoneNumber || !chasseur.dateOfBirth || !chasseur.address) {
        alert('Please fill out all chasseur fields.');
        return;
      }
    }
  
    try {
      const insuranceDataArray: InsuranceData[] = await Promise.all(
        chasseurs.map(async (chasseur) => {
          const totalDogInsuranceCost = chasseur.dogs.reduce((sum, dog) => sum + dog.insuranceCost, 0);
          const baseInsuranceCost = 3500;
          const totalInsuranceCost = baseInsuranceCost + totalDogInsuranceCost;
  
          const formData = {
            chasseur: {
              name: chasseur.name,
              email: chasseur.email,
              phoneNumber: chasseur.phoneNumber,
              dateOfBirth: chasseur.dateOfBirth,
              address: chasseur.address,
            },
            dogs: chasseur.dogs.map((dog) => ({
              name: dog.name,
              age: dog.age,
              insuranceCost: dog.insuranceCost,
              hasTattoo: dog.hasTattoo,
              coatColor: dog.coatColor,
              medicalConditions: dog.medicalConditions,
              gender: dog.gender,
              color: dog.color,
            })),
          };
  
          console.log('Sending formData to backend:', formData);
  
          // Send formData to backend for data insertion
          const response = await fetch('http://localhost/Bakend/index.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log('Received result:', result);
  
          // Ensure the result contains an email
          if (!result.email) {
            throw new Error('Missing email in the response');
          }
  
          // Fetch user information based on email
          const userResponse = await fetch(`http://localhost/Bakend/index.php?email=${result.email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!userResponse.ok) {
            throw new Error(`Failed to fetch user information! Status: ${userResponse.status}`);
          }
            
          const userData = await userResponse.json();
          console.log('Received user data:', userData);
          
          if (!userData.user) {
            throw new Error('User data not found in the response');
          }
  
          return {
            chasseur: formData.chasseur,
            dogs: formData.dogs,
            totalInsuranceCost: totalInsuranceCost,
            insurance_cost: result.insurance_cost,
            baseInsuranceCost: baseInsuranceCost,
            user: userData.user,
          };
        })
      );
  
      console.log('Insurance Data Array:', insuranceDataArray);
  
      // Update state with insurance data and switch to summary tab
      setInsuranceData(insuranceDataArray);
      setActiveTab('summary');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error calculating the insurance.');
    }
  };
  
  const handleSouscripteurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSouscripteur({
      ...souscripteur,
      [name]: value,
    });
  };
  function printPage() {
    window.print();
}


  const calculateTotals = () => {
    const totalHunterCost = insuranceData.reduce((sum, data) => sum + data.baseInsuranceCost, 0);
    const totalDogCost = insuranceData.reduce((sum, data) => sum + data.dogs.reduce((dogSum, dog) => dogSum + dog.insuranceCost, 0), 0);
    const overallTotal = insuranceData.reduce((sum, data) => sum + data.totalInsuranceCost, 0);

    return { totalHunterCost, totalDogCost, overallTotal };
  };

  return (
    <div className={styles.container}>
     <div className="no-print">
      <h1>Insurance Form</h1>

      {activeTab === 'form' && (
        <div className={styles.formContainer}>
          {chasseurs.map((chasseur, chasseurIndex) => (
            <form key={chasseurIndex}>
            <div className={styles.field}>
            <label htmlFor="souscripteur-nom">Nom / Raison Sociale du Souscripteur</label>
            <input
              type="text"
              id="souscripteur-nom"
              name="nom"
              value={souscripteur.nom}
              onChange={handleSouscripteurChange}
              required
            />
          </div>
          <div className={styles.field}>
          <label htmlFor="souscripteur-raison-sociale">Adresse</label>
          <input
            type="text"
            id="souscripteur-raison-sociale"
            name="adresse"
            value={souscripteur.adresse}
            onChange={handleSouscripteurChange}
            required
          />
        </div>
              <div className={styles.field}>
                <label htmlFor={`chasseur-name-${chasseurIndex}`}>Chasseur Name</label>
                <input
                  type="text"
                  id={`chasseur-name-${chasseurIndex}`}
                  name="name"
                  value={chasseur.name}
                  onChange={(e) => handleChasseurChange(chasseurIndex, e)}
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`chasseur-email-${chasseurIndex}`}>Email</label>
                <input
                  type="email"
                  id={`chasseur-email-${chasseurIndex}`}
                  name="email"
                  value={chasseur.email}
                  onChange={(e) => handleChasseurChange(chasseurIndex, e)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`chasseur-phone-${chasseurIndex}`}>Phone Number</label>
                <input
                  type="tel"
                  id={`chasseur-phone-${chasseurIndex}`}
                  name="phoneNumber"
                  value={chasseur.phoneNumber}
                  onChange={(e) => handleChasseurChange(chasseurIndex, e)}
                  required
                  autoComplete="tel"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`chasseur-dob-${chasseurIndex}`}>Date of Birth</label>
                <input
                  type="date"
                  id={`chasseur-dob-${chasseurIndex}`}
                  name="dateOfBirth"
                  value={chasseur.dateOfBirth}
                  onChange={(e) => handleChasseurChange(chasseurIndex, e)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`chasseur-address-${chasseurIndex}`}>Address</label>
                <input
                  type="text"
                  id={`chasseur-address-${chasseurIndex}`}
                  name="address"
                  value={chasseur.address}
                  onChange={(e) => handleChasseurChange(chasseurIndex, e)}
                  required
                  autoComplete="street-address"
                />
              </div>
              {chasseur.dogs.map((dog, dogIndex) => (
                <div key={dogIndex}>
                  <div className={styles.field}>
                    <label htmlFor={`dog-name-${chasseurIndex}-${dogIndex}`}>Dog Name</label>
                    <input
                      type="text"
                      id={`dog-name-${chasseurIndex}-${dogIndex}`}
                      name="name"
                      value={dog.name}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-age-${chasseurIndex}-${dogIndex}`}>Age</label>
                    <input
                      type="number"
                      id={`dog-age-${chasseurIndex}-${dogIndex}`}
                      name="age"
                      value={dog.age}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-hasTattoo-${chasseurIndex}-${dogIndex}`}>Tattoo</label>
                    <input
                      type="checkbox"
                      id={`dog-hasTattoo-${chasseurIndex}-${dogIndex}`}
                      name="hasTattoo"
                      checked={dog.hasTattoo}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-coatColor-${chasseurIndex}-${dogIndex}`}>Coat Color</label>
                    <input
                      type="text"
                      id={`dog-coatColor-${chasseurIndex}-${dogIndex}`}
                      name="coatColor"
                      value={dog.coatColor}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-medicalConditions-${chasseurIndex}-${dogIndex}`}>Medical Conditions</label>
                    <input
                      type="text"
                      id={`dog-medicalConditions-${chasseurIndex}-${dogIndex}`}
                      name="medicalConditions"
                      value={dog.medicalConditions}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-gender-${chasseurIndex}-${dogIndex}`}>Gender</label>
                    <select
                      id={`dog-gender-${chasseurIndex}-${dogIndex}`}
                      name="gender"
                      value={dog.gender}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor={`dog-color-${chasseurIndex}-${dogIndex}`}>Color</label>
                    <input
                      type="text"
                      id={`dog-color-${chasseurIndex}-${dogIndex}`}
                      name="color"
                      value={dog.color}
                      onChange={(e) => handleDogChange(chasseurIndex, dogIndex, e)}
                      autoComplete="off"
                    />
                  </div>
                 
                  <button type="button" onClick={() => removeDog(chasseurIndex, dogIndex)} className={styles.removeButton}>
                    Remove Dog
                  </button>
                 
                </div>
                
              ))}
              <button type="button" onClick={() => addDog(chasseurIndex)} className={styles.addButton}>
              Add Dog
            </button>
            </form>
          ))}
            <button type="button" onClick={addChasseur} className={styles.addButton}>
            Add Chasseur
          </button>
          <button type="button" className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        )}
        </div>
{activeTab === 'summary' && insuranceData.length > 0 && (
  <div className="print-area">
    <h2>Insurance Summary</h2>
    <div className={styles.summaryCard}>
    {/* Display POLICE and Assuré Information just once */}
    <h3>POLICE</h3>
    <pre>Unité:  10    Direction des Services Siège</pre>
    <pre>Agence: 602   Direction des Services Siège</pre>
    <pre>Adresse: Rue des Frères BOUADOU Ex Ravin de la Femme Sauvage Bir Mourad Rais </pre>
    <pre>Telephone:+21370604577</pre>
    <pre>Fax:+21370604578</pre>
    <pre>Branche/Catégorie: 1417 RC Chasse</pre>
    <pre>Date d'effet : {insuranceData[0].user.assurance_start_date}</pre>
    <pre>Date d'echeance : {insuranceData[0].user.assurance_end_date}</pre>
    </div>
    <div className={styles.summaryCard}>
    <h3>Assuré Information</h3>
    <p>Nom: {insuranceData[0].user.nom}</p>
    <p>Prénom: {insuranceData[0].user.prenom}</p>
    <p>Date de naissance: {insuranceData[0].user.date_de_naissance}</p>
    <p>Email: {insuranceData[0].user.email}</p>
    <p>Numéro de téléphone: {insuranceData[0].user.numero_de_telephone}</p>
    <p>Adresse: {insuranceData[0].user.adresse}, {insuranceData[0].user.commune}, {insuranceData[0].user.wilaya}</p>
          </div>
          
           {/* Display Souscripteur Information */}
    <div className={styles.summaryCard}>
      <h3>Information du Souscripteur</h3>
      <p>Nom / Raison Sociale: {souscripteur.nom}</p>
      <p>Adresse: {souscripteur.adresse}</p>
    </div>
    {/* Loop through each chasseur and their dogs */}
    {insuranceData.map((data, index) => (
      <div key={index} className={styles.summaryCard}>
        <h3>Chasseur Information</h3>
        <p>Nom: {data.chasseur.name}</p>
        <p>Email: {data.chasseur.email}</p>
        <p>Numero de téléphone: {data.chasseur.phoneNumber}</p>
        <p>Date de naissance: {data.chasseur.dateOfBirth}</p>
        <p>Adresse: {data.chasseur.address}</p>
       
        <h4>Chien Information</h4>
        {data.dogs.map((dog, dogIndex) => (
          <div key={dogIndex}>
            <p>Nom: {dog.name}</p>
            <p>Age: {dog.age}</p>
            <p>Tattoo: {dog.hasTattoo ? 'Yes' : 'No'}</p>
            <p>Couleur de robe: {dog.coatColor}</p>
            <p>Conditions Médicales: {dog.medicalConditions}</p>
            <p>Sexe: {dog.gender}</p>
            <p>Couleur: {dog.color}</p>
            <p>Prix d'assurance des chiens: {dog.insuranceCost}</p>
          </div>
        ))}

        <p>Total Insurance Cost: {data.totalInsuranceCost}</p>
      </div>
    ))}

     <div className={styles.summaryCard}>
      <h3>Chasse</h3>
      <table>
        <tbody>
          <tr>
            <td>Nombre totale de chasseurs:</td>
            <td>{insuranceData.length}</td>
          </tr>
          <tr>
            <td>Nombre totale de chiens:</td>
            <td>{insuranceData.reduce((total, data) => total + data.dogs.length, 0)}</td>
          </tr>
          <tr>
            <td>Prime totale des chasseurs:</td>
            <td>{calculateTotals().totalHunterCost}</td>
          </tr>
          <tr>
            <td>Prime totale des chiens:</td>
            <td>{calculateTotals().totalDogCost}</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div  className={styles.summaryCard}>
      <h3>Décompte de prime</h3>
      <table>
        <tbody>
          <tr>
            <td>Prime Nette:</td>
            <td>{calculateTotals().overallTotal}</td>
          </tr>
          <tr>
            <td>Accès:</td>
            <td>250.00</td>
          </tr>
          <tr>
            <td>TVA:</td>
            <td>1757.50</td>
          </tr>
          <tr>
            <td>Autres Taxes:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Timbres:</td>
            <td>40.00</td>
          </tr>
          <tr>
  <td>Prime Totale:</td>
  <td>
    {(
      parseFloat(calculateTotals().overallTotal.toString()) + 
      parseFloat("250.00") + 
      parseFloat("1757.50") + 
      parseFloat("0.00") + 
      parseFloat("40.00")
    ).toFixed(2)}
  </td>
</tr>

        </tbody>
      </table>
    </div>
    <div className="no-print">
    <button type="button" onClick={printPage} className={styles.printButton}>
        Print
      </button>
    <button type="button" onClick={() => setActiveTab('form')} className={styles.printButton}>
      Go Back
    </button>
    </div>        
  </div>
)}
   
   
    </div>
  );
};

export default Insurance;

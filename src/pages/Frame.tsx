import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Frame.module.css";
import headerStyles from "../components/Header.module.css"; // Import header styles
import { Link } from 'react-router-dom';

const Frame: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsDisabled(!(e.target.value && password));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsDisabled(!(email && e.target.value));
  };

  const handleLogin = async () => {
    if (!isDisabled) {
      try {
        const response = await fetch('http://localhost:8000/signup.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Login result:', result);

        // Handle authentication logic based on the response
        if (result.success) {
          alert('Login successful!');
          navigate('/insurance'); // Navigate to the insurance page
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error logging in.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={headerStyles.filterInner}>
        <div className={headerStyles.frameParent}>
          <div className={headerStyles.frameGroup}>
            <div className={headerStyles.images1Wrapper}>
              <img
                className={headerStyles.images1Icon}
                loading="lazy"
                alt=""
                src="/images-1@2x.png"
              />
            </div>
            <div className={headerStyles.navbarBrand}>
              <a className={headerStyles.saa}>SAA</a>
              <div className={headerStyles.logoWrapper}>
                <img
                  className={headerStyles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={headerStyles.frameWrapper}>
            <div className={headerStyles.linkParent}>
            <Link to="/" className={styles.link}>Home</Link>
             <Link to="/" className={styles.link1}>Product</Link>
              <Link to="/" className={styles.link2}>About us </Link>
              <Link to="/" className={styles.link3}>Contact</Link>
             
              
            </div>
          </div>
          <div className={headerStyles.frameContainer}>
            <div className={headerStyles.frameDiv}>
              <div className={headerStyles.btnTextWrapper}>
                <Link to = "/root" className={headerStyles.btnText}>Regitration</Link>
              </div>
              <button className={headerStyles.signUp}>
                <nav>
                  <a href="/frame-3" className={headerStyles.btnText1}>
                    espace client
                  </a>
                </nav>
                <div className={headerStyles.icnArrowRightIcnXsWrapper}>
                  <div className={headerStyles.icnArrowRightIcnXs}>
                    <div className={headerStyles.login} />
                    <img
                      className={headerStyles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Login</h2>
        <FrameComponent1 />
        <div className={styles.inputFormControlWrapper}>
          <div className={styles.inputFormControl}>
            <input
              className={styles.inputField}
              placeholder="Email*"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              className={styles.inputField}
              placeholder="Password*"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <FrameComponent />
        <button
          className={`${styles.loginButton} ${isDisabled ? styles.disabled : ''}`}
          onClick={(e) => {
            if (!isDisabled) {
              handleLogin();
            }
          }}
          disabled={isDisabled}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Frame;

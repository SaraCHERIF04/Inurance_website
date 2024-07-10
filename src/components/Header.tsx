import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';


export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.header3, className].join(" ")}>
      <div className={styles.background}>
        <img
          className={styles.heroCover1Icon}
          alt=""
          src="/herocover1@2x.png"
        />
        <div className={styles.filter}>
          <div className={styles.filterChild} />
          <div className={styles.filterInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.images1Wrapper}>
                  <img
                    className={styles.images1Icon}
                    loading="lazy"
                    alt=""
                    src="/images-1@2x.png"
                  />
                </div>
                <div className={styles.navbarBrand}>
                  <a className={styles.saa}>SAA</a>
                  <div className={styles.logoWrapper}>
                    <img
                      className={styles.logoIcon}
                      loading="lazy"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.linkParent}>
                <Link to="/" className={styles.link}>Home</Link>
             <Link to="/" className={styles.link1}>Product</Link>
              <Link to="/" className={styles.link2}>About us </Link>
              <Link to="/" className={styles.link3}>Contact</Link>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.btnTextWrapper}>
                    <Link to="/root" className={styles.btnText}>Registration</Link>
                  </div>
                  <button className={styles.signUp}>
                  <nav>
                        <Link to="/frame-3" className={styles.btnText1}>
                         espace client
                        </Link>
                         </nav>
                    <div className={styles.icnArrowRightIcnXsWrapper}>
                      <div className={styles.icnArrowRightIcnXs}>
                        <div className={styles.login} />
                        <img
                          className={styles.vectorIcon}
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
          <div className={styles.navbarToggler} />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colMd8}>
                <h1 className={styles.h1Headline3}>
                We Ensure A Best Insurance Service
                </h1>
                <p className={styles.h4}>
                  <span
                    className={styles.weKnowHow}
                  >{`We know how large objects will act, `}</span>
                  <span className={styles.butThingsOn}>
                    but things on a small scale.
                  </span>
                </p>
                <div className={styles.cta}>
                  <button className={styles.buttonbtnprimaryColorbtnR}>
                    <a className={styles.btnText2}>Get Quote Now</a>
                  </button>
                  <button className={styles.buttonbtnprimaryColorbtnO}>
                    <a className={styles.btnText3}>Learn More</a>
                  </button>
                </div>
              </div>
              <div className={styles.colMd4} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbarTogglerIcon} />
    </section>
  );
};

export default Header;

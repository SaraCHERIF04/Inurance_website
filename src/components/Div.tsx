import { FunctionComponent } from "react";
import styles from "./Div.module.css";

export type DivType = {
  className?: string;
};

const Div: FunctionComponent<DivType> = ({ className = "" }) => {
  return (
    <footer className={[styles.div, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd2}>
            <b className={styles.h5}>Company Info</b>
            <div className={styles.div1}>
              <b className={styles.link}>About Us</b>
              <b className={styles.link1}>PDG Word</b>
              <div className={styles.link2}>Number of SAA</div>
              <b className={styles.link3}>Tenders</b>
              <div className={styles.link4}>latest job offers</div>
            </div>
          </div>
          <div className={styles.colMd21}>
            <b className={styles.h51}>SAA PRODUCT</b>
            <div className={styles.div2}>
              <b className={styles.link5}>Auto Insurance</b>
              <b className={styles.link6}>multi risk inhabitons</b>
              <b className={styles.link7}>natural disasters</b>
              <b className={styles.link8}>
                <p className={styles.liability}>Liability</p>
                <p className={styles.blankLine}>&nbsp;</p>
              </b>
              <b className={styles.link9}>leisure boat</b>
            </div>
          </div>
          <div className={styles.colMd22}>
            <b className={styles.h52}>PROTECTION OF DATA</b>
            <div className={styles.div3}>
              <b className={styles.link10}>Personal Data Protection Policy</b>
            </div>
          </div>
          <div className={styles.colMd4}>
            <b className={styles.h53}>Get In Touch</b>
            <div className={styles.featureItem}>
              <img
                className={styles.bxbxPhoneIcon}
                loading="lazy"
                alt=""
                src="/bxbxphone.svg"
              />
              <b className={styles.h6}>
                <p className={styles.p}>+213 21 225 000</p>
                <p className={styles.p1}>+213 21 225 050</p>
                <p className={styles.p2}>+213 21 225 151</p>
              </b>
            </div>
            <div className={styles.div4}>
              <div className={styles.featureItem1}>
                <img
                  className={styles.carbonsendAltIcon}
                  loading="lazy"
                  alt=""
                  src="/carbonsendalt.svg"
                />
                <b className={styles.h61}>ecoute_client@saa.dz</b>
              </div>
              <div className={styles.featureItem2}>
                <img
                  className={styles.bxbxMapIcon}
                  loading="lazy"
                  alt=""
                  src="/bxbxmap.svg"
                />
                <p className={styles.h62}>
                  Immeuble SAA lot 234 Quartier d'Affaires Bab Ezzouar - Alger -
                  AlgérieManchester, Kentucky 39495
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Div;

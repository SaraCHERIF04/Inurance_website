import { FunctionComponent } from "react";
import styles from "./Div1.module.css";

export type DivType = {
  className?: string;
};

const Div: FunctionComponent<DivType> = ({ className = "" }) => {
  return (
    <footer className={[styles.div, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd7}>
            <div className={styles.socitNationaleDes}>
              Société Nationale Des Assurances, SPA © 2024. All rights reserved.
            </div>
          </div>
          <div className={styles.colMd6}>
            <div className={styles.socialMedia}>
              <img
                className={styles.antDesignfacebookFilledIcon}
                loading="lazy"
                alt=""
                src="/antdesignfacebookfilled.svg"
              />
              <img
                className={styles.antDesigninstagramOutlinedIcon}
                loading="lazy"
                alt=""
                src="/antdesigninstagramoutlined.svg"
              />
              <img
                className={styles.antDesigntwitterOutlinedIcon}
                loading="lazy"
                alt=""
                src="/antdesigntwitteroutlined.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Div;

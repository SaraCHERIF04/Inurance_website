import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";
import { Link } from 'react-router-dom';
export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.motDePasseOublierParent}>
        <Link to="/Frame1"className={styles.motDePasse}>Forgotten password?</Link>
        <div className={styles.inscriptionWrapper}>
          <Link to="/root" className={styles.inscription} >
            Registration
          </Link>
        </div>
      </div>
     
    </section>
  );
};

export default FrameComponent;

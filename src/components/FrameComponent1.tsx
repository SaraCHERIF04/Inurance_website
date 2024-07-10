import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.authenticationLogInToYourParent}>
        <div className={styles.authenticationLogInContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.logInTo}>
            Log in to your account or create a new one
          </p>
        </div>
        <div className={styles.inputformControlWrapper}>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

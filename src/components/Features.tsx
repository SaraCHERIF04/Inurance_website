import { FunctionComponent } from "react";
import ColMd from "./ColMd";
import styles from "./Features.module.css";

export type FeaturesType = {
  className?: string;
};

const Features: FunctionComponent<FeaturesType> = ({ className = "" }) => {
  return (
    <section className={[styles.features1, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.row}>
          <ColMd
            icnResizeIcnXl="/icn-resize-icnxl.svg"
            h5FeatureTitle1="Peace of Mind"
            soItReallyBehavesLikeNeit="So it really behaves like neither. "
            nowWeHaveGivenUp="Now we have given up. "
          />
          <ColMd
            icnResizeIcnXl="/icn-resize-icnxl-1.svg"
            h5FeatureTitle1="Set For Life"
            soItReallyBehavesLikeNeit="They were used to create the "
            nowWeHaveGivenUp="machines that launched "
            propPadding="0px var(--padding-11xs)"
            propPadding1="var(--padding-21xl) var(--padding-36xl)"
            propPadding2="unset"
            propMinWidth="96px"
          />
          <div className={styles.colMd4}>
            <div className={styles.cardItem}>
              <img
                className={styles.icnResizeIcnXl}
                loading="lazy"
                alt=""
                src="/icn-resize-icnxl-2.svg"
              />
              <div className={styles.h5FeatureTitle3Parent}>
                <b className={styles.h5FeatureTitle3}>100% Satisfaction</b>
                <div className={styles.paragraph}>
                  <p
                    className={styles.soItReally}
                  >{`So it really behaves like neither. `}</p>
                  <p className={styles.nowWeHave}>{`Now we have given up. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

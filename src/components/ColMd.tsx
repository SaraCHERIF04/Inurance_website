import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ColMd.module.css";

export type ColMdType = {
  className?: string;
  icnResizeIcnXl?: string;
  h5FeatureTitle1?: string;
  soItReallyBehavesLikeNeit?: string;
  nowWeHaveGivenUp?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ColMd: FunctionComponent<ColMdType> = ({
  className = "",
  icnResizeIcnXl,
  h5FeatureTitle1,
  soItReallyBehavesLikeNeit,
  nowWeHaveGivenUp,
  propPadding,
  propPadding1,
  propPadding2,
  propMinWidth,
}) => {
  const colMd4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const cardItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const h5FeatureTitle1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.colMd4, className].join(" ")} style={colMd4Style}>
      <div className={styles.cardItem} style={cardItemStyle}>
        <img
          className={styles.icnResizeIcnXl}
          loading="lazy"
          alt=""
          src={icnResizeIcnXl}
        />
        <div className={styles.h5FeatureTitle1Parent} style={frameDivStyle}>
          <b className={styles.h5FeatureTitle1} style={h5FeatureTitle1Style}>
            {h5FeatureTitle1}
          </b>
          <div className={styles.paragraph}>
            <p className={styles.soItReally}>{soItReallyBehavesLikeNeit}</p>
            <p className={styles.nowWeHave}>{nowWeHaveGivenUp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColMd;

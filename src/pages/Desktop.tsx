import { FunctionComponent } from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Content from "../components/Content";
import Contact from "../components/Contact";
import Div from "../components/Div";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <Header />
      <Features />
      <div className={styles.desktopChild} />
      <Content />
      <Contact />
      <section className={styles.footer2}>
        <header className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd6}>
              <h2 className={styles.h3}>
                Consulting Agency For Your insurance
              </h2>
              <div className={styles.paragraph}>
                the quick fox jumps over the lazy dog
              </div>
            </div>
            <div className={styles.colMd3}>
              <button className={styles.buttonbtnprimaryColor}>
                <a className={styles.btnText}>Contact Us</a>
              </button>
            </div>
          </div>
        </header>
        <Div />
      </section>
    </div>
  );
};

export default Desktop;

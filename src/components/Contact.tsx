import { FunctionComponent } from "react";
import styles from "./Contact.module.css";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {
  return (
    <section className={[styles.contact1, className].join(" ")}>
      <div className={styles.background}>
        <img
          className={styles.contactCover1Icon}
          alt=""
          src="/contactcover1@2x.png"
        />
        <div className={styles.filter}>
          <div className={styles.cardItem}>
            <div className={styles.h5Parent}>
              <b className={styles.h5}>Contact Us</b>
              <h1 className={styles.h2}>Make an Appointment</h1>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.frameParent}>
                <div className={styles.formControlInputStyle1Parent}>
                  <div className={styles.formControlInputStyle1}>
                    <div className={styles.inputformControl}>
                      <input
                        className={styles.email}
                        placeholder="Full Name * "
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.inputformControl1}>
                    <input
                      className={styles.email1}
                      placeholder="Telephone Number*"
                      type="tel"
                    />
                  </div>
                </div>
                <div className={styles.inputformControlParent}>
                  <div className={styles.inputformControl2}>
                    <input
                      className={styles.email2}
                      placeholder="Email-Address*"
                      type="email"
                    />
                  </div>
                  <div className={styles.inputformControl3}>
                    <input
                      className={styles.email3}
                      placeholder="Address*"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <textarea
                className={styles.formControlTextareaInputSt}
                placeholder="Message"
                rows={7}
                cols={30}
              />
            </div>
            <button className={styles.buttonbtnprimaryColor}>
              <b className={styles.btnText}>Book Appointment</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

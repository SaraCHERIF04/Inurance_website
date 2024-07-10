import { FunctionComponent } from "react";
import styles from "./Content.module.css";

// Define the prop types
export type ContentType = {
  className?: string;
};

// Define the Content component
const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content4, className].join(" ")}>
      <div className={styles.content4Inner}>
        <div className={styles.frameParent}>
          <div className={styles.h2FeatureSection1Wrapper}>
            <h1 className={styles.h2FeatureSection1}>Our services</h1>
          </div>
          <p className={styles.paragraph}>
            <span className={styles.problemsTryingTo}>
              Problems trying to resolve the conflict between 
            </span>
            <span className={styles.theTwoMajor}>
              the two major realms of Classical physics: Newtonian mechanics 
            </span>
          </p>
        </div>
      </div>
      
      <div className={styles.cardItemParent}>
        {/* Card 1 */}
        <div className={styles.cardItem}>
          <div className={styles.mediaBgCover}>
            <img className={styles.post1Icon} alt="" src="/post1@2x.png" />
            <div className={styles.filter}>
              <h4 className={styles.h6}>CATASTROPHES NATURELLES</h4>
              <div className={styles.filterInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.h3Wrapper}>
                    <a className={styles.h3}>
                    
                    </a>
                  </div>
                  <button className={styles.buttonbtnprimaryColorbtnR}>
                    <b className={styles.btnText}>inscrit vous</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className={styles.cardItem1}>
          <div className={styles.mediaBgCover1}>
            <img className={styles.filterIcon} alt="" src="/splashpage.jpg" />
            <b className={styles.h61}>Auto Insurance</b>
            <div className={styles.mediaBgCoverInner}>
              <div className={styles.h3Parent}>
                <p className={styles.h31}>
                   
                </p>
                <button className={styles.buttonbtnprimaryColorbtnR1}>
                  <b className={styles.btnText1}>{`info & devis`}</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className={styles.cardItem2}>
          <img className={styles.filterIcon} alt="" src="/filter@2x.png" />
          <div className={styles.h6Wrapper}>
            <b className={styles.h62}> HABITATION</b>
          </div>
          <div className={styles.h3Group}>
            <div className={styles.h32}>
              
            </div>
            <button className={styles.buttonbtnprimaryColorbtnR2}>
              <b className={styles.btnText2}>{`Currency & online subscription`}</b>
            </button>
          </div>
        </div>
      </div>
      
      <div className={styles.colMd3Parent}>
        {/* Card 4 */}
        <div className={styles.colMd3}>
          <div className={styles.cardItem3}>
            <div className={styles.mediaBgCover2}>
              <div className={styles.filter1}>
                <div className={styles.h6Parent}>
                  <b className={styles.h63}>SAFETY BOAT OF PLAISANCE</b>
                  <div className={styles.h3Container}>
                    <div className={styles.h33}>
                     
                    </div>
                  </div>
                </div>
                <div className={styles.buttonbtnprimaryColorbtnRWrapper}>
                  <div className={styles.buttonbtnprimaryColorbtnR3}>
                    <b className={styles.btnText3}>inscrit vous</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 5 */}
        <div className={styles.cardItem3}>
          <div className={styles.mediaBgCover3}>
            <img
              className={styles.pexels107932638205519531Icon1}
              alt=""
              src="/warrantless-detention-300x300.jpg"
            />
            <b className={styles.h64}>FAMILY CIVIL RESPONSIBILITY</b>
            <div className={styles.h3Frame}>
              <div className={styles.h34}>
               
              </div>
            </div>
            <div className={styles.buttonbtnprimaryColorbtnRContainer}>
              <div className={styles.buttonbtnprimaryColorbtnR4}>
                <a className={styles.btnText3}>{`info & devis`}</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 6 */}
        <div className={styles.colMd32}>
          <div className={styles.cardItem5}>
            <img className={styles.filterIcon1} alt="" src="/istockphoto-1365436662-612x612.jpg" />
            <b className={styles.h65}>
              Are you a professional or an enterprise?
            </b>
            <div className={styles.cardItemInner}>
              <div className={styles.frameDiv}>
                <div className={styles.h35}>
                 
                </div>
                <div className={styles.buttonbtnprimaryColorbtnR5}>
                  <b className={styles.btnText5}>{`Currency & online subscription`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

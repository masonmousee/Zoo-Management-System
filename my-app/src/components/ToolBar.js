import React from "react";
import TCVMap from "../assets/TCV-Map.jpg";
import FAQIcon from "../assets/aq-faq-toolbar.jpg.png";
import styles from "./ToolBar.module.css";
import LayoutSections from "./layout/LayoutSections";
import classes from "./ToolBar.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToolBar = () => {
    return (
        <section className={classes.section}>
            <div className={styles["service_content"]}>
                <h1>Services</h1>
            </div>

            <div className={styles["toolbar-mini__popup"]}>
                <div className={styles["toolbar-inner"]}>
                    <div className={`${styles["toolbar-mini__popup"]} ${styles["toolbar-mini__popup--openings"]} ${styles["toolbar-mini__popup--left"]}`}>
                        <h2 className={styles["toolbar-mini__headline"]}>
                            Opening hours
                        </h2>
                        <div className={`${styles["toolbar-mini__cell-content"]} ${styles["toolbar-mini__cell-content--time"]}`}>
                            <div className={styles["toolbar-mini__subheadline"]}>
                                Today,
                                4. October
                            </div>
                            <div className={styles["toolbar-mini__time"]}>
                                9:00 - 18:00
                            </div>
                            <div className={styles["toolbar-mini__text"]}>
                                Last admission: 17:00
                            </div>
                        </div>
                        <a href="/" title="All opening hours" className={`${styles["toolbar-mini__link"]} ${styles.btn} ${styles["btn--variant"]}`}>All opening hours<FontAwesomeIcon className={`${styles["angle-icon"]}`} icon={faAngleRight} style={{color: "var(--cor-4)"}} /></a>
                    </div>

                    <div className={`${styles["toolbar-mini__popup"]} ${styles["toolbar-mini__popup--events"]} ${styles["toolbar-mini__popup--left"]}`}>
                        <h2 className={styles["toolbar-mini__headline"]}>
                            Feedings &amp; Trainings
                        </h2>
                        <div className={styles["toolbar-mini__cell-content"]}>

                            <ul className={styles["toolbar-mini__list"]}>
                                <li className={styles["toolbar-mini__list-item"]}>
                                    Our animals are full up. No more feeding sessions today.
                                </li>
                            </ul>
                        </div>

                        <a href="/en/experiences/feedings-trainings" title="All feedings" className={`${styles["toolbar-mini__link"]} ${styles.btn} ${styles["btn--variant"]}`}>All feedings<FontAwesomeIcon className={`${styles["angle-icon"]}`} icon={faAngleRight} style={{color: "var(--cor-4)"}} /></a>

                    </div>
                    <div className={`${styles["toolbar-mini__popup"]} ${styles["toolbar-mini__popup--map"]} ${styles["toolbar-mini__popup--right"]}`}>

                        <h2 className={styles["toolbar-mini__headline"]}>
                            Map
                        </h2>
                        <div className={`${styles["toolbar-mini__cell-content"]} ${styles["toolbar-mini__cell-content--map"]}`}>
                            <img className={styles["toolbar-mini__tile-image-map"]} src={TCVMap} alt="map" />
                        </div>


                        <a href="/" title="Zoo map" className={`${styles["toolbar-mini__link"]} ${styles.btn} ${styles["btn--variant"]}`}>Zoo map<FontAwesomeIcon className={`${styles["angle-icon"]}`} icon={faAngleRight} style={{color: "var(--cor-4)"}} /></a>

                    </div>

                    <div className={`${styles["toolbar-mini__popup"]} ${styles["toolbar-mini__popup--faq"]} ${styles["toolbar-mini__popup--right"]}`}>
                        <h2 className={styles["toolbar-mini__headline"]}>
                            FAQ
                        </h2>
                        <div className={`${styles["toolbar-mini__cell-content"]} ${styles["toolbar-mini__cell-content--faq"]}`}>
                            <img className={styles["toolbar-mini__tile-image-faq"]} src={FAQIcon} width="74" height="95" alt="" />
                        </div>
                        <a href="/" title="Frequent questions" className={`${styles["toolbar-mini__link"]} ${styles.btn} ${styles["btn--variant"]}`}>Frequent questions <FontAwesomeIcon className={`${styles["angle-icon"]}`} icon={faAngleRight} style={{color: "var(--cor-4)"}} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolBar;
import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Paweł Kosiec</span>,
          <br />
          Full-stack Cloud Developer.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Software engineer interested in personal growth and tech trends.
          <br /> Cloud-native and open-source enthusiast.
        </p>
      </div>
    </header>
  );
};

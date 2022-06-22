import clsx from "clsx";
import React, { FunctionComponent } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import AboutMeDesc from "./_about-me.md";
import styles from "./AboutMe.module.scss";

export const AboutMe: FunctionComponent = () => {
  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className="col col--6">
          <AboutMeDesc />
        </div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <img src={useBaseUrl("/img/avatar.jpg")} className={styles.avatar} />
        </div>
      </div>
    </div>
  );
};

import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import avatar from "./assets/avatar.jpg";

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
          <div className={styles.avatar}>
            <Image img={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

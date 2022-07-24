import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./SocialLinks.module.scss";

export interface SocialLinkData {
  name: string;
  url: string;
  svg?: JSX.Element;
}

export interface SocialLinksProps {
  data: SocialLinkData[];
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({ data }) => {
  const socialLinksComponents = data.map(({ name, url, svg }) => (
    <div className={clsx("col", styles.col)} key={name}>
      <a
        href={url}
        target="_blank"
        className={clsx("button button--outline button--primary", styles.btn)}
      >
        <span className={styles.btnIcon}>{svg}</span>
        <span className={styles.btnText}>{name}</span>
      </a>
    </div>
  ));

  return (
    <div className={styles.socialContainer}>
      <h2>Social media</h2>
      <div className={clsx("row", styles.socialLinks)}>
        {socialLinksComponents}
      </div>
    </div>
  );
};

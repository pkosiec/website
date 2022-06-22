import clsx from "clsx";
import React, { FunctionComponent } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import DiscoverIcon from "./icon-discover.svg";
import styles from "./Project.module.scss";

export interface ProjectData {
  title: string;
  description: string;
  role?: string;
  url: string;
  imageURL: string;
}

export const Project: FunctionComponent<ProjectData> = ({
  title,
  description,
  url,
  role,
  imageURL,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          <img src={useBaseUrl(imageURL)} alt={description} title={title} />
          {role && (
            <span className={clsx("badge badge--secondary", styles.role)}>
              Role: {role}
            </span>
          )}
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            className="button button--primary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

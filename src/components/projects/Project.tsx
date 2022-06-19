import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import NewWindowIcon from "./icon-new-window.svg";
import styles from './Project.module.scss';

export interface ProjectData {
    title: string;
    description: string;
    role?: string;
    url: string;
    imageURL: string;
}

export const Project: FunctionComponent<ProjectData> = ({ title, description, url, role, imageURL }) => {
    return (
        <div className="col col--6">
            <div className={clsx("card", styles.card)}>
                <div className={clsx("card__image", styles.image)}>
                    <img
                        src={useBaseUrl(imageURL)}
                        alt={description}
                        title={title} />
                    {role && <span className={clsx("badge badge--secondary", styles.role)}>Role: {role}</span>}
                </div>
                <div className="card__body">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <a href={url} target="_blank" className="button button--secondary button--outline button--block">Discover <span className={styles.icon}><NewWindowIcon/></span></a>
                </div>
            </div>
        </div>
    );
}
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from "./Talk.module.scss";
import RecordingIcon from "./icon-recording.svg";
import SlidesIcon from "./icon-slides.svg";
import RepositoryIcon from "./icon-repository.svg";

export interface TalkMetadata {
    title: string;
    description: React.ReactNode;
    events: EventMetadata[];
    recordingURL?: string;
    slidesURL?: string;
    repoURL?: string;
}

export interface EventMetadata {
    name: string;
    location: string;
    date: Date;
}

const Talk: FunctionComponent<TalkMetadata> = ({ title, description, events = [], recordingURL, slidesURL, repoURL }) => {
    return (
        <div className="col col--12">
            <div className={clsx("card", styles.card)}>
                <div className="card__header">
                    <h2>{title}</h2>
                </div>
                <div className="card__body">
                    <div className='row'>
                        <div className='col col--7'>
                            <p>{description}</p>

                        </div>
                        <div className='col col--5'>
                            <EventDetails data={events} />
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="row">
                        {recordingURL &&
                            <div className="col">
                                <a href={recordingURL} target="_blank" className="button button--secondary button--block">
                                    <span className={styles.btnIcon}><RecordingIcon /></span>
                                    Watch recording
                                </a>
                            </div>
                        }
                        {slidesURL &&
                            <div className="col">
                                <a href={slidesURL} target="_blank" className="button button--secondary button--outline button--block">
                                    <span className={styles.btnIcon}><SlidesIcon /></span>
                                    See slides
                                </a>
                            </div>}
                        {repoURL && <div className="col">
                            <a href={repoURL} target="_blank" className="button button--secondary button--outline button--block">
                                <span className={styles.btnIcon}><RepositoryIcon /></span>
                                See repository
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const EventDetails: FunctionComponent<{ data: EventMetadata[] }> = ({ data }) => {
    if (data.length === 0) {
        return null
    }

    const { name, location, date } = data.shift();
    return (
        <div className="row">
            <div className='col col--12'>
                <ul className={styles.list}>
                    <li>💬 <strong>{name}</strong></li>
                    <li>📍 {location}</li>
                    <li>📅 {formatDateString(date)}</li>
                </ul>
            </div>
            {data.length > 1 && (
                <div className='col '>
                    <p className='margin--none'>Also presented on:</p>

                    <ul>
                        {data.map(({ name, location, date }) => (
                            <li><strong>{name}</strong> in {location} ({formatDateString(date)})</li>
                        ))}
                    </ul>

                </div>

            )}
        </div>
    )

}

function formatDateString(date: Date): string {
    return `${date.getMonth() + 1}/${date.getUTCFullYear()}`
}


export default Talk;

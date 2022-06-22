import clsx from "clsx";
import React, { FunctionComponent } from "react";

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

const Talk: FunctionComponent<TalkMetadata> = ({
  title,
  description,
  events = [],
  recordingURL,
  slidesURL,
  repoURL,
}) => {
  return (
    <div className="col col--12">
      <div className={clsx("card", styles.card)}>
        <div className="card__header">
          <h2>{title}</h2>
        </div>
        <div className="card__body">
          <div className="row">
            <div className="col col--7">{description}</div>
            <div className={clsx("col col--5", styles.eventDetailsContainer)}>
              <EventDetails data={events} />
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className={styles.buttons}>
            {recordingURL && (
              <a
                href={recordingURL}
                target="_blank"
                className="button button--primary button--outline"
              >
                <span className="button__icon">
                  <RecordingIcon />
                </span>
                Watch recording
              </a>
            )}
            {slidesURL && (
              <a
                href={slidesURL}
                target="_blank"
                className="button button--secondary button--outline"
              >
                <span className="button__icon">
                  <SlidesIcon />
                </span>
                See slides
              </a>
            )}
            {repoURL && (
              <a
                href={repoURL}
                target="_blank"
                className="button button--secondary button--outline"
              >
                <span className="button__icon">
                  <RepositoryIcon />
                </span>
                See repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDetails: FunctionComponent<{ data: EventMetadata[] }> = ({
  data,
}) => {
  if (data.length === 0) {
    return null;
  }

  const [firstEvent, ...otherEvents] = data;
  const { name, location, date } = firstEvent;
  return (
    <div className="row">
      <div className="col col--12">
        <ul className={styles.list}>
          <li>
            💬 <strong>{name}</strong>
          </li>
          <li>📍 {location}</li>
          <li>📅 {formatDateString(date)}</li>
        </ul>
      </div>
      {data.length > 1 && (
        <div className="col col--12">
          <p className="margin--none">Also presented on:</p>
          <ul>
            {otherEvents.map(({ name, location, date }) => (
              <li key={name}>
                <strong>{name}</strong> in {location} ({formatDateString(date)})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function formatDateString(date: Date): string {
  return `${date.getMonth() + 1}/${date.getUTCFullYear()}`;
}

export default Talk;

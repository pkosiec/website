import React, { FunctionComponent } from 'react';

import styles from "./Metadata.module.scss";

export interface TalkMetadataProps {
    eventName: string;
    location: string;
    date: string;
}

const TalkMetadata: FunctionComponent<TalkMetadataProps> = ({ eventName, location, date }) => {
    return (
        <ul className={styles.list}>
            <li>💬 <strong>{eventName}</strong></li>
            <li>📍 {location}</li>
            <li>📅 {date}</li>
        </ul>
    )
}

export default TalkMetadata;

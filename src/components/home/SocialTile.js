import React from "react";

const SocialTile = ({name, url}) => (
    <div>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    </div>
)

export default SocialTile;
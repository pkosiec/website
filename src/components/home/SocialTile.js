import React from "react";

const SocialTile = ({name, url}) => (
    <div>
        <a href={url} target="_blank">{name}</a>
    </div>
)

export default SocialTile;
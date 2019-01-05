import React from "react";
import SocialTile from "./SocialTile";

const SocialTiles = ({ tiles }) => (
  <section>
    {tiles.map(tile => (
      <SocialTile name={tile.name} url={tile.url} />
    ))}
  </section>
);

export default SocialTiles;

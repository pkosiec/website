import { css } from "styled-components";

const sizes = {
  desktop: 1200,
  tablet: 1024,
  phone: 768,
};

export const media = Object.keys(sizes).reduce((obj, label) => {
  const emSize = sizes[label] / 16;
  obj[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return obj;
}, {});

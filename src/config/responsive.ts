import { css } from "@config/styled";
import {
  CSSObject,
  SimpleInterpolation,
  ThemedCssFunction,
} from "styled-components";

enum Sizes {
  PHONE = "phone",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

const sizes: { [index in Sizes]: number } = {
  phone: 768,
  tablet: 1024,
  desktop: 1200,
};

type Media = { [index in Sizes]: ThemedCssFunction<any> };

const DEFAULT_EM = 16;

export const media: Media = Object.keys(sizes).reduce(
  (obj: Media, label: string) => {
    const sizeLabel = label as Sizes;
    const emSize = sizes[sizeLabel] / DEFAULT_EM;
    (obj as any)[sizeLabel] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${emSize}em) {
        ${css(first, ...interpolations)};
      }
    `;
    return obj;
  },
  {} as Media,
);

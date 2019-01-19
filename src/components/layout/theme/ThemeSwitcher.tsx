import * as React from "react";
import styled from "@config/styled";

import { Circle } from "@components/layout/theme/ThemeCircle";
import { RelativeWrapper } from "@components/layout/shared/RelativeWrapper";
import {
  ThemeSwitcherContext,
  ThemeSwitcherType,
} from "@components/layout/theme/ThemeSwitcher.context";

const Switcher = styled.button`
  appearance: none;
  background: transparent;
  margin: 0;
  padding: 10px;
  border-radius: 30px;
  font-size: 0px;
  letter-spacing: 0px;
  word-spacing: 0px;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.tileColor};
  outline: none;
  float: right;
  border: 1px solid transparent;
  transition: all ease-out 0.15s;

  &:hover {
    border-color: ${props => props.theme.borderActive};

    > div > span {
      :nth-of-type(1) {
        left: 6px;
      }
      :nth-of-type(2) {
        left: -6px;
      }
    }
  }

  &:active {
    background: ${props => props.theme.backgroundActive};
    border-color: ${props => props.theme.borderActive};
  }
`;

export const ThemeSwitcher: React.FunctionComponent = ({}) => {
  const label = "Switch Theme";

  const shouldRenderThemeSwitcher = ({
    themesCount,
    nextTheme,
  }: ThemeSwitcherType) => {
    return themesCount > 0 && nextTheme !== null;
  };

  return (
    <ThemeSwitcherContext.Consumer>
      {ctx =>
        shouldRenderThemeSwitcher(ctx) && (
          <Switcher title={label} onClick={ctx.toggleTheme}>
            <span>{label}</span>
            <RelativeWrapper>
              <Circle background={ctx.nextTheme!.backgroundColor} left={3} />
              <Circle background={ctx.nextTheme!.accentColor} left={-3} />
            </RelativeWrapper>
          </Switcher>
        )
      }
    </ThemeSwitcherContext.Consumer>
  );
};

import * as React from "react";

import styled from "@config/styled";
import { Theme } from "@config/themes";
import { Circle } from "./ThemeCircle";
import { RelativeWrapper } from "../shared/RelativeWrapper";
import {
  ThemeSwitcherContext,
  ThemeSwitcherType,
} from "./ThemeSwitcher.context";

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
  }

  &:active {
    background: ${props => props.theme.backgroundActive};
    border-color: ${props => props.theme.borderActive};
  }
`;

interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FunctionComponent<
  ThemeSwitcherProps
> = ({}) => {
  const label = "Switch Theme";

  const shouldRenderThemeSwitcher = (ctx: ThemeSwitcherType) => {
    return ctx.themesCount > 0 && ctx.nextTheme !== null;
  };

  return (
    <ThemeSwitcherContext.Consumer>
      {ctx =>
        shouldRenderThemeSwitcher(ctx) && (
          <Switcher title={label} onClick={ctx.toggleTheme}>
            <span>{label}</span>
            <RelativeWrapper>
              <Circle background={ctx.nextTheme!.backgroundColor} left="3px" />
              <Circle background={ctx.nextTheme!.accentColor} left="-3px" />
            </RelativeWrapper>
          </Switcher>
        )
      }
    </ThemeSwitcherContext.Consumer>
  );
};

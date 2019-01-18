import * as React from "react";

import styled from "@config/styled";
import { Theme } from "@config/themes";
import { Circle } from "./ThemeCircle";
import { RelativeWrapper } from "../shared/RelativeWrapper";

const Switcher = styled.button`
  appearance: none;
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.tileColor};
  outline: none;
  position: absolute;
  right: 40px;
  top: 40px;
`;

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  nextTheme: Theme;
}

export const ThemeSwitcher: React.FunctionComponent<ThemeSwitcherProps> = ({
  toggleTheme,
  nextTheme,
}) => {
  const label = "Switch Theme";

  return (
    <Switcher title={label} onClick={toggleTheme}>
      <RelativeWrapper>
        <Circle background={nextTheme.backgroundColor} left="3px" />
        <Circle background={nextTheme.accentColor} left="-3px" />
      </RelativeWrapper>
    </Switcher>
  );
};

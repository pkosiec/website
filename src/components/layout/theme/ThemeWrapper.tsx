import * as React from "react";
import { themes } from "@config/themes";
import styled, { ThemeProvider } from "@config/styled";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { RelativeWrapper } from "../shared/RelativeWrapper";

interface ThemeWrapperProps {}

interface ThemeWrapperState {
  currentThemeIndex: number;
}

export class ThemeWrapper extends React.Component<
  ThemeWrapperProps,
  ThemeWrapperState
> {
  state = {
    currentThemeIndex: 0,
    nextThemeIndex: 0,
  };

  evaluateNextThemeIndex = () => {
    let nextTheme = this.state.currentThemeIndex + 1;
    if (nextTheme >= themes.length) {
      nextTheme = 0;
    }

    return nextTheme;
  };

  toggleTheme = (nextThemeIndex: number) => {
    this.setState({
      currentThemeIndex: nextThemeIndex,
    });
  };

  render = () => {
    const { children } = this.props;
    const { currentThemeIndex } = this.state;
    const nextThemeIndex = this.evaluateNextThemeIndex();

    return (
      <RelativeWrapper>
        {themes.length > 1 && (
          <ThemeSwitcher
            toggleTheme={() => this.toggleTheme(nextThemeIndex)}
            nextTheme={themes[nextThemeIndex]}
          />
        )}
        <ThemeProvider theme={themes[currentThemeIndex]}>
          <>{children}</>
        </ThemeProvider>
      </RelativeWrapper>
    );
  };
}

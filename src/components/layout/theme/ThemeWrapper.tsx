import * as React from "react";
import { themes } from "@config/themes";
import { ThemeProvider } from "@config/styled";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { RelativeWrapper } from "../shared/RelativeWrapper";

interface ThemeWrapperProps {}

interface ThemeWrapperState {
  currentThemeIndex: number | null;
}

export class ThemeWrapper extends React.Component<
  ThemeWrapperProps,
  ThemeWrapperState
> {
  static THEME_KEY = "theme";

  state = {
    currentThemeIndex: null,
  };

  componentDidMount() {
    const savedTheme = localStorage.getItem(ThemeWrapper.THEME_KEY);
    if (!savedTheme) {
      return;
    }

    const savedThemeIndex = Number(savedTheme);
    if (savedThemeIndex >= themes.length) {
      // invalid value
      localStorage.removeItem(ThemeWrapper.THEME_KEY);
    }

    this.setState({
      currentThemeIndex: savedThemeIndex,
    });
  }

  evaluateNextThemeIndex = () => {
    if (this.state.currentThemeIndex === null) {
      return 0;
    }

    let nextTheme = this.state.currentThemeIndex! + 1;
    if (nextTheme >= themes.length) {
      nextTheme = 0;
    }

    return nextTheme;
  };

  toggleTheme = (nextThemeIndex: number) => {
    localStorage.setItem(ThemeWrapper.THEME_KEY, nextThemeIndex.toString());

    this.setState({
      currentThemeIndex: nextThemeIndex,
    });
  };

  render = () => {
    const { children } = this.props;
    const { currentThemeIndex } = this.state;
    const nextThemeIndex = this.evaluateNextThemeIndex();

    if (currentThemeIndex === null) {
      return null;
    }

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

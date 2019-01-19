import * as React from "react";
import { themes } from "@config/themes";
import { ThemeProvider } from "@config/styled";
import { ThemeSwitcherContext } from "@components/layout/theme/ThemeSwitcher.context";

interface ThemeWrapperState {
  currentThemeIndex: number;
}

export class ThemeWrapper extends React.Component<{}, ThemeWrapperState> {
  static THEME_KEY = "theme";

  state = {
    currentThemeIndex: 0,
  };

  componentDidMount() {
    const savedTheme = localStorage.getItem(ThemeWrapper.THEME_KEY);
    if (!savedTheme) {
      this.setState({
        currentThemeIndex: 0,
      });
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

    const contextValue = {
      themesCount: themes.length,
      nextTheme: themes[nextThemeIndex],
      toggleTheme: () => this.toggleTheme(nextThemeIndex),
    };

    return (
      <ThemeSwitcherContext.Provider value={contextValue}>
        <ThemeProvider theme={themes[currentThemeIndex]}>
          <>{children}</>
        </ThemeProvider>
      </ThemeSwitcherContext.Provider>
    );
  };
}

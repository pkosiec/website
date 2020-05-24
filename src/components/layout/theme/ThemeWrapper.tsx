import * as React from "react";
import { themes, LIGHT_THEME_INDEX, DARK_THEME_INDEX } from "@config/themes";
import { ThemeProvider } from "@config/styled";
import { ThemeSwitcherContext } from "@components/layout/theme/ThemeSwitcher.context";

interface ThemeWrapperState {
  currentThemeIndex: number;
}

export class ThemeWrapper extends React.Component<{}, ThemeWrapperState> {
  static THEME_KEY = "theme";

  matchMediaColorScheme?: MediaQueryList;

  state = {
    currentThemeIndex: LIGHT_THEME_INDEX,
  };

  componentDidMount() {
    const savedThemeStr = localStorage.getItem(ThemeWrapper.THEME_KEY);
    const savedThemeIndex = Number(savedThemeStr);
    if (!savedThemeStr || savedThemeIndex >= themes.length) {
      this.initializeMarchMediaColorScheme();

      this.setState({
        currentThemeIndex: this.getDefaultThemeIndex(),
      });
      return;
    }

    if (savedThemeIndex >= themes.length) {
      // remove invalid value
      localStorage.removeItem(ThemeWrapper.THEME_KEY);
    }

    this.watchForPreferredThemeChange();

    this.setState({
      currentThemeIndex: savedThemeIndex,
    });
  }

  componentWillUnmount = () => {
    this.unwatchPreferredThemeChange();
  };

  initializeMarchMediaColorScheme = () => {
    if (window.matchMedia) {
      this.matchMediaColorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
    }
  };

  watchForPreferredThemeChange = () => {
    if (!this.matchMediaColorScheme) {
      return;
    }

    this.matchMediaColorScheme.addListener(
      this.listenForMatchMediaColorSchemeChange,
    );
  };

  unwatchPreferredThemeChange = () => {
    if (!this.matchMediaColorScheme) {
      return;
    }

    this.matchMediaColorScheme.removeListener(
      this.listenForMatchMediaColorSchemeChange,
    );
  };

  listenForMatchMediaColorSchemeChange = () => {
    this.setState({
      currentThemeIndex: this.getDefaultThemeIndex(),
    });
  };

  getDefaultThemeIndex = () => {
    if (this.matchMediaColorScheme && this.matchMediaColorScheme.matches) {
      return DARK_THEME_INDEX;
    }

    return LIGHT_THEME_INDEX;
  };

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

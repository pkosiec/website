import * as React from "react";
import { Theme } from "@config/themes";

export interface ThemeSwitcherType {
  nextTheme: Theme | null;
  themesCount: number;
  toggleTheme: () => void;
}

export const ThemeSwitcherContext = React.createContext<ThemeSwitcherType>({
  nextTheme: null,
  themesCount: 0,
  toggleTheme: () => {},
});

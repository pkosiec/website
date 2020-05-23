export interface TileStateTheme {
  borderColor: string;
  backgroundColor: string;
  color: string;
}

export enum TileStateType {
  INITIAL = "INITIAL",
  HOVER = "HOVER",
  ACTIVE = "ACTIVE",
}

export type TileTheme = { [key in keyof typeof TileStateType]: TileStateTheme };

export interface Theme {
  backgroundColor: string;
  backgroundActive: string;
  accentColor: string;
  textColor: string;
  // tileColor: string;
  // tileBorderColor: string;
  borderColor: string;
  borderActive: string;
  tile: TileTheme;
  featuredTile: TileTheme;
  shadowColor: string;
}

const darkTheme: Theme = {
  accentColor: "#ffcc00",
  backgroundColor: "#1a1a1a",
  backgroundActive: "#2b2b2b",
  textColor: "#fff",
  borderColor: "#666",
  borderActive: "#504e4e",
  tile: {
    INITIAL: {
      color: "#FFF",
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    HOVER: {
      color: "#FFF",
      borderColor: "#2b2b2b",
      backgroundColor: "#2b2b2b",
    },
    ACTIVE: {
      color: "#FFF",
      borderColor: "#504e4e",
      backgroundColor: "#504e4e",
    },
  },
  featuredTile: {
    INITIAL: {
      color: "#ffcc00",
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    HOVER: {
      color: "#ffcc00",
      borderColor: "#2b2b2b",
      backgroundColor: "#2b2b2b",
    },
    ACTIVE: {
      color: "#1a1a1a",
      borderColor: "#ffcc00",
      backgroundColor: "#ffcc00",
    },
  },
  shadowColor: "rgba(255, 255, 255, 0.3)",
};

const lightTheme: Theme = {
  accentColor: "#026cee",
  backgroundColor: "#fff",
  backgroundActive: "#e5e5e5",
  textColor: "#1a1a1a",
  // tileColor: "#1a1a1a",
  borderColor: "#e5e5e5",
  borderActive: "#e5e5e5",
  tile: {
    INITIAL: {
      color: "#1a1a1a",
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    HOVER: {
      color: "#1a1a1a",
      borderColor: "#e5e5e5",
      backgroundColor: "#e5e5e5",
    },
    ACTIVE: {
      color: "#1a1a1a",
      borderColor: "#ccc",
      backgroundColor: "#ccc",
    },
  },
  featuredTile: {
    INITIAL: {
      color: "#026cee",
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    HOVER: {
      color: "#026cee",
      borderColor: "#e5e5e5",
      backgroundColor: "#e5e5e5",
    },
    ACTIVE: {
      color: "#FFF",
      borderColor: "#026cee",
      backgroundColor: "#026cee",
    },
  },
  shadowColor: "rgba(0, 0, 0, 0.3)",
};

export const themes: Theme[] = [lightTheme, darkTheme];

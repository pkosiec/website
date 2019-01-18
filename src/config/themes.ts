export interface Theme {
  backgroundColor: string;
  backgroundActive: string;
  accentColor: string;
  textColor: string;
  borderColor: string;
  borderActive: string;
}

export const darkTheme: Theme = {
  accentColor: "#ffcc00",
  backgroundColor: "#1a1a1a",
  backgroundActive: "#2b2b2b",
  textColor: "#fff",
  borderColor: "#2b2b2b",
  borderActive: "#504e4e",
};

export const lightTheme: Theme = {
  accentColor: "#ffcc00",
  backgroundColor: "#1a1a1a",
  backgroundActive: "#2b2b2b",
  textColor: "#fff",
  borderColor: "#2b2b2b",
  borderActive: "#504e4e",
};

export const themes: Theme[] = [darkTheme, lightTheme];

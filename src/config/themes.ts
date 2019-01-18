export interface Theme {
  backgroundColor: string;
  backgroundActive: string;
  accentColor: string;
  textColor: string;
  tileColor: string;
  borderColor: string;
  borderActive: string;
}

const darkTheme: Theme = {
  accentColor: "#ffcc00",
  backgroundColor: "#1a1a1a",
  backgroundActive: "#2b2b2b",
  textColor: "#fff",
  tileColor: "#fff",
  borderColor: "#2b2b2b",
  borderActive: "#504e4e",
};

const lightTheme: Theme = {
  accentColor: "#026cee",
  backgroundColor: "#fff",
  backgroundActive: "#e5e5e5",
  textColor: "#1a1a1a",
  tileColor: "#1a1a1a",
  borderColor: "#f6f6f6",
  borderActive: "#e5e5e5",
};

export const themes: Theme[] = [darkTheme, lightTheme];

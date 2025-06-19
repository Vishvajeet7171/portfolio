export interface Colors {
  primary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  secondary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  accent: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  background: {
    light: string;
    dark: string;
  };
  surface: {
    light: string;
    dark: string;
  };
  text: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  border: {
    light: string;
    dark: string;
  };
}

export const colors: Colors;

export interface TailwindConfig {
  content: string[];
  darkMode: string;
  theme: {
    extend: {
      colors: Colors;
    };
  };
  plugins: any[];
}

declare const config: TailwindConfig;
export default config;

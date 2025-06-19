// tailwind.config.js
export const colors = {
  primary: {
    light: '#FF9A8B',
    DEFAULT: '#FF6F61',
    dark: '#D94F45',
  },
  secondary: {
    light: '#FFD3B6',
    DEFAULT: '#FFB88C',
    dark: '#CC8A6B',
  },
  accent: {
    light: '#6A82FB',
    DEFAULT: '#4A69FF',
    dark: '#2E3AA1',
  },
  background: {
    light: '#F9FAFB',
    dark: '#0F172A',
  },
  surface: {
    light: '#F9FAFB',
    dark: '#2C2C54',
  },
  text: {
    light: '#2C2C54',
    DEFAULT: '#4A4A6A',
    dark: '#E0E0E0',
  },
  border: {
    light: '#E6E6FA',
    dark: '#55557A',
  },
  highlight: {
    light: '#FF6F61',
    dark: '#D94F45',
  },
};

const tailwindConfig = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};

export default tailwindConfig;

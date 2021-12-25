module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-bg": "#f6f8fa",
        "white-brd": "#d8dee4",
        "blue-primary": "#27abe2",
        "blue-secondary": "#a5d1e8",
        "blue-primary-hv": "#1b94c7",
        "blue-primary-at": "#1883af",
        "green-primary": "#00c585",
      },
    },
  },
  plugins: [],
};

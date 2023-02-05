/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-yellow": "#F2CD5C",
        "very-dark-grey": "#434242",
        "light-grey-lime": "#EAEBEA",
        "very-light-grey": "#757575",
        "very-dark-white": "#D9F0FF",
        "dark-cyan": "#6F99FF",
        "very-dark-cyan": "#1E948A",
        "status-good": "#009966",
        "status-moderate": "#FFDE33",
        "status-ufsg": "#FF9933",
        "status-unhealthy": "#CC0033",
        "status-vu": "#660099",
        "status-hazardous": "#7E0023",
        "status-undefined": "#6c757d",
      },
    },
  },
  plugins: [],
};

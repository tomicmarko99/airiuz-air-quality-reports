/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2D65E9",
        "medium-blue": "#3770F3",
        "soft-blue": "#6F99FF",
        "soft-yellow": "#FCD54B",
        "light-yellow": "#ffdd75",
        "very-dark-grey": "#434242",
        "light-grey-lime": "#EAEBEA",
        "very-light-grey": "#757575",
        "medium-grey": "#D1D1D1",
        "very-dark-white": "#F5F5F5",
        "bgr-white": "#F2F3F0",
        "glass-black": "rgba(0,0,0,.1)",
        "status-good": "#B7E57C",
        "status-moderate": "#FCD54B",
        "status-ufsg": "#FF9B57",
        "status-unhealthy": "#FE6A69",
        "status-vu": "#A97ABC",
        "status-hazardous": "#A87383",
        "status-undefined": "#6c757d",
      },
    },
  },
  plugins: [],
};

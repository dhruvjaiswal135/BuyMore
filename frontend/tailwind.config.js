// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max': '340px'},
      'xs': {'max': '480px'},
      'sm': {'max': '576px'},
      'md': {'max': '768px'},
      'md-lg': {'max': '991px'},
      'lg': {'max': '1080px'},
      'xl': {'max': '1200px'},
      
      // ✅ Add min-width based breakpoints for correct visibility
      'min-md-lg': '992px',
    },
  },
  plugins: [],
};

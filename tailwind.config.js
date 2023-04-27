module.exports = {
    darkMode: 'class',
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens:{
          'other':{'min': '300px', 'max': '1200px'}
        }
      },
    },
    plugins: [],
  }
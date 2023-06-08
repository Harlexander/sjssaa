module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    colors : {
      pry : "#E8A902",
    },
    fontFamily : {
      'nunito' : ['Nunito', 'sans-serif'],
      'montserrat' : ['Montserrat', 'sans-serif'],
      'primary' : ['DM Serif Display', 'sans-serif'],
      'figtree' : ['figtree', 'sans-serif'],
      'manrope' : ['manrope', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin') ,
    require('tw-elements/dist/plugin')
  ] 
}


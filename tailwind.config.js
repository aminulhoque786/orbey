/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/banner.png')",
        'hero-2': "url('assets/tui.avif')", 
        'hero-3': "url('assets/headphone.jpg')",
        'bg-1':"url('assets/banner.png')",
        'bg-2': "url('assets/banner2.png')",
        'bg-3':"url('assets/banner3.png')",
        'bg-4':"url('assets/banner4.png')",
        'luika':"url('assets/luika.png')",
        'ghori':"url('assets/ghori.jpg')",
        'bilai':"url('assets/bilai.jpg)",
        'jhuri':"url('assets/jhuri.jpg')",
        'ghor':"url('assets/uju.jpg')"

      },
      fontFamily:{
        "dm":("DM Sans","sans-serif")
      }
    },
  },
  plugins: [],
}
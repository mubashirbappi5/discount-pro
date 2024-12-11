/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        coupon:"url('https://i.ibb.co.com/RPJvyQ5/Brown-and-White-Minimalist-Beauty-Gift-Coupon-2-2.png')"
      }
    },
  },
  plugins: [require('daisyui'),],
}


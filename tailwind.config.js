/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{,js,jsx,ts,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

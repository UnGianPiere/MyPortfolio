// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'from-[#38bdf8]',
        'from-[#61dafb]',
        'from-[#f7df1e]',
    ],
    theme: { extend: {} },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,vue,ts}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    500: '#0282FA',
                },
            },
        },
    },
    plugins: [],
}

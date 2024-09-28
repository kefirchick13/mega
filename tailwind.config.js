/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,vue,ts}'],
    theme: {
        extend: {
            colors: {
                'primary-text-color': 'var(text__light-primary)',
                'secondary-text-color': 'var(text__light-secondary)',
            },
        },
    },
    plugins: [],
}

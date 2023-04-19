// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        extend: {
            boxShadow: {
                round: '0 0 20px rgba(0,0,0,0.6)',
            },
        },
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require('@tailwindcss/custom-forms')],
}

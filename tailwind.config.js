// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        extend: {
            boxShadow: {
                round: '5px 5px 5px rgba(0,0,0,0.1)',
            },
        },
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require('@tailwindcss/custom-forms')],
}

import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addComponents }) {
    addComponents({
        '.button': {
            '@apply py-0.5 px-1': {},
            '@apply row-center space-x-0.5': {},
            '@apply bg-dark-500 rounded': {},
            '@apply text-white': {},

            '.button__label': {
                '@apply font-medium text-sm': {},
            },
        },

        '.button--outline': {
            '@apply bg-white border-2 border-dark-500 rounded': {},
            '@apply hover:bg-dark-500 hover:text-white': {},
        },
    })
})

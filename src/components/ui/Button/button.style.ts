import plugin from 'tailwindcss/plugin'

export const button = plugin(function ({ addComponents }) {
    addComponents({
        '.button': {
            '@apply py-0.5 px-1': {},
            '@apply flex items-center space-x-0.5': {},
            '@apply border-2 border-dark-500 rounded': {},
            '@apply hover:bg-dark-500 hover:text-white': {},

            '&__label': {
                '@apply text-sm font-semibold': {},
            },
        },
    })
})

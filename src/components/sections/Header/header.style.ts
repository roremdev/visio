import plugin from 'tailwindcss/plugin'

export const header = plugin(function ({ addBase }) {
    addBase({
        '.header': {
            '@apply h-5 relative': {},
            '@apply py-1 px-3': {},
            '@apply row-center-between': {},
            '@apply bg-white border-b border-light-700': {},

            '.header__content': {
                '@apply row-center-between gap-0.5': {},

                '.header__logo': {
                    '@apply w-4 h-4': {},
                    '@apply bg-logo': {},
                },

                '.header__headline': {
                    '@apply text-2xl font-medium': {},
                },
            },
        },
    })
})

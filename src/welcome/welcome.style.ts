import plugin from 'tailwindcss/plugin'

export const home = plugin(function ({ addBase }) {
    addBase({
        '.welcome': {
            '@apply w-full h-full': {},
            '@apply grid-center-start': {},
            '@apply text-light-400': {},

            '.welcome__content': {
                '@apply w-full h-full': {},
                '@apply bg-dots-pattern': {},
            },
        },
    })
})

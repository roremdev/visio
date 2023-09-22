import plugin from 'tailwindcss/plugin';

export const home = plugin(function ({addBase}) {
    addBase({
        '.welcome': {
            '@apply w-full h-full': {},
            '@apply p-3': {},
            '@apply grid-center-start': {},
            '@apply bg-dark-500': {},
            '@apply text-light-400': {},

            '.welcome__content': {
                '@apply column gap-1': {},

                '.welcome__logo': {
                    '@apply w-5 h-5': {},
                },

                '.welcome__headline': {
                    '@apply text-5xl font-semibold': {},
                }
            }
        }
    })
})
import plugin from 'tailwindcss/plugin'

export const toast = plugin(function ({ addComponents }) {
    addComponents({
        '.toast': {
            '@apply absolute right-3': {},
            '@apply w-[360px]': {},
            '@apply p-1': {},
            '@apply bg-white shadow': {},
            '@apply border border-light-700 rounded': {},
            '@apply text-sm': {},
            '@apply opacity-100 translate-y-0': {},
            '@apply transition-toast--hide duration-300 ease-in': {},

            '.toast__container': {
                '@apply relative': {},
                '@apply column gap-0.5': {},

                '.toast__button': {
                    '@apply absolute right-0.5': {},
                    '@apply w-[14px] h-[14px]': {},
                    '@apply cursor-pointer': {},

                    '.toast__icon': {
                        '@apply text-light-700 hover:text-dark-300': {},
                        '@apply transition-colors duration-300': {},
                    },
                },

                '.toast__title': {
                    '@apply font-medium': {},
                },
                '.toast__message': {
                    '@apply text-dark-400': {},
                },
            },
        },

        '.toast--hide': {
            '@apply opacity-0 -translate-y-[50px]': {},
        },
    })
})

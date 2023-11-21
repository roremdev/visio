import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addComponents }) {
    addComponents({
        '.field': {
            '@apply h-[66px]': {},
            '@apply column space-y-0.5': {},

            '.field__wrapper': {
                '@apply relative': {},

                '.field__input': {
                    '@apply w-full': {},
                    '@apply py-0.5 px-1': {},
                    '@apply text-base': {},
                    '@apply cursor-pointer': {},
                    '@apply rounded border-2 border-dark-200': {},
                    '@apply focus:outline-none focus:border-dark-500': {},
                    '@apply transition-colors duration-300': {},

                    '&:focus + label': {
                        '@apply top-[-12px]': {},
                        '@apply text-sm text-dark-500': {},
                    },
                    '&:not(:placeholder-shown) + label': {
                        '@apply top-[-12px]': {},
                        '@apply text-sm': {},
                    },

                    '&.field__input--invalid': {
                        '@apply border-red-500': {},
                    },
                },
            },

            '.field__label': {
                '@apply absolute left-1 top-0.5': {},
                '@apply px-0.25': {},
                '@apply bg-white': {},
                '@apply cursor-pointer': {},
                '@apply text-base text-dark-300': {},
                '@apply transition-all duration-300': {},

                '&.field__label--invalid': {
                    '@apply text-red-500': {},
                },
            },

            '.field__helper': {
                '@apply px-0.5': {},
                '@apply text-sm text-red-500': {},
                '@apply transition-opacity duration-300': {},
            },
        },
    })
})

import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addComponents }) {
    addComponents({
        '.form': {
            '@apply h-fit w-full md:max-w-[468px]': {},
            '@apply py-3 px-4': {},
            '@apply column': {},
            '@apply bg-white rounded-lg shadow': {},

            '.form__header': {
                '.form__title': {
                    '@apply text-title-large': {},
                },
            },

            '.form__body': {
                '@apply mt-2': {},
                '@apply column gap-0.5': {},
            },

            '.form__footer': {
                '@apply mt-0.5': {},
                '@apply column gap-0.5': {},

                '.form__helper': {
                    '@apply px-0.5': {},
                    '@apply text-sm text-red-500': {},
                    '@apply transition-opacity duration-300': {},
                },
            },
        },
    })
})

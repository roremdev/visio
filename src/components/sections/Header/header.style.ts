import plugin from 'tailwindcss/plugin';

export const header = plugin(function ({addBase}) {
    addBase({
        '.header': {
            '@apply h-7 relative': {},
            '@apply py-1 px-3': {},
            '@apply row-center-between': {},
            '@apply bg-white border-b-2 border-light-500': {},

            '&__headline': {
                '@apply text-4xl font-bold': {},
            },
        }
    })
});
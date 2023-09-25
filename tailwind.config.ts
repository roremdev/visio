/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

import { header } from './src/components/sections/Header/header.style'

import { button } from './src/components/ui/Button/button.style'
import { toast } from './src/components/ui/Toast/toast.style'

import { home } from './src/welcome/welcome.style'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        boxShadow: {
            DEFAULT: '0px 4px 12px #959DA533',
        },
        colors: {
            dark: {
                200: '#8F9BB3',
                300: '#6E798C',
                400: '#4C566A',
                500: '#3B4252',
                600: '#2E3440',
            },
            light: {
                200: '#F8F9FB',
                300: '#F2F4F8',
                400: '#ECEFF4',
                500: '#E5E9F0',
                600: '#D8DEE9',
                700: '#C0CCDA',
            },
            white: '#FFFFFF',
        },
        extend: {
            backgroundImage: {
                // Brand
                logo: 'url("/assets/brand/logo.svg")',

                // Icons
                x: 'url("/assets/icons/x.svg")',

                // Backgrounds patters
                'dots-pattern': 'url("/assets/images/dots-pattern.svg")',
            },
            transitionProperty: {
                'toast--hide': 'opacity, transform',
            },
        },
        fontFamily: {
            ubuntu: ['Ubuntu', 'sans-serif'],
        },
        spacing: {
            0: '0px',
            0.25: '3px',
            0.5: '6px',
            1: '12px',
            2: '24px',
            3: '36px',
            4: '48px',
            5: '60px',
            6: '72px',
            7: '84px',
            8: '96px',
            9: '108px',
            10: '120px',
        },
    },
    plugins: [
        // UI Components
        button,
        toast,

        // Section Components
        header,

        // Modules
        home,

        // Theme Presets
        plugin(function ({ addBase, addUtilities }) {
            // Generic Elements
            addBase({
                body: {
                    '@apply h-screen': {},
                    '@apply mx-auto': {},
                    '@apply font-ubuntu text-dark-500': {},

                    'div#root': {
                        '@apply w-full h-full': {},
                    },
                },
            })

            // Utilities
            addUtilities({
                '.grid-center-start': {
                    '@apply grid items-center': {},
                },

                '.row': {
                    '@apply flex': {},

                    '&-center-start': {
                        '@apply flex items-center': {},
                    },

                    '&-center': {
                        '@apply flex items-center justify-center': {},
                    },

                    '&-center-between': {
                        '@apply flex items-center justify-between': {},
                    },
                },

                '.column': {
                    '@apply flex flex-col': {},
                },
            })
        }),
    ],
}

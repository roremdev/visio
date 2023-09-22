/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

import {header} from './src/components/sections/Header/header.style'
import {button} from './src/components/ui/Button/button.style'

import {home} from './src/Welcome/welcome.style'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        boxShadow: {
            DEFAULT: '0px 8px 24px #959DA533',
        },
        colors: {
            dark: {
                300: '#6E798C',
                500: '#2E3440'
            },
            light: {
                400: '#F8F9FB',
                500: '#D8DEE9',
                600: '#a4b1c5'
            },
            white: '#FFFFFF'
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif']
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

        // Section Components
        header,

        // Modules
        home,

        // Theme Presets
        plugin(function ({addBase, addUtilities}) {
            // Generic Elements
            addBase({
                body: {
                    '@apply h-screen': {},
                    '@apply mx-auto': {},
                    '@apply font-roboto text-dark-500': {},

                    'div#root': {
                        '@apply w-full h-full': {}
                    }
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
                        '@apply items-center': {},
                    },

                    '&-center': {
                        '@apply items-center justify-center': {},
                    },

                    '&-center-between': {
                        '@apply items-center justify-between': {},
                    },
                },

                '.column': {
                    '@apply flex flex-col': {},
                },
            })
        })
    ],
}
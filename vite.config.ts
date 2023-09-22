import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': resolve(__dirname, '/src/components'),
            '@layouts': resolve(__dirname, '/src/layouts'),

            // Module aliases
            '@welcome': resolve(__dirname, '/src/welcome'),
        },
    },
})

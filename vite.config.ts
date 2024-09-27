import { defineConfig } from 'vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        svgLoader(),
        tsconfigPaths(),
        quasar(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
})

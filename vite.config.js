import {defineConfig} from 'vite'
import {createVuePlugin as vue} from 'vite-plugin-vue2'

const path = require("path")

export default defineConfig({
    plugins:[vue()],
    resolve: {
        // alias:{
        //     "@" : Path.resolve(__dirname.at, "./src")
        // }
        extensions:
            ['.mjs', '.js', '.ts', 'jsx', '.tsx', '.json', '.vue']
        
    }
})
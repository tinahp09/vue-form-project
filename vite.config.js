import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json','.vue'],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    'process.env': {}
  }
})
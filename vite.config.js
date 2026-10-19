import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))
const year = new Date().getFullYear()

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'StringFilters',
      fileName: pkg.name
    }
  },
  plugins: [
    banner(
      `\n * String Filters v${pkg.version}` +
      `\n * Homepage (${pkg.homepage})` +
      `\n * Copyright ${year} ${pkg.author}` +
      `\n * License: ${pkg.license}\n`
    )
  ]
})
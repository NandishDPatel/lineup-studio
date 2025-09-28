// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}'
        ],
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              heading: ['Playfair Display', 'serif']
            }
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
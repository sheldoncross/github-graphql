import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: [
        ['@emotion/babel-plugin', { sourceMap: true }],
      ],
    },
  })],
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/backend/server.ts',
      formats: ['es'],
      fileName: 'server',
    },
    rollupOptions: {
      external: ['express', 'apollo-server-express', '@apollo/server', 'graphql', 'node-fetch', 'node-cache']
    }
  },
})

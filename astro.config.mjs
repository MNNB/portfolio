// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['three']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});

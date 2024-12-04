import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const sha = env.TRANSPILE_SHA;
  const entry = env.TRANSPILE_ENTRY;
  const dest = env.TRANSPILE_DEST;
  return {
    server: {
      hmr: true,
      port: 8080
    },
    plugins: [
      vue(),
      checker({ vueTsc: true }),
      // Sørger for CSS og JS samles i en fil, da der ikke var native vite funktionalitet
      cssInjectedByJsPlugin()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/global.scss";'
        }
      }
    },
    build: {
      outDir: dest,
      minify: true,
      lib: {
        formats: ['umd'],
        entry: entry,
        name: sha,
        fileName: sha
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  };
});

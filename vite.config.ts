import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { viteRequire } from 'vite-require';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const sha = env.TRANSPILE_SHA;
  const entry = env.TRANSPILE_ENTRY;
  const dest = env.TRANSPILE_DEST;
  return {
    plugins: [
      vue(),
      viteRequire(),
      // Sørger for CSS og JS samles i en fil, da der ikke var native vite funktionalitet
      cssInjectedByJsPlugin()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/global.scss";
          `
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~': resolve(__dirname, './tests')
      }
    },
    define: {
      //https://github.com/vitejs/vite/issues/1973
      'process.env': process.env
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

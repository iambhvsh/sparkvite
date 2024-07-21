// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html')
      }
    }
  },
  server: {
    // Custom rewrites to map the routes
    configureServer: ({ middlewares }) => {
      middlewares.use((req, res, next) => {
        if (req.url === '/about') {
          req.url = '/pages/about.html';
        } else if (req.url === '/contact') {
          req.url = '/pages/contact.html';
        }
        next();
      });
    }
  }
});

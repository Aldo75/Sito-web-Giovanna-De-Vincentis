import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

// Plugin to serve partner SVG logos with image/svg+xml even when requested as .jpeg/.png
function partnerLogosPlugin(): Plugin {
  return {
    name: 'partner-logos-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.match(/^\/Logo\d+\.(jpeg|jpg|png|svg)/i)) {
          const filename = req.url.slice(1).split('?')[0];
          const svgFile = filename.replace(/\.(jpeg|jpg|png)$/i, '.svg');
          const filePath = path.resolve(__dirname, 'public', svgFile);
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'image/svg+xml');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), partnerLogosPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/data': path.resolve(__dirname, './src/data'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

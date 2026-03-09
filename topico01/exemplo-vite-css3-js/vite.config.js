import { resolve } from 'path'
import { defineConfig } from 'vite';

function customWatcher(options) {
    return {
      name: 'custom-watcher',
      configureServer(server) {
        options.filePaths.forEach((f) => {
          server.watcher.add(f);
        });
        function onWatchChange(_) {
          server.hot.send({ type: 'full-reload' });
        }
        server.watcher.on('add', onWatchChange);
        server.watcher.on('unlink', onWatchChange);
        server.watcher.on('change', onWatchChange);
      },
    };
  }

export default defineConfig ({
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    pages_flex_01: resolve(__dirname, 'exemplo-01-02/pages/flex-01.html'),
                    pages_grid_01: resolve(__dirname, 'exemplo-01-02/pages/grid-01.html'),
                },
            },
        },
        plugins:[
            customWatcher({ filePaths: ['./public/styles/exemplo-01-02/flex01.css'] })
        ],
    })
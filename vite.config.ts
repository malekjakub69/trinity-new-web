import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react-swc';
import path from "path";
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');

    const basenamePrefix = env.VITE_FE_BASENAME_PREFIX;
    return {
        plugins: [react(), viteTsconfigPaths()],
        resolve: {
            alias: {
              "@": path.resolve(__dirname, "./src"),
            },
          },
        server: {
            port: 3000,
            base: basenamePrefix || '/'
        },  
    };
});

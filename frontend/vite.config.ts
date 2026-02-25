import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

interface ApiProxyConfig extends ProxyOptions {
  target: string;
  changeOrigin: boolean;
  rewrite: (path: string) => string;
}

interface ServerConfig {
  proxy: {
    [key: string]: ApiProxyConfig;
  };
}

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://midas-touch-new.vercel.app/api",
        changeOrigin: true,
        rewrite: (path: string): string => path.replace(/^\/api/, ""),
      },
    },
  } as ServerConfig,
});

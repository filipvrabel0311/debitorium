import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // ...existing code...
  },
  server: {
    // ...existing code...
  },
  define: {
    "process.env": {
      VITE_APP_TITLE: "Debitorium",
      VITE_APP_DESCRIPTION: "Debitorium",
    },
  },
});

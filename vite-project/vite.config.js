// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Указываем, что корень проекта — это текущая папка
  build: {
    outDir: "dist", // Папка для вывода сборки
  },
});

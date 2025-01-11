import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Путь к корню проекта (где находится index.html)
  build: {
    outDir: "dist", // Папка для вывода сборки
  },
});

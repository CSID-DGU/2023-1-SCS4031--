import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react'
import * as path from "path";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  // process에서 타입에러가 뜨게된다.
  // @type/node를 설치해주자
  return {
    base: './',
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_ID,
          }
        }
      }),
    ],
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        {
          find: "@public",
          replacement: path.resolve(__dirname, "public"),
        },
      ],
    }
  }
}

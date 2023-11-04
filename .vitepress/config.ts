import path from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "rash.codes",
  description: "Hi, I'm rash!",
  vite: {
    build: {
      target: 'esnext'
    }
  }
})

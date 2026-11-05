import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The resume link only points at /resume.pdf when the file actually ships.
// Without it, the link falls back to an email request, so it is never broken.
const resumeAvailable = existsSync(
  fileURLToPath(new URL('./public/resume.pdf', import.meta.url)),
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __RESUME_AVAILABLE__: JSON.stringify(resumeAvailable),
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: base '/' is correct for a user site repo named
// lankavenkatayagnesh.github.io (the site lives at the domain root).
// If you deploy from a PROJECT repo instead (e.g. username.github.io/portfolio),
// change base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

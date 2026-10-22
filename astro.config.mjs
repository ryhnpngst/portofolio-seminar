// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/refleksi/filosofi-pendidikan': '/refleksi/filosofi-pendidikan-dan-pendidikan-nilai',
    '/refleksi/pemahaman-peserta-didik': '/refleksi/pemahaman-tentang-peserta-didik-dan-pembelajarannya',
    '/refleksi/prinsip-pengajaran-asesmen': '/refleksi/pembelajaran-mendalam-dan-asesmen-dasar-smk',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
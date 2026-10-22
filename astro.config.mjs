// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/refleksi/filosofi-pendidikan': '/refleksi/filosofi-pendidikan-dan-pendidikan-nilai',
    '/refleksi/pemahaman-peserta-didik': '/refleksi/pemahaman-tentang-peserta-didik-dan-pembelajarannya',
    '/refleksi/prinsip-pengajaran-asesmen': '/refleksi/pembelajaran-mendalam-dan-asesmen-dasar-smk',
    '/refleksi-ppg': '/refleksi/refleksi-ppg',
    '/ppl': '/refleksi-ppg',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
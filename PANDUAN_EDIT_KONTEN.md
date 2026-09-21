# Panduan Mengubah Konten dan Gambar (Beranda, Tentang Saya, & Perjalanan PPG)

Dokumen ini menjadi panduan praktis untuk memudahkan Anda memperbarui foto, gambar, teks, data profil, dan konten lainnya pada:

- **Halaman Beranda (`/`)**
- **Halaman Tentang Saya (`/tentang`)**
- **Halaman Perjalanan PPG (`/perjalanan`)**

---

## 1. Lokasi Mengubah Gambar

Seluruh aset gambar statis disimpan di dalam folder:

```text
public/images/
```

Untuk mengganti gambar, Anda cukup menimpa (_overwrite_) file gambar yang ada dengan nama file yang sama, atau memasukkan file baru dan memperbarui _path_ lokasinya di file data.

| Gambar                | Lokasi File Saat Ini                                    | Tempat Ditampilkan                                                                                              | Rekomendasi Ukuran / Rasio                                        |
| :-------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **Foto Profil Utama** | `public/images/profile/profile.jpg`                     | • Hero Beranda<br>• Hero Tentang Saya<br>• Kartu Refleksi Akhir (Perjalanan)<br>• Open Graph (Thumbnail medsos) | Rasio **4:5** atau **3:4** (misal: 1200×1500 px atau 800×1000 px) |
| **Dokumentasi PPL**   | `public/images/ppl/praktik-mengajar.jpg`                | • Seksi Pengalaman PPL (Beranda)<br>• Kartu PPL Terbimbing (Perjalanan)                                         | Rasio **4:3** atau **16:9** (misal: 1200×900 px)                  |
| **Refleksi 1**        | `public/images/reflections/filosofi-pendidikan.jpg`     | • Kartu Filosofi Pendidikan (Beranda)<br>• Kartu Semester 1 (Perjalanan)                                        | Rasio **16:9** (misal: 1280×720 px)                               |
| **Refleksi 2**        | `public/images/reflections/pemahaman-peserta-didik.jpg` | • Kartu Pemahaman Peserta Didik (Beranda)                                                                       | Rasio **16:9** (misal: 1280×720 px)                               |
| **Refleksi 3**        | `public/images/reflections/prinsip-pengajaran.jpg`      | • Kartu Prinsip Pengajaran & Asesmen (Beranda)                                                                  | Rasio **16:9** (misal: 1280×720 px)                               |
| **Karya 1**           | `public/images/works/modul-ajar.jpg`                    | • Kartu Modul Ajar (Beranda)<br>• Kartu PPL Mandiri (Perjalanan)                                                | Rasio **16:9** (misal: 1280×720 px)                               |
| **Karya 2**           | `public/images/works/lkpd-algoritma.jpg`                | • Kartu LKPD Interaktif (Beranda)                                                                               | Rasio **16:9** (misal: 1280×720 px)                               |
| **Karya 3**           | `public/images/works/media-interaktif.jpg`              | • Kartu Media Pembelajaran Web (Beranda)<br>• Kartu Semester 2 (Perjalanan)                                     | Rasio **16:9** (misal: 1280×720 px)                               |

> [!TIP]
> Format gambar yang disarankan adalah **JPG**, **PNG**, atau **WebP**. Pastikan ukuran file gambar dikompresi (idealnya di bawah 300 KB per gambar) agar website dimuat dengan cepat.

---

## 2. Lokasi Mengubah Konten Teks & Data (Data Layer)

Sesuai arsitektur proyek, sebagian besar teks dipisahkan dari tampilan antarmuka. Anda dapat mengubah konten utama hanya dengan mengedit file di folder `src/data/`:

### A. Data Profil, Pendidikan, Filosofi, dan Pengalaman

📁 File: **[`src/data/profile.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/profile.ts)**

Di file ini Anda dapat mengubah:

1. **Identitas Diri**:
   - `name`: Nama lengkap ("Rayhan Pangestu Wibowo")
   - `shortName`: Nama panggilan di logo Navbar ("Rayhan")
   - `role`: Status ("Mahasiswa PPG Calon Guru")
   - `field`: Bidang studi ("Informatika")
   - `location`: Lokasi/domisili
   - `shortBio`: Deskripsi pengantar pada Hero Beranda
   - `bio`: Bio lengkap pada Halaman Tentang Saya
2. **Statistik Perjalanan (Stats)**:
   - `stats.semesters`: Jumlah semester (2)
   - `stats.courses`: Jumlah mata kuliah (10)
   - `stats.reflections`: Jumlah refleksi (10)
   - `stats.works`: Jumlah karya (6)
3. **Kutipan Filosofi Mengajar**:
   - `philosophy.quote`: Kalimat kutipan filosofi yang tampil di Beranda
   - `philosophy.author`: Nama pembuat kutipan
4. **Tautan Sosial & Kontak**:
   - `socialLinks.github`: URL profil GitHub
   - `socialLinks.linkedin`: URL profil LinkedIn
   - `socialLinks.email`: Alamat email (`mailto:nama@email.com`)
5. **Riwayat Pendidikan (Halaman Tentang Saya)**:
   - Array `education`: Gelar, nama kampus/institusi, periode tahun, dan deskripsi singkat.
6. **Pengalaman Mengajar & PPL (Halaman Tentang Saya)**:
   - Array `teachingExperience`: Peran, sekolah mitra/institusi, periode, deskripsi tugas, dan poin-poin pencapaian (`highlights`).
7. **Cerita Perjalanan Menjadi Guru (Halaman Tentang Saya)**:
   - `journeyStory.title`: Judul cerita
   - `journeyStory.paragraphs`: Paragraf 1, 2, dan 3 narasi motivasi dan titik balik menjadi pendidik.
8. **Empat Pilar Filosofi Mengajar (Halaman Tentang Saya)**:
   - Array `philosophyTenets`: Judul pilar, headline, dan elaborasi detail untuk:
     - _01. Peran Guru sebagai Penuntun_
     - _02. Pembelajaran Berpihak pada Murid_
     - _03. Teknologi sebagai Pengungkit_
     - _04. Pembelajaran yang Bermakna_
9. **Minat & Fokus Keahlian (Halaman Tentang Saya)**:
   - Array `interests`: Judul dan deskripsi 4 bidang minat (Computational Thinking, Pembelajaran Berdiferensiasi, Media Web, Kurikulum Merdeka).

---

### B. Konten Pilihan di Beranda (Refleksi, Karya, & PPL)

📁 File: **[`src/data/featured.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/featured.ts)**

Di file ini Anda dapat mengubah:

1. **Refleksi Pilihan (`featuredReflections`)**:
   - Judul mata kuliah
   - Semester (1 atau 2)
   - Deskripsi ringkas refleksi
   - Tag kata kunci
   - Gambar thumbnail yang digunakan
2. **Karya Pilihan (`featuredWorks`)**:
   - Judul karya inovasi
   - Kategori (`Modul Ajar`, `LKPD`, `Media Pembelajaran`, `Projek`)
   - Deskripsi ringkas karya
   - Tag teknologi / metode
   - Link internal atau URL eksternal demo karya
3. **Sorotan PPL (`pplHighlight`)**:
   - Judul & subjudul seksi PPL
   - Deskripsi pengalaman praktik di sekolah mitra
   - Angka statistik (`1 Sekolah Mitra`, `100+ Jam Praktik`, `4 Siklus Pembelajaran`)

---

### C. Timeline & Detail Tahapan Perjalanan PPG

📁 File: **[`src/data/journey.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/journey.ts)**

Di file ini Anda dapat mengubah seluruh data tahapan PPG untuk seksi timeline di Beranda dan **Halaman Perjalanan (`/perjalanan`)**:

- `stepNumber`: Urutan langkah (1 s.d. 5)
- `title`: Nama tahapan (`Semester 1`, `PPL Terbimbing`, `Semester 2`, `PPL Mandiri`, `Refleksi Akhir`)
- `stage`: Subjudul tahapan (misal: "Fondasi Pedagogik & Teori Pembelajaran")
- `period`: Keterangan waktu (misal: "Semester Ganjil", "PPL I", dll.)
- `badge`: Label kategori penanda
- `description`: Deskripsi singkat untuk timeline ringkas di Beranda
- `fullDescription`: Narasi detail untuk Halaman Perjalanan
- `keyExperiences`: Poin-poin pengalaman dan aktivitas utama (tampil sebagai checklist)
- `keyTakeaways`: Teks kutipan _"Pembelajaran Bermakna"_
- `relatedCourses`: Daftar mata kuliah terkait
- `image` & `imageAlt`: File gambar dokumentasi yang ditampilkan di dalam kartu
- `link` & `linkLabel`: Tautan tujuan tombol aksi

---

## 3. Lokasi Mengubah Teks Statis pada Komponen UI

Jika Anda ingin mengubah judul bagian (_heading_), teks tombol CTA, atau teks pengantar langsung pada template komponen:

### A. Halaman Beranda (`/`)

| Bagian / Seksi         | File Komponen                                                                                                                              | Yang Dapat Diubah di File Tersebut                                                    |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Hero**               | [`src/components/home/Hero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/Hero.astro)                               | Teks tombol "Jelajahi Perjalanan Saya", teks badge "PPG CALON GURU", teks strip bawah |
| **Tentang Singkat**    | [`src/components/home/AboutPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/AboutPreview.astro)               | Judul seksi, teks 3 kartu narasi (Latar Belakang, Informatika Kontekstual, Refleksi)  |
| **Statistik**          | [`src/components/home/Stats.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/Stats.astro)                             | Keterangan deskripsi di bawah angka statistik                                         |
| **Timeline PPG**       | [`src/components/home/JourneyPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/JourneyPreview.astro)           | Judul & deskripsi seksi timeline, tombol "Lihat Perjalanan Lengkap"                   |
| **Refleksi Pilihan**   | [`src/components/home/FeaturedReflections.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FeaturedReflections.astro) | Judul & deskripsi seksi refleksi, tombol "Lihat Semua Refleksi"                       |
| **Preview PPL**        | [`src/components/home/PPLPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/PPLPreview.astro)                   | Teks caption foto PPL, tombol "Lihat Perjalanan PPL"                                  |
| **Karya Pilihan**      | [`src/components/home/FeaturedWorks.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FeaturedWorks.astro)             | Judul & deskripsi seksi karya, tombol "Lihat Semua Karya"                             |
| **Filosofi Mengajar**  | [`src/components/home/PhilosophySection.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/PhilosophySection.astro)     | Tampilan seksi quote berlatar hijau gelap                                             |
| **CTA Refleksi Akhir** | [`src/components/home/FinalReflectionCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FinalReflectionCTA.astro)   | Judul banner penutup, deskripsi pengantar, tombol "Baca Refleksi Akhir"               |

---

### B. Halaman Tentang Saya (`/tentang`)

| Bagian / Seksi              | File Komponen                                                                                                                        | Yang Dapat Diubah di File Tersebut                                                        |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| **Hero Profil**             | [`src/components/about/AboutHero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutHero.astro)             | Judul utama ("Mendedikasikan Keilmuan..."), label 4 kotak kredensial cepat, tombol kontak |
| **Cerita Perjalanan**       | [`src/components/about/AboutStory.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutStory.astro)           | Teks kutipan di tengah cerita (_pullquote_), sub-judul seksi                              |
| **Empat Pilar Filosofi**    | [`src/components/about/AboutPhilosophy.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutPhilosophy.astro) | Judul seksi & kalimat pengantar 4 pilar                                                   |
| **Pendidikan & Pengalaman** | [`src/components/about/AboutExperience.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutExperience.astro) | Judul kolom "Riwayat Pendidikan" & "Pengalaman Mengajar & PPL"                            |
| **Minat & Keahlian**        | [`src/components/about/AboutInterests.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutInterests.astro)   | Judul seksi minat & kalimat pengantar                                                     |
| **CTA Navigasi**            | [`src/components/about/AboutCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutCTA.astro)               | Judul ajakan penutup, tombol menuju `/perjalanan` dan `/refleksi`                         |

---

### C. Halaman Perjalanan PPG (`/perjalanan`)

| Bagian / Seksi          | File Komponen                                                                                                                                        | Yang Dapat Diubah di File Tersebut                                                                                    |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Hero Perjalanan**     | [`src/components/journey/JourneyHero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyHero.astro)                     | Judul utama ("Perjalanan Program PPG..."), kalimat pengantar, label 4 kotak metrik (Fase, Semester, Praktik, Penutup) |
| **Detail Timeline**     | [`src/components/journey/JourneyTimelineDetail.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyTimelineDetail.astro) | Judul seksi timeline, tata letak visual kartu, teks pengantar                                                         |
| **Siklus Perkembangan** | [`src/components/journey/JourneyProgression.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyProgression.astro)       | Teks 4 tahapan siklus: _01. Mengalami_, _02. Merefleksikan_, _03. Memperbaiki_, _04. Berkembang_                      |
| **CTA Navigasi**        | [`src/components/journey/JourneyCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyCTA.astro)                       | Judul ajakan penutup, tombol menuju `/refleksi` dan `/ppl`                                                            |

---

### D. Navigasi Atas & Footer

- **Navbar**: [`src/components/common/Navbar.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/common/Navbar.astro)  
  Untuk mengubah tulisan logo atau tombol "Refleksi Akhir" di sudut kanan atas.
- **Footer**: [`src/components/common/Footer.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/common/Footer.astro)  
  Untuk mengubah teks deskripsi footer, informasi instansi PPG, atau teks hak cipta.
- **Metadata SEO Global**: [`src/layouts/Layout.astro`](file:///c:/laragon/www/portofolio-seminar/src/layouts/Layout.astro)  
  Untuk mengubah judul tab browser bawaan (`<title>`) dan deskripsi meta Google.

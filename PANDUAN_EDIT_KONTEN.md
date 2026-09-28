# Panduan Mengubah Konten dan Gambar (Beranda, Tentang Saya, Perjalanan PPG, & Refleksi)

Dokumen ini menjadi panduan praktis untuk memudahkan Anda memperbarui foto, gambar, teks, data profil, dan konten lainnya pada:

- **Halaman Beranda (`/`)**
- **Halaman Tentang Saya (`/tentang`)**
- **Halaman Perjalanan PPG (`/perjalanan`)**
- **Halaman Refleksi Mata Kuliah (`/refleksi` & `/refleksi/[slug]`)**

---

## 1. Lokasi Mengubah Gambar

Seluruh aset gambar statis disimpan di dalam folder:

```text
public/images/
```

Untuk mengganti gambar, Anda cukup menimpa (_overwrite_) file gambar yang ada dengan nama file yang sama, atau memasukkan file baru dan memperbarui _path_ lokasinya di file data atau frontmatter markdown.

| Gambar                | Lokasi File Saat Ini                                    | Tempat Ditampilkan                                                                                              | Rekomendasi Ukuran / Rasio                                        |
| :-------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **Foto Profil Utama** | `public/images/profile/profile.jpg`                     | • Hero Beranda<br>• Hero Tentang Saya<br>• Kartu Refleksi Akhir (Perjalanan)<br>• Open Graph (Thumbnail medsos) | Rasio **4:5** atau **3:4** (misal: 1200×1500 px atau 800×1000 px) |
| **Dokumentasi PPL**   | `public/images/ppl/praktik-mengajar.jpg`                | • Seksi Pengalaman PPL (Beranda)<br>• Kartu PPL Terbimbing (Perjalanan)<br>• Cover Refleksi PPL                 | Rasio **4:3** atau **16:9** (misal: 1200×900 px)                  |
| **Cover Refleksi 1**  | `public/images/reflections/filosofi-pendidikan.jpg`     | • Kartu Filosofi Pendidikan (Beranda & Refleksi)<br>• Halaman Detail Refleksi                                   | Rasio **16:9** (misal: 1280×720 px)                               |
| **Cover Refleksi 2**  | `public/images/reflections/pemahaman-peserta-didik.jpg` | • Kartu Pemahaman Peserta Didik (Beranda & Refleksi)<br>• Halaman Detail Refleksi                               | Rasio **16:9** (misal: 1280×720 px)                               |
| **Cover Refleksi 3**  | `public/images/reflections/prinsip-pengajaran.jpg`      | • Kartu Prinsip Pengajaran & Asesmen (Beranda & Refleksi)<br>• Halaman Detail Refleksi                          | Rasio **16:9** (misal: 1280×720 px)                               |
| **Cover Karya 1**     | `public/images/works/modul-ajar.jpg`                    | • Kartu Modul Ajar (Beranda & Perjalanan)                                                                       | Rasio **16:9** (misal: 1280×720 px)                               |
| **Cover Karya 2**     | `public/images/works/lkpd-algoritma.jpg`                | • Kartu LKPD Interaktif (Beranda)                                                                               | Rasio **16:9** (misal: 1280×720 px)                               |
| **Cover Karya 3**     | `public/images/works/media-interaktif.jpg`              | • Kartu Media Pembelajaran Web (Beranda & Perjalanan)                                                           | Rasio **16:9** (misal: 1280×720 px)                               |

> [!TIP]
> Format gambar yang disarankan adalah **JPG**, **PNG**, atau **WebP**. Pastikan ukuran file gambar dikompresi (idealnya di bawah 300 KB per gambar) agar website dimuat dengan cepat.

---

## 2. Lokasi Mengubah Konten Teks & Data

Sesuai arsitektur proyek, data dipisahkan dari tampilan UI agar mudah diperbarui:

### A. Data Profil, Pendidikan, Filosofi, dan Pengalaman

📁 File: **[`src/data/profile.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/profile.ts)**

Di file ini Anda dapat mengubah:

1. **Identitas Diri**: `name`, `shortName`, `role`, `field`, `location`, `shortBio`, `bio`.
2. **Statistik Perjalanan (Stats)**: `stats.semesters`, `stats.courses`, `stats.reflections`, `stats.works`.
3. **Kutipan Filosofi Mengajar**: `philosophy.quote`, `philosophy.author`.
4. **Tautan Sosial & Kontak**: `socialLinks.github`, `socialLinks.linkedin`, `socialLinks.email`.
5. **Riwayat Pendidikan**: Array `education` (Gelar, institusi, periode, deskripsi).
6. **Pengalaman Mengajar & PPL**: Array `teachingExperience` (Peran, institusi, periode, deskripsi, `highlights`).
7. **Cerita Perjalanan Menjadi Guru**: `journeyStory.title`, `journeyStory.paragraphs`.
8. **Empat Pilar Filosofi Mengajar**: Array `philosophyTenets` (4 pilar lengkap dengan headline & elaborasi).
9. **Minat & Fokus Keahlian**: Array `interests` (4 bidang minat).

---

### B. Konten Pilihan di Beranda (Refleksi, Karya, & PPL)

📁 File: **[`src/data/featured.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/featured.ts)**

Di file ini Anda dapat mengubah:

1. **Refleksi Pilihan (`featuredReflections`)**: 3 kartu refleksi unggulan di Beranda.
2. **Karya Pilihan (`featuredWorks`)**: 3 kartu karya inovasi di Beranda.
3. **Sorotan PPL (`pplHighlight`)**: Judul, narasi, dan 3 angka statistik PPL di Beranda.

---

### C. Timeline & Detail Tahapan Perjalanan PPG

📁 File: **[`src/data/journey.ts`](file:///c:/laragon/www/portofolio-seminar/src/data/journey.ts)**

Di file ini Anda dapat mengubah seluruh data 5 tahapan PPG untuk Beranda dan Halaman Perjalanan:

- `stepNumber`, `title`, `stage`, `period`, `badge`
- `description`: Deskripsi ringkas untuk Beranda
- `fullDescription`: Narasi detail untuk Halaman Perjalanan
- `keyExperiences`: Poin-poin pengalaman utama (checklist)
- `keyTakeaways`: Kutipan _"Pembelajaran Bermakna"_
- `relatedCourses`: Mata kuliah / fokus terkait
- `image` & `imageAlt`: Dokumentasi foto
- `link` & `linkLabel`: Tombol aksi

---

### D. Konten Refleksi Mata Kuliah (Astro Content Collections)

📁 Folder: **`src/content/reflections/`**

Koleksi refleksi dikelompokkan dalam subfolder:

```text
src/content/reflections/
├── semester-1/
│   ├── filosofi-pendidikan-dan-pendidikan-nilai.md
│   ├── growth-mindset.md
│   ├── pemahaman-tentang-peserta-didik-dan-pembelajarannya.md
│   ├── pembelajaran-kreatif-inovatif.md
│   ├── pembelajaran-mendalam-dan-asesmen-dasar-smk.md
│   └── ppl-terbimbing.md
└── semester-2/
    ├── pembelajaran-mendalam-dan-asesmen-lanjut.md
    ├── pembelajaran-sosial-emosional.md
    ├── pengembangan-keprofesian-berkelanjutan.md
    ├── ppl-mandiri.md
    └── projek-kepemimpinan.md
```

#### Struktur Setiap File Markdown Refleksi:

Setiap file diawali dengan YAML frontmatter:

```yaml
---
title: "Nama Mata Kuliah Lengkap"
shortTitle: "Nama Singkat (opsional untuk breadcrumb)"
semester: 1 # atau 2
description: "Ringkasan refleksi 1-2 kalimat untuk kartu dan SEO"
order: 1 # urutan kemunculan di daftar
published: true # true untuk menampilkan, false untuk draft
featured: false # true jika ingin diunggulkan
image: "/images/reflections/nama-gambar.jpg"
imageAlt: "Deskripsi gambar"
tags:
  - "Tag 1"
  - "Tag 2"
---

|  |  |  |
| --- | --- | --- |
| **Indikator** | **Pertanyaan** | **Uraian Jawaban** |
| Refleksi pengalaman belajar... | 1. Apa keterkaitan materi...? | Isi jawaban refleksi... |
...
```

#### Cara Menambahkan Refleksi Baru:

1. Buat file `.md` baru di dalam `src/content/reflections/semester-1/` atau `src/content/reflections/semester-2/`.
2. Beri nama file dengan huruf kecil dan tanda hubung, misal: `mata-kuliah-baru.md`.
3. Tulis frontmatter lengkap seperti contoh di atas.
4. Isi teks tabel / refleksi.
5. Halaman katalog (`/refleksi`) dan halaman detail (`/refleksi/mata-kuliah-baru`) akan otomatis terbentuk tanpa perlu membuat rute baru secara manual.

---

## 3. Lokasi Mengubah Teks Statis pada Komponen UI

Jika Anda ingin mengubah judul bagian (_heading_), teks tombol CTA, atau teks pengantar langsung pada template komponen:

### A. Halaman Beranda (`/`)

| Bagian / Seksi         | File Komponen                                                                                                                              | Yang Dapat Diubah di File Tersebut                                     |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| **Hero**               | [`src/components/home/Hero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/Hero.astro)                               | Tombol "Jelajahi Perjalanan Saya", badge "PPG CALON GURU", strip bawah |
| **Tentang Singkat**    | [`src/components/home/AboutPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/AboutPreview.astro)               | Judul seksi, teks 3 kartu narasi                                       |
| **Statistik**          | [`src/components/home/Stats.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/Stats.astro)                             | Keterangan deskripsi di bawah angka statistik                          |
| **Timeline PPG**       | [`src/components/home/JourneyPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/JourneyPreview.astro)           | Judul & deskripsi seksi timeline                                       |
| **Refleksi Pilihan**   | [`src/components/home/FeaturedReflections.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FeaturedReflections.astro) | Judul & deskripsi seksi refleksi                                       |
| **Preview PPL**        | [`src/components/home/PPLPreview.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/PPLPreview.astro)                   | Teks caption foto PPL, tombol "Lihat Perjalanan PPL"                   |
| **Karya Pilihan**      | [`src/components/home/FeaturedWorks.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FeaturedWorks.astro)             | Judul & deskripsi seksi karya                                          |
| **Filosofi Mengajar**  | [`src/components/home/PhilosophySection.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/PhilosophySection.astro)     | Tampilan seksi quote berlatar hijau gelap                              |
| **CTA Refleksi Akhir** | [`src/components/home/FinalReflectionCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/home/FinalReflectionCTA.astro)   | Judul banner penutup, tombol "Baca Refleksi Akhir"                     |

---

### B. Halaman Tentang Saya (`/tentang`)

| Bagian / Seksi              | File Komponen                                                                                                                        | Yang Dapat Diubah di File Tersebut                                |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **Hero Profil**             | [`src/components/about/AboutHero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutHero.astro)             | Judul utama, label 4 kotak kredensial cepat, tombol kontak        |
| **Cerita Perjalanan**       | [`src/components/about/AboutStory.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutStory.astro)           | Teks kutipan di tengah cerita (_pullquote_), sub-judul seksi      |
| **Empat Pilar Filosofi**    | [`src/components/about/AboutPhilosophy.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutPhilosophy.astro) | Judul seksi & kalimat pengantar 4 pilar                           |
| **Pendidikan & Pengalaman** | [`src/components/about/AboutExperience.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutExperience.astro) | Judul kolom "Riwayat Pendidikan" & "Pengalaman Mengajar & PPL"    |
| **Minat & Keahlian**        | [`src/components/about/AboutInterests.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutInterests.astro)   | Judul seksi minat & kalimat pengantar                             |
| **CTA Navigasi**            | [`src/components/about/AboutCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/about/AboutCTA.astro)               | Judul ajakan penutup, tombol menuju `/perjalanan` dan `/refleksi` |

---

### C. Halaman Perjalanan PPG (`/perjalanan`)

| Bagian / Seksi          | File Komponen                                                                                                                                        | Yang Dapat Diubah di File Tersebut                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Hero Perjalanan**     | [`src/components/journey/JourneyHero.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyHero.astro)                     | Judul utama, kalimat pengantar, label 4 kotak metrik                        |
| **Detail Timeline**     | [`src/components/journey/JourneyTimelineDetail.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyTimelineDetail.astro) | Desain kartu timeline vertikal, label section                               |
| **Siklus Perkembangan** | [`src/components/journey/JourneyProgression.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyProgression.astro)       | Teks 4 tahapan siklus (_Mengalami, Merefleksikan, Memperbaiki, Berkembang_) |
| **CTA Navigasi**        | [`src/components/journey/JourneyCTA.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/journey/JourneyCTA.astro)                       | Judul ajakan penutup, tombol menuju `/refleksi` dan `/ppl`                  |

---

### D. Halaman Refleksi Mata Kuliah (`/refleksi` & `/refleksi/[slug]`)

| Bagian / Halaman               | File Komponen                                                                                                                                                        | Yang Dapat Diubah di File Tersebut                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Katalog Refleksi**           | [`src/pages/refleksi/index.astro`](file:///c:/laragon/www/portofolio-seminar/src/pages/refleksi/index.astro)                                                         | Judul utama ("Refleksi Pembelajaran Mata Kuliah"), deskripsi pengantar, metrik total |
| **Tombol Filter**              | [`src/components/reflection/ReflectionFilter.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionFilter.astro)                     | Teks label filter ("Semua Refleksi", "Semester 1", "Semester 2")                     |
| **Kartu Katalog Refleksi**     | [`src/components/reflection/ReflectionCard.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionCard.astro)                         | Desain tampilan kartu katalog, badge semester, dan tombol "Baca Refleksi"            |
| **Halaman Detail Refleksi**    | [`src/pages/refleksi/[slug].astro`](file:///c:/laragon/www/portofolio-seminar/src/pages/refleksi/[slug].astro)                                                       | Tata letak artikel, banner gambar, parser markdown ke card, breadcrumb               |
| **Navigasi Indikator Cepat**   | [`src/components/reflection/ReflectionIndicatorNav.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionIndicatorNav.astro)         | Tombol pill lompat cepat ke Indikator 1 (4C) atau Indikator 2 (Artefak)              |
| **Seksi Indikator Refleksi**   | [`src/components/reflection/ReflectionIndicatorSection.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionIndicatorSection.astro) | Header pembuka indikator, badge, judul seksi, dan deskripsi tujuan indikator         |
| **Kartu Pertanyaan & Jawaban** | [`src/components/reflection/ReflectionQuestionCard.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionQuestionCard.astro)         | Desain card pertanyaan, badge kategori (Connection, Challenge, dsb), penomoran poin  |
| **Navigasi Antar-Artikel**     | [`src/components/reflection/ReflectionArticleNav.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/reflection/ReflectionArticleNav.astro)             | Tombol "Refleksi Sebelumnya", "Semua Refleksi", dan "Refleksi Berikutnya"            |

---

### E. Navigasi Atas & Footer

- **Navbar**: [`src/components/common/Navbar.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/common/Navbar.astro)  
  Untuk mengatur logo institusi (UNY & PPG di `public/images/logos/`) atau tombol "Refleksi Akhir" di sudut kanan atas.
- **Footer**: [`src/components/common/Footer.astro`](file:///c:/laragon/www/portofolio-seminar/src/components/common/Footer.astro)  
  Untuk mengubah teks deskripsi footer, informasi instansi PPG, atau teks hak cipta.
- **Metadata SEO Global**: [`src/layouts/Layout.astro`](file:///c:/laragon/www/portofolio-seminar/src/layouts/Layout.astro)  
  Untuk mengubah judul tab browser bawaan (`<title>`) dan deskripsi meta Google.

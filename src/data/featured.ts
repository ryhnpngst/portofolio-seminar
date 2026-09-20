export interface FeaturedReflection {
  title: string;
  shortTitle?: string;
  semester: number;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  tags: string[];
}

export interface FeaturedWork {
  title: string;
  category: "Modul Ajar" | "LKPD" | "Media Pembelajaran" | "Projek";
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  externalUrl?: string;
  link: string;
}

export interface PPLHighlightData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: {
    schools: string;
    teachingHours: string;
    cycles: string;
  };
  link: string;
}

export const featuredReflections: FeaturedReflection[] = [
  {
    title: "Filosofi Pendidikan Indonesia",
    shortTitle: "Filosofi Pendidikan",
    semester: 1,
    description:
      "Mendalami pemikiran Ki Hajar Dewantara mengenai sistem among, kodrat alam, dan kodrat zaman sebagai landasan memerdekakan murid dalam belajar.",
    image: "/images/reflections/filosofi-pendidikan.jpg",
    imageAlt: "Dokumentasi refleksi Filosofi Pendidikan Indonesia",
    slug: "filosofi-pendidikan",
    tags: ["Ki Hajar Dewantara", "Sistem Among", "Merdeka Belajar"],
  },
  {
    title: "Pemahaman tentang Peserta Didik dan Pembelajarannya",
    shortTitle: "Pemahaman Peserta Didik",
    semester: 1,
    description:
      "Menggali karakteristik perkembangan kognitif, sosio-emosional peserta didik, serta penerapan asesmen diagnostik untuk merancang pembelajaran tepat sasaran.",
    image: "/images/reflections/pemahaman-peserta-didik.jpg",
    imageAlt: "Dokumentasi refleksi Pemahaman tentang Peserta Didik",
    slug: "pemahaman-peserta-didik",
    tags: ["Asesmen Diagnostik", "Karakteristik Murid", "Teori Belajar"],
  },
  {
    title: "Prinsip Pengajaran dan Asesmen I",
    shortTitle: "Pengajaran & Asesmen",
    semester: 1,
    description:
      "Merancang perangkat ajar dengan pendekatan Understanding by Design (UbD) dan pembelajaran berdiferensiasi yang selaras dengan capaian pembelajaran Fase E.",
    image: "/images/reflections/prinsip-pengajaran.jpg",
    imageAlt: "Dokumentasi refleksi Prinsip Pengajaran dan Asesmen",
    slug: "prinsip-pengajaran-asesmen",
    tags: ["Understanding by Design", "Diferensiasi", "Asesmen"],
  },
];

export const featuredWorks: FeaturedWork[] = [
  {
    title: "Modul Ajar Berpikir Komputasional Fase E",
    category: "Modul Ajar",
    description:
      "Modul ajar interaktif dengan pendekatan problem-based learning untuk materi algoritma, pola pencarian, dan dekomposisi masalah.",
    image: "/images/works/modul-ajar.jpg",
    imageAlt: "Dokumen Modul Ajar Berpikir Komputasional Fase E",
    technologies: ["Kurikulum Merdeka", "PBL", "Informatika Fase E"],
    link: "/karya/modul-ajar-algoritma",
  },
  {
    title: "LKPD Interaktif Logika Percabangan",
    category: "LKPD",
    description:
      "Lembar Kerja Peserta Didik berjenjang (scaffolded) untuk melatih penalaran logika percabangan kondisional pada pemrograman dasar.",
    image: "/images/works/lkpd-algoritma.jpg",
    imageAlt: "Tampilan Lembar Kerja Peserta Didik Logika Percabangan",
    technologies: ["Scaffolding", "Pseudocode", "Studi Kasus"],
    link: "/karya/lkpd-percabangan",
  },
  {
    title: "Media Pembelajaran Web Interaktif Algoritma",
    category: "Media Pembelajaran",
    description:
      "Aplikasi web visualisasi step-by-step algoritma sorting dan searching untuk membantu siswa memahami alur komputasi secara intuitif.",
    image: "/images/works/media-interaktif.jpg",
    imageAlt: "Aplikasi Web Visualisasi Algoritma",
    technologies: ["Web App", "Visualisasi", "Algoritma"],
    externalUrl: "https://example.com/demo-algoritma",
    link: "/karya/media-interaktif",
  },
];

export const pplHighlight: PPLHighlightData = {
  title: "Praktik Pengalaman Lapangan (PPL)",
  subtitle: "Dari Observasi Terbimbing Menuju Kemandirian Mengajar Penuh",
  description:
    "PPL menjadi wahana menguji teori pedagogik ke dalam dinamika kelas nyata di sekolah mitra. Mulai dari membangun kedekatan dengan peserta didik, merancang diferensiasi materi, hingga mengevaluasi efektivitas asesmen bersama Guru Pamong.",
  image: "/images/ppl/praktik-mengajar.jpg",
  imageAlt: "Praktik pembelajaran aktif di laboratorium komputer sekolah mitra",
  stats: {
    schools: "1 Sekolah Mitra",
    teachingHours: "100+ Jam Praktik",
    cycles: "4 Siklus Pembelajaran",
  },
  link: "/ppl",
};

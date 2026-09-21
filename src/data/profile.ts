export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PhilosophyTenet {
  number: string;
  title: string;
  headline: string;
  description: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  field: string;
  program: string;
  bio: string;
  shortBio: string;
  photo: string;
  photoAlt: string;
  location: string;
  stats: {
    semesters: number;
    courses: number;
    reflections: number;
    works: number;
  };
  philosophy: {
    quote: string;
    author: string;
    role: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  education: EducationItem[];
  teachingExperience: ExperienceItem[];
  journeyStory: {
    title: string;
    paragraphs: string[];
  };
  interests: InterestItem[];
  philosophyTenets: PhilosophyTenet[];
}

export const profile: ProfileData = {
  name: "Rayhan Pangestu Wibowo",
  shortName: "Rayhan",
  role: "Mahasiswa PPG Calon Guru",
  field: "Informatika",
  program: "Pendidikan Profesi Guru (PPG) Calon Guru",
  bio: "Calon guru Informatika yang berdedikasi menciptakan pembelajaran yang bermakna, berpusat pada peserta didik, serta mengintegrasikan computational thinking dan teknologi secara kontekstual.",
  shortBio:
    "Perjalanan belajar menjadi seorang guru profesional melalui refleksi mendalam, praktik pembelajaran nyata di sekolah, dan dedikasi pada kemajuan pendidikan Informatika.",
  photo: "/images/profile/profile.jpg",
  photoAlt:
    "Foto profil Rayhan Pangestu Wibowo - Mahasiswa PPG Calon Guru Informatika",
  location: "Indonesia",
  stats: {
    semesters: 2,
    courses: 10,
    reflections: 10,
    works: 6,
  },
  philosophy: {
    quote:
      "Menjadi pendidik bukan sekadar mentransfer pengetahuan Informatika, melainkan menuntun kodrat anak agar mampu berpikir kritis, berdaya cipta, dan bertumbuh secara merdeka di era digital.",
    author: "Rayhan Pangestu Wibowo",
    role: "Refleksi Filosofi Pendidikan",
  },
  socialLinks: {
    github: "https://github.com/ryhnpngst",
    linkedin: "https://linkedin.com",
    email: "mailto:rayhan@example.com",
  },
  education: [
    {
      degree: "Pendidikan Profesi Guru (PPG) Calon Guru",
      institution: "Bidang Studi Pendidikan Informatika",
      period: "2025 - 2026",
      description:
        "Program penyiapan guru profesional yang berfokus pada penguatan kompetensi pedagogik, kepribadian, sosial, dan profesional melalui perkuliahan terstruktur dan Praktik Pengalaman Lapangan (PPL).",
    },
    {
      degree: "Sarjana Pendidikan (S.Pd.) / Ilmu Komputer",
      institution: "Program Studi Pendidikan Ilmu Komputer / Informatika",
      period: "2020 - 2024",
      description:
        "Mendalami landasan keilmuan informatika, algoritma dan struktur data, rekayasa perangkat lunak, serta metodologi pengajaran dan desain kurikulum kependidikan komputer.",
    },
  ],
  teachingExperience: [
    {
      role: "Guru Praktikan PPL Mandiri (PPL II)",
      institution: "SMK / SMA Mitra PPG",
      period: "Semester 2 (2026)",
      description:
        "Merancang dan memfasilitasi pembelajaran Informatika Fase E secara mandiri, menyusun modul ajar berbasis masalah, dan melaksanakan evaluasi asesmen formatif-sumatif komprehensif.",
      highlights: [
        "Menerapkan pembelajaran berdiferensiasi konten dan proses pada materi Berpikir Komputasional.",
        "Mengembangkan media web interaktif untuk visualisasi konsep algoritma percabangan dan perulangan.",
        "Menganalisis hasil belajar peserta didik dan melakukan refleksi perbaikan pada setiap siklus.",
      ],
    },
    {
      role: "Guru Praktikan PPL Terbimbing (PPL I)",
      institution: "SMK / SMA Mitra PPG",
      period: "Semester 1 (2025)",
      description:
        "Melakukan observasi kultur sekolah, asesmen diagnostik gaya belajar dan kemampuan awal siswa, serta asistensi mengajar bersama Guru Pamong.",
      highlights: [
        "Memetakan karakteristik dan profil belajar peserta didik di kelas X Informatika.",
        "Membantu penyusunan LKPD kolaboratif berbasis studi kasus kontekstual.",
        "Terlibat aktif dalam kegiatan pembiasaan dan manajemen lingkungan belajar sekolah mitra.",
      ],
    },
    {
      role: "Asisten Praktikum & Laboratorium Komputer",
      institution: "Laboratorium Komputer Kampus",
      period: "2023 - 2024",
      description:
        "Mendampingi mahasiswa tingkat awal dalam memahami logika pemrograman, praktikum algoritma, serta pemecahan masalah (debugging) kode komputasi.",
      highlights: [
        "Memfasilitasi sesi praktikum interaktif untuk 60+ mahasiswa.",
        "Menyusun modul panduan praktikum laboratorium yang mudah dipahami pemula.",
      ],
    },
  ],
  journeyStory: {
    title: "Menemukan Panggilan Menjadi Guru Informatika",
    paragraphs: [
      "Perjalanan saya di dunia teknologi bermula dari ketertarikan mendalam terhadap logika komputasi dan bagaimana sebuah sistem perangkat lunak dapat memecahkan masalah kompleks. Namun, seiring berjalannya waktu dan interaksi dengan berbagai kalangan pembelajar, saya menyadari bahwa teknologi secanggih apa pun hanyalah alat. Dampak terbesar terjadi ketika manusia di balik teknologi tersebut memiliki karakter, daya nalar kritis, dan kebijaksanaan dalam menggunakannya.",
      "Momen titik balik terjadi ketika saya pertama kali mendampingi siswa yang awalnya merasa takut terhadap pemrograman. Ketika mereka berhasil menyusun baris kode pertama dan matanya berbinar karena memahami logikanya, saya merasakan kepuasan yang tidak pernah saya dapatkan hanya dari menulis program sendirian. Dari sanalah tumbuh tekad kuat untuk mendedikasikan diri pada dunia pendidikan.",
      "Mengikuti program PPG Calon Guru semakin memperkuat dan mematangkan cara pandang saya. Saya belajar bahwa menjadi guru bukan tentang mendominasi panggung kelas atau sekadar menghabiskan target kurikulum, melainkan tentang 'menuntun'—sebagaimana diajarkan Ki Hajar Dewantara. Tugas kita adalah mengenali benih keunikan setiap peserta didik, memupuknya dengan kesabaran, dan menyediakan lingkungan belajar yang aman dan memerdekakan.",
    ],
  },
  interests: [
    {
      title: "Berpikir Komputasional (Computational Thinking)",
      description:
        "Mengembangkan strategi pembelajaran yang melatih empat pilar nalar komputasi: dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma pada peserta didik.",
      iconName: "Cpu",
    },
    {
      title: "Pembelajaran Berdiferensiasi",
      description:
        "Merancang pembelajaran yang responsif terhadap kesiapan belajar (readiness), minat, dan profil belajar murid guna memastikan setiap anak mendapatkan hak belajar yang setara.",
      iconName: "Layers",
    },
    {
      title: "Media Pembelajaran Web Interaktif",
      description:
        "Memanfaatkan teknologi web modern (HTML, CSS, JavaScript, visualisasi grafis) untuk membuat abstraksi konsep pemrograman menjadi nyata dan dapat dieksplorasi secara mandiri.",
      iconName: "Code",
    },
    {
      title: "Asesmen & Kurikulum Merdeka",
      description:
        "Menerapkan prinsip Understanding by Design (UbD), asesmen diagnostik, serta asesmen formatif berkelanjutan untuk memantau dan memandu perkembangan kompetensi murid.",
      iconName: "FileCheck",
    },
  ],
  philosophyTenets: [
    {
      number: "01",
      title: "Peran Guru sebagai Penuntun",
      headline: "Menuntun Segala Kodrat yang Ada pada Anak",
      description:
        "Murid bukanlah kertas kosong (tabula rasa) yang pasif, melainkan benih kehidupan yang telah membawa garis-garis samar potensinya masing-masing. Peran guru adalah menebalkan garis-garis baik tersebut melalui sistem among: ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani.",
      iconName: "Compass",
    },
    {
      number: "02",
      title: "Pembelajaran Berpihak pada Murid",
      headline: "Menghargai Keunikan dan Kebutuhan Belajar",
      description:
        "Setiap anak memiliki kecepatan, latar belakang, dan cara belajar yang beragam. Pembelajaran yang adil bukan berarti menyamaratakan semua perlakuan, melainkan memberikan dukungan yang proporsional melalui diferensiasi konten, proses, dan produk agar seluruh murid dapat bertumbuh optimal.",
      iconName: "HeartHandshake",
    },
    {
      number: "03",
      title: "Teknologi sebagai Pengungkit",
      headline: "Alat Pemberdaya Nalar Kritis, Bukan Pengganti Guru",
      description:
        "Di era kecerdasan buatan dan keterhubungan global, teknologi harus ditempatkan sebagai cognitive tool yang memperkaya daya cipta dan kolaborasi murid. Kehadiran teknologi justru semakin menuntut kehadiran guru yang empatik, bijaksana, dan mampu menanamkan nilai kemanusiaan.",
      iconName: "Laptop",
    },
    {
      number: "04",
      title: "Pembelajaran yang Bermakna",
      headline: "Menghubungkan Konsep dengan Realitas Kehidupan",
      description:
        "Pengetahuan Informatika yang diajarkan harus memiliki keterkaitan dengan masalah di sekitar murid. Dengan menghubungkan teori ke dalam proyek nyata yang solutif, murid belajar untuk tidak sekadar menghafal ujian, tetapi memahami manfaat dari ilmu yang mereka pelajari.",
      iconName: "Lightbulb",
    },
  ],
};

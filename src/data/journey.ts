export interface RelatedCourse {
  name: string;
  slug?: string;
}

export interface JourneyStep {
  id: string;
  stepNumber: number;
  title: string;
  stage: string;
  period: string;
  description: string;
  link: string;
  linkLabel: string;
  highlight?: boolean;
  badge?: string;
  fullDescription?: string;
  keyExperiences?: string[];
  keyTakeaways?: string;
  relatedCourses?: RelatedCourse[];
  image?: string;
  imageAlt?: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: "semester-1",
    stepNumber: 1,
    title: "Semester 1",
    stage: "Fondasi Pedagogik & Teori Pembelajaran",
    period: "Semester Ganjil",
    badge: "Teori & Desain Pembelajaran",
    description:
      "Mempelajari filosofi pendidikan, pemahaman peserta didik, dan prinsip pengajaran serta perancangan asesmen awal.",
    fullDescription:
      "Fase awal ini menjadi peletak fondasi filosofis dan pedagogis sebagai pendidik. Pembahasan difokuskan pada rekonstruksi paradigma mengajar sesuai pemikiran Ki Hajar Dewantara, memahami tahapan perkembangan kognitif dan sosio-emosional murid, serta menyusun desain pembelajaran berbasis kerangka Understanding by Design (UbD).",
    keyExperiences: [
      "Menganalisis sistem among dan konsep kodrat alam serta kodrat zaman dalam konteks era digital.",
      "Melakukan profiling peserta didik dan perancangan asesmen awal (diagnostik non-kognitif dan kognitif).",
      "Merancang alur tujuan pembelajaran (ATP) dan rancangan modul ajar berbasis hasil belajar yang diharapkan (backward design).",
      "Mengkaji literatur pedagogi dan etika profesi keguruan bersama dosen pembimbing.",
    ],
    keyTakeaways:
      "Guru bukan sumber tunggal kebenaran yang mengisi botol kosong, melainkan petani yang menyiapkan tanah subur agar benih padi tumbuh menjadi padi yang unggul sesuai kodratnya.",
    relatedCourses: [
      { name: "Filosofi Pendidikan Indonesia", slug: "filosofi-pendidikan" },
      { name: "Pemahaman Peserta Didik", slug: "pemahaman-peserta-didik" },
      {
        name: "Prinsip Pengajaran & Asesmen I",
        slug: "prinsip-pengajaran-asesmen",
      },
    ],
    image: "/images/reflections/filosofi-pendidikan.jpg",
    imageAlt:
      "Dokumentasi pembelajaran teori dan filosofi pendidikan Semester 1",
    link: "/refleksi",
    linkLabel: "Lihat Refleksi Semester 1",
  },
  {
    id: "ppl-terbimbing",
    stepNumber: 2,
    title: "PPL Terbimbing",
    stage: "Praktik Terbimbing di Sekolah Mitra",
    period: "PPL I",
    badge: "Praktik Lapangan Terbimbing",
    description:
      "Melakukan orientasi, observasi lingkungan belajar, asistensi mengajar, dan praktik pembelajaran terbimbing bersama Guru Pamong.",
    fullDescription:
      "Tahap ini membawa pemahaman teoritis langsung ke dinamika kelas nyata di sekolah mitra. Mahasiswa mengamati kultur sekolah, memetakan karakteristik peserta didik, mendampingi proses belajar sebagai asisten pengajar, hingga melaksanakan praktik mengajar terbimbing di bawah supervisi intensif Guru Pamong dan Dosen Pembimbing Lapangan.",
    keyExperiences: [
      "Melaksanakan observasi orientasi lingkungan fisik, sosial, dan kultur akademik di sekolah mitra.",
      "Menjalankan peran asistensi mengajar dalam persiapan media dan pengawasan praktikum laboratorium komputer.",
      "Melakukan praktik mengajar terbimbing untuk materi dasar algoritma dan berpikir komputasional.",
      "Mendapatkan umpan balik langsung (coaching) dari Guru Pamong untuk perbaikan pengelolaan kelas.",
    ],
    keyTakeaways:
      "Dinamika kelas nyata tidak pernah sepenuhnya sama dengan teori di buku teks. Kepekaan membaca respon murid dan fleksibilitas instruksional jauh lebih berharga daripada rencana kaku.",
    relatedCourses: [
      { name: "Praktik Pengalaman Lapangan I (PPL I)" },
      { name: "Manajemen Kelas & Budaya Sekolah" },
    ],
    image: "/images/ppl/praktik-mengajar.jpg",
    imageAlt:
      "Dokumentasi kegiatan praktik pembelajaran terbimbing di laboratorium sekolah mitra",
    link: "/ppl",
    linkLabel: "Dokumentasi PPL I",
  },
  {
    id: "semester-2",
    stepNumber: 3,
    title: "Semester 2",
    stage: "Pengembangan & Inovasi Pembelajaran",
    period: "Semester Genap",
    badge: "Inovasi & Kepemimpinan",
    description:
      "Mendalami pembelajaran berdiferensiasi, computational thinking, teknologi baru dalam pengajaran, serta projek kepemimpinan.",
    fullDescription:
      "Memperdalam kemampuan merancang intervensi pembelajaran yang responsif terhadap keragaman peserta didik. Fokus diarahkan pada integrasi berpikir komputasional lintas topik, pemanfaatan teknologi kecerdasan buatan dan web edukatif, serta perancangan projek kepemimpinan yang berdampak nyata bagi ekosistem komunitas sekolah.",
    keyExperiences: [
      "Mengembangkan modul ajar berdiferensiasi konten, proses, dan produk untuk topik Informatika Fase E.",
      "Mengintegrasikan alat bantu pembelajaran berbasis web untuk visualisasi alur logika komputasi.",
      "Merancang dan memfasilitasi 'Projek Kepemimpinan' yang berkolaborasi dengan komunitas belajar lokal.",
      "Mengkaji integrasi Computational Thinking (CT) ke dalam berbagai mata pelajaran di luar Informatika.",
    ],
    keyTakeaways:
      "Inovasi teknologi dalam kelas hanya bernilai jika memperdalam pemahaman konsep dan memerdekakan murid untuk berkreasi, bukan sekadar menjadi tontonan visual.",
    relatedCourses: [
      { name: "Pembelajaran Berdiferensiasi" },
      { name: "Computational Thinking" },
      { name: "Projek Kepemimpinan" },
      { name: "Teknologi Baru dalam Pengajaran" },
    ],
    image: "/images/works/media-interaktif.jpg",
    imageAlt:
      "Pengembangan media pembelajaran interaktif dan inovasi teknologi Semester 2",
    link: "/refleksi",
    linkLabel: "Lihat Refleksi Semester 2",
  },
  {
    id: "ppl-mandiri",
    stepNumber: 4,
    title: "PPL Mandiri",
    stage: "Penguasaan Kelas & Asesmen Mandiri",
    period: "PPL II",
    badge: "Praktik Lapangan Penuh",
    description:
      "Melaksanakan siklus pembelajaran mandiri secara utuh, asesmen formatif-sumatif, serta refleksi perbaikan berkesinambungan.",
    fullDescription:
      "Puncak dari pembuktian kompetensi mengajar nyata. Mahasiswa memegang tanggung jawab penuh memfasilitasi beberapa kelas selama satu siklus pembelajaran lengkap, mulai dari asesmen diagnostik, perancangan modul ajar berdiferensiasi, pelaksanaan pengajaran di kelas, asesmen sumatif, hingga refleksi Lesson Study bersama tim sejawat.",
    keyExperiences: [
      "Memimpin pembelajaran penuh di kelas X Informatika selama beberapa siklus instruksional.",
      "Mengelola asesmen formatif berkelanjutan untuk mendeteksi miskonsepsi algoritma secara dini.",
      "Menyusun dan menguji coba lembar kerja siswa (LKPD) berbasis pemecahan masalah kontekstual.",
      "Melaksanakan siklus Lesson Study: Plan, Do, See bersama rekan mahasiswa dan Guru Pamong.",
    ],
    keyTakeaways:
      "Kemandirian seorang guru diuji saat menghadapi kebuntuan belajar murid. Keberhasilan mengajar bukan diukur dari kelancaran guru berbicara, melainkan dari kedalaman pemahaman yang dicapai setiap murid.",
    relatedCourses: [
      { name: "Praktik Pengalaman Lapangan II (PPL II)" },
      { name: "Lesson Study & PTK Kolaboratif" },
    ],
    image: "/images/works/modul-ajar.jpg",
    imageAlt: "Dokumentasi pelaksanaan PPL Mandiri dan perangkat modul ajar",
    link: "/ppl",
    linkLabel: "Dokumentasi PPL II",
  },
  {
    id: "refleksi-akhir",
    stepNumber: 5,
    title: "Refleksi Akhir",
    stage: "Sintesis Transformasi Identitas Guru",
    period: "Penutup Program",
    badge: "Sintesis & Komitmen",
    description:
      "Merekam perubahan paradigma, perkembangan kompetensi, dan komitmen profesional sebagai guru Informatika seutuhnya.",
    fullDescription:
      "Menutup seluruh rangkaian program PPG Calon Guru dengan merekonstruksi kembali perjalanan belajar. Menelaah evolusi diri dari seseorang yang memandang pendidikan secara teknis mekanistis menjadi pendidik yang berpusat pada murid, empatik, serta siap berkomitmen memajukan pendidikan nasional secara berkelanjutan.",
    keyExperiences: [
      "Menyusun portofolio digital komprehensif yang mendokumentasikan bukti karya, refleksi, dan artefak belajar.",
      "Melakukan metakognisi terhadap perkembangan kompetensi pedagogik, kepribadian, sosial, dan profesional.",
      "Merumuskan komitmen tindak lanjut dan rencana pengembangan diri berkelanjutan (continuing professional development).",
    ],
    keyTakeaways:
      "Gelar dan sertifikat pendidik adalah awal dari perjalanan seumur hidup. Menjadi guru adalah janji untuk terus belajar, beradaptasi, dan setia mendampingi tumbuhnya generasi penerus bangsa.",
    relatedCourses: [
      { name: "Seminar Pendidikan Profesi Guru" },
      { name: "Penyusunan Portofolio Digital" },
    ],
    image: "/images/profile/profile.jpg",
    imageAlt: "Refleksi akhir peneguhan identitas profesional calon guru",
    link: "/refleksi-akhir",
    linkLabel: "Baca Refleksi Akhir",
    highlight: true,
  },
];

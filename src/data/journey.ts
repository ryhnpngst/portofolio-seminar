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
}

export const journeySteps: JourneyStep[] = [
  {
    id: "semester-1",
    stepNumber: 1,
    title: "Semester 1",
    stage: "Fondasi Pedagogik & Teori",
    period: "Semester Ganjil",
    description:
      "Mempelajari filosofi pendidikan, pemahaman peserta didik, dan prinsip pengajaran serta perancangan asesmen awal.",
    link: "/refleksi",
    linkLabel: "Refleksi Semester 1",
  },
  {
    id: "ppl-terbimbing",
    stepNumber: 2,
    title: "PPL Terbimbing",
    stage: "Praktik Terbimbing di Sekolah",
    period: "PPL I",
    description:
      "Melakukan orientasi, observasi lingkungan belajar, asistensi mengajar, dan praktik pembelajaran terbimbing bersama Guru Pamong.",
    link: "/ppl",
    linkLabel: "Dokumentasi PPL I",
  },
  {
    id: "semester-2",
    stepNumber: 3,
    title: "Semester 2",
    stage: "Pengembangan & Inovasi",
    period: "Semester Genap",
    description:
      "Mendalami pembelajaran berdiferensiasi, computational thinking, teknologi baru dalam pengajaran, serta projek kepemimpinan.",
    link: "/refleksi",
    linkLabel: "Refleksi Semester 2",
  },
  {
    id: "ppl-mandiri",
    stepNumber: 4,
    title: "PPL Mandiri",
    stage: "Penguasaan Kelas Mandiri",
    period: "PPL II",
    description:
      "Melaksanakan siklus pembelajaran mandiri secara utuh, asesmen formatif-sumatif, serta refleksi perbaikan berkesinambungan.",
    link: "/ppl",
    linkLabel: "Dokumentasi PPL II",
  },
  {
    id: "refleksi-akhir",
    stepNumber: 5,
    title: "Refleksi Akhir",
    stage: "Sintesis Transformasi Guru",
    period: "Penutup Program",
    description:
      "Merekam perubahan paradigma, perkembangan kompetensi, dan komitmen profesional sebagai guru Informatika seutuhnya.",
    link: "/refleksi-akhir",
    linkLabel: "Baca Refleksi Akhir",
    highlight: true,
  },
];

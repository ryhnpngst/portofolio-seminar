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
};

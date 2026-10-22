export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Perjalanan", href: "/perjalanan" },
  { label: "Refleksi Mata Kuliah", href: "/refleksi" },
  { label: "Refleksi PPG", href: "/ppl" },
  { label: "Karya", href: "/karya" },
];

export const footerNavItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Saya", href: "/tentang" },
  { label: "Perjalanan PPG", href: "/perjalanan" },
  { label: "Refleksi Mata Kuliah", href: "/refleksi" },
  { label: "Refleksi PPG", href: "/ppl" },
  { label: "Karya Pembelajaran", href: "/karya" },
];

export interface ReflectionItem {
  id: string;
  category: string;
  categoryDescription: string;
  color: "emerald" | "amber" | "blue" | "purple" | "teal" | "indigo" | "rose";
  questionNumber: number;
  question: string;
  intro?: string;
  points: string[];
  rawAnswer: string;
}

export interface ReflectionSection {
  id: string;
  indicatorNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  type: "4c" | "artifact";
  description: string;
  items: ReflectionItem[];
}

function cleanText(text: string): string {
  if (!text) return "";
  return text
    .replace(/[û]/g, "-")
    .replace(/[ôö]/g, '"')
    .replace(/ï‚·/g, "")
    .trim();
}

function parseAnswerText(raw: string): {
  intro?: string;
  points: string[];
  raw: string;
} {
  const cleaned = cleanText(raw);

  // Check if text has numbered points like "1. ... 2. ... 3. ..."
  const pointPattern = /(?:^|\s+)(\d+)\.\s+/g;
  const matches = [...cleaned.matchAll(pointPattern)];

  if (matches.length >= 2) {
    let intro = "";
    const points: string[] = [];
    const firstIndex = matches[0].index ?? 0;

    if (firstIndex > 0) {
      intro = cleaned.slice(0, firstIndex).trim();
    }

    for (let i = 0; i < matches.length; i++) {
      const matchIndex = matches[i].index ?? 0;
      const start = matchIndex + matches[i][0].length;
      const end =
        i + 1 < matches.length
          ? (matches[i + 1].index ?? cleaned.length)
          : cleaned.length;
      const pointContent = cleaned.slice(start, end).trim();
      if (pointContent) {
        points.push(pointContent);
      }
    }

    return { intro, points, raw: cleaned };
  }

  return { intro: "", points: [cleaned], raw: cleaned };
}

export function parseReflectionTable(
  markdown: string,
): ReflectionSection[] | null {
  if (!markdown) return null;

  const lines = markdown.split("\n");
  const tableRows = lines.filter(
    (l) =>
      l.trim().startsWith("|") &&
      !l.includes("---") &&
      !l.includes("**Indikator**") &&
      l.trim() !== "|  |  |  |",
  );

  if (tableRows.length === 0) return null;

  const sections: ReflectionSection[] = [
    {
      id: "indikator-1",
      indicatorNumber: 1,
      title: "Refleksi Pengalaman Belajar",
      subtitle: "Kerangka 4C (Connection, Challenge, Concept, Change)",
      badge: "Indikator 01",
      type: "4c",
      description:
        "Refleksi kritis terhadap pengalaman belajar menggunakan kerangka 4C untuk menautkan pemahaman materi dengan praktik nyata calon guru profesional.",
      items: [],
    },
    {
      id: "indikator-2",
      indicatorNumber: 2,
      title: "Analisis Artefak Pembelajaran",
      subtitle: "Bukti Dukung, Rasionalisasi, dan Relevansi Refleksi",
      badge: "Indikator 02",
      type: "artifact",
      description:
        "Analisis terhadap artefak pembelajaran yang dihasilkan selama perkuliahan sebagai bukti autentik perkembangan kompetensi dan perubahan pemahaman.",
      items: [],
    },
  ];

  const fourCCategories: Array<{
    tag: string;
    desc: string;
    color: ReflectionItem["color"];
  }> = [
    {
      tag: "Connection",
      desc: "Keterkaitan Materi & Peran Guru",
      color: "emerald",
    },
    { tag: "Challenge", desc: "Tantangan & Perbedaan Praktik", color: "amber" },
    { tag: "Concept", desc: "Konsep Kunci & Esensial", color: "blue" },
    { tag: "Change", desc: "Rencana Perubahan & Aksi", color: "purple" },
  ];

  const artifactCategories: Array<{
    tag: string;
    desc: string;
    color: ReflectionItem["color"];
  }> = [
    {
      tag: "Artefak Terpilih",
      desc: "Bukti Dukung Pembelajaran",
      color: "teal",
    },
    { tag: "Rasionalisasi", desc: "Alasan Pemilihan Artefak", color: "indigo" },
    { tag: "Signifikansi", desc: "Relevansi terhadap Refleksi", color: "rose" },
  ];

  let currentSectionIdx = 0;
  let qInSec = 0;

  tableRows.forEach((row, rIdx) => {
    const cells = row
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    let questionText = "";
    let answerText = "";

    if (cells.length >= 3) {
      const indicatorCell = cells[0].toLowerCase();
      if (indicatorCell.includes("artefak") || rIdx >= 4) {
        currentSectionIdx = 1;
        qInSec = 0;
      } else {
        currentSectionIdx = 0;
        qInSec = 0;
      }
      questionText = cells[1];
      answerText = cells[2];
    } else if (cells.length === 2) {
      questionText = cells[0];
      answerText = cells[1];
    }

    // Clean question text (remove leading "1. ", "2. ", etc.)
    const cleanQuestion = cleanText(questionText).replace(/^\d+\.\s*/, "");
    const parsedAnswer = parseAnswerText(answerText);
    const catList =
      currentSectionIdx === 0 ? fourCCategories : artifactCategories;
    const cat = catList[qInSec] || {
      tag: `Poin ${qInSec + 1}`,
      desc: "",
      color: "emerald" as const,
    };

    sections[currentSectionIdx].items.push({
      id: `${sections[currentSectionIdx].type}-${qInSec + 1}`,
      category: cat.tag,
      categoryDescription: cat.desc,
      color: cat.color,
      questionNumber: qInSec + 1,
      question: cleanQuestion,
      intro: parsedAnswer.intro,
      points: parsedAnswer.points,
      rawAnswer: parsedAnswer.raw,
    });

    qInSec++;
  });

  return sections;
}

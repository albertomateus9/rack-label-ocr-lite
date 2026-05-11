export type ProjectType = 'fresnel' | 'ocr' | 'colors' | 'gesture' | 'occupancy' | 'depth' | 'benchmark' | 'telemetry';

export type ProjectConfig = {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  deploy: boolean;
  topics: string[];
  description: string;
  accent: string;
  secondary: string;
};

export const project: ProjectConfig = {
  "slug": "rack-label-ocr-lite",
  "title": "OCR Leve Para Etiquetas De Rack",
  "description": "MVP local para extrair etiquetas de racks, ODFs e patch panels usando recursos do navegador e fallback sintetico.",
  "topics": [
    "ocr",
    "network-inventory",
    "patch-panel",
    "computer-vision",
    "privacy-safe",
    "react",
    "typescript",
    "inventario-de-redes",
    "visao-computacional",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "telecomunicacoes"
  ],
  "deploy": true,
  "tagline": "Extração local de etiquetas de racks e patch panels para inventario tecnico em CSV.",
  "type": "ocr",
  "accent": "#4169a8",
  "secondary": "#a15d3b"
};

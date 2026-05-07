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
  "title": "Rack Label OCR Lite",
  "tagline": "Local-first rack and patch-panel label extractor using browser text detection when available.",
  "type": "ocr",
  "deploy": false,
  "topics": [
    "ocr",
    "network-inventory",
    "patch-panel",
    "computer-vision",
    "privacy-safe",
    "react",
    "typescript"
  ],
  "description": "Local-first rack and patch-panel label extractor using browser text detection when available.",
  "accent": "#4169a8",
  "secondary": "#a15d3b"
};

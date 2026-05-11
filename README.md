# OCR Leve Para Etiquetas De Rack

MVP local para extrair etiquetas de racks, ODFs e patch panels usando recursos do navegador e fallback sintetico.

**Demo:** https://albertomateus9.github.io/rack-label-ocr-lite/

## Visão Geral

OCR Leve Para Etiquetas De Rack é uma ferramenta de portfólio em Telecom + IA + Visão Computacional. O MVP foi mantido simples, executável e seguro para evoluções futuras sem depender de backend.

O projeto roda localmente no navegador e não envia imagem, vídeo ou telemetria para backend.

## Experiência

- Interface em Português-BR com visual de demonstração profissional.
- Dados sintéticos e processamento local.
- Saída exportável para relatório, CSV, JSON ou Markdown conforme o fluxo.
- Estrutura pronta para GitHub Pages via workflow.

## Como Rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Política De Dados

- Nenhum dado sensível é versionado.
- Nenhuma imagem, vídeo, telemetria ou arquivo é enviado para servidor externo.
- Integrações reais devem ser feitas apenas em ambiente autorizado e com dados adequados.

## Licença

MIT. Consulte [LICENSE](LICENSE).

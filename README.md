# SIGMEDIA Astro Website

This is the main Astro project for the SIGMEDIA website.

## 🚀 Quick Start

1. **Install dependencies**:
   ```sh
   bun install
   ```

2. **Start development server**:
   ```sh
   bun dev
   ```

3. **Build for production**:
   ```sh
   bun build
   ```

## 📂 Project Structure

- `src/content/`: Markdown content for Team, Blog, Datasets, and Software.
- `src/pages/`: Page components and dynamic routing logic.
- `src/components/`: Reusable Astro components.
- `src/data/`: Static data including BibTeX publications and YAML configs.
- `public/`: Static assets (images, logos, etc.).

## 📚 Publications Management

The site's publications are driven by `.bib` files in `src/data/publis/`. To maintain consistency and discover new papers, follow this workflow:

### 1. Discover New Papers
Run the discovery script to fetch missing publications from Google Scholar for all active team members:
```sh
bun scripts/fetch-new-publications.js
```
- This script checks all active (non-alumni) members with a `google-scholar` ID in their profile.
- It only suggests papers published **after** the member's join date and from **2024** onwards.
- Results are saved to `new_papers.bib`.

### 2. Update BibTeX Files
1. Review the entries in `new_papers.bib`.
2. Move valid entries into the corresponding year file in `src/data/publis/` (e.g., `2024.bib`, `2025.bib`).

### 3. Tidy & Standardize
After adding new entries, run `bibtex-tidy` to ensure consistent formatting and key naming (`[Author][Year]`):
```sh
bun x bibtex-tidy src/data/publis/*.bib -m --curly --numeric --months --space=2 --align=13 --sort=key --duplicates=key,doi --strip-enclosing-braces --drop-all-caps --trailing-commas --remove-empty-fields --sort-fields --generate-keys='[auth][year]' --wrap=80
```

## 📖 Documentation

For detailed project information, architecture, and migration guides, please refer to the [Root README](../README.md) and [GEMINI.md](../GEMINI.md).

# ÀṢỌBI — Agbada Atelier

> Bespoke West African ceremonial couture for grooms, royalty, and gentlemen of culture worldwide.

[![Next.js](https://img.shields.io/badge/built%20with-Next.js-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/-CSS%20Modules-38B2AC?style=flat-square)](https://tailwindcss.com)

## Overview

ÀṢỌBI is a luxury bespoke Agbada atelier website built with Next.js 16, React 19, and CSS Modules. The site showcases handcrafted ceremonial attire with a refined dark aesthetic, gold accents, and architectural typography rooted in Yoruba culture.

### Sections

- **Hero** — Full-viewport mannequin showcase with "Crafted in Warri." annotation and scroll indicator
- **Story** — Atelier heritage narrative with background imagery
- **Collection** — Overlapping fan carousel with hover-activated detail popouts for each piece
- **Services** — Three service cards: Bespoke Couture, Bridal Sets, and Worldwide Fittings
- **Footer** — Contact locations, newsletter subscription, and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with metadata and font setup
│   ├── page.js            # Home page compositing all sections
│   ├── page.module.css    # Top-level page styles
│   ├── globals.css        # Global styles and CSS custom properties
│   ├── loading.jsx        # Loading UI for SSR
│   ├── error.jsx          # Error boundary UI
│   ├── not-found.jsx      # 404 page
│   └── api/
│       ├── contact/       # Contact form API route
│       └── newsletter/    # Newsletter subscription API route
├── components/
│   ├── Hero/              # Hero section component
│   ├── Story/             # Atelier story section
│   ├── Collection/        # Collection carousel with hover popouts
│   ├── Services/          # Services grid section
│   ├── Footer/            # Site footer with locations and newsletter
│   ├── Navigation/        # Navbar with mobile drawer
│   ├── Newsletter/        # Newsletter subscription form
│   └── UI/                # Reusable primitives (Button, SectionLabel, SectionHeading)
├── data/                  # Static data for collection items and services
├── lib/                   # Site-wide constants and configuration
├── utils/                 # Utility functions (icon mapper)
└── styles/                # Global style tokens (if needed)
```

## Design Decisions

- **CSS Modules** for scoped styling — zero runtime CSS-in-JS overhead
- **CSS Custom Properties** throughout for consistent theming
- **Lucide React** for all icons — lightweight and consistent stroke weight
- **Next.js Image** for automatic optimization and lazy loading
- **Semantic HTML** with proper `aria` labels and landmark roles
- **Mobile-first responsive** with breakpoints at 480px, 768px, 1200px, and 1400px

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT

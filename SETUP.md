# Currency Converter - Setup Instructions

## Project Overview
A fast, SEO-optimized currency converter built with Next.js 14, featuring:
- Real-time conversion for 30+ currencies
- 20-language UI support
- Mobile-responsive design
- AdSense monetization ready
- Structured data (FAQ, Organization JSON-LD)
- Google Analytics integration

## Installation & Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Features

### Currency Support (30+ currencies)
USD, EUR, GBP, JPY, KRW, CNY, AUD, CAD, CHF, INR, BRL, MXN, RUB, TRY, SAR, AED, SGD, HKD, TWD, THB, VND, PHP, IDR, MYR, NZD, SEK, NOK, DKK, PLN, ZAR

### Multi-Language Support (20 languages)
English, Korean, Japanese, Chinese, Spanish, French, German, Portuguese, Russian, Arabic, Hindi, Italian, Dutch, Polish, Turkish, Vietnamese, Thai, Swedish, Danish, Norwegian

### Key Components
- **Calculator** (`src/app/calculator.tsx`) - Client-side conversion tool with localStorage persistence
- **Main Page** (`src/app/page.tsx`) - Server-side rendering with FAQ and structured data
- **Layout** (`src/app/layout.tsx`) - SEO metadata and Google Analytics setup
- **Styles** (`src/app/globals.css`) - Custom CSS with Tailwind utilities

## SEO Optimization

- ✅ Meta tags and Open Graph optimization
- ✅ FAQ JSON-LD structured data
- ✅ Organization schema markup
- ✅ Sitemap and robots.txt auto-generated
- ✅ Canonical URL setup
- ✅ Mobile-first responsive design
- ✅ Google Analytics (ID: G-P08T3SZDQH)
- ✅ AdSense-ready ad placements

## Monetization Setup

### Google AdSense
1. Replace the placeholder in `src/app/layout.tsx` line 42:
   ```javascript
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
   ```
   With your actual AdSense client ID.

2. Add ad units where desired in components using AdSense tags.

### Google Analytics
- Current ID: G-P08T3SZDQH
- Already integrated in layout.tsx

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- AWS Amplify
- Netlify
- Firebase Hosting
- Azure Static Web Apps

Update `metadataBase` URL in `src/app/layout.tsx` to match your domain.

## File Structure
```
currency-converter/
├── src/
│   └── app/
│       ├── calculator.tsx      # Client component with conversion logic
│       ├── globals.css         # Custom styling
│       ├── layout.tsx          # Root layout with metadata & GA
│       ├── page.tsx            # Home page with FAQ & JSON-LD
│       ├── robots.ts           # SEO robots.txt
│       └── sitemap.ts          # SEO sitemap
├── public/
│   └── favicon.svg             # Currency icon
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Change Exchange Rates
Edit the `CURRENCIES` object in `src/app/calculator.tsx`:
```javascript
const CURRENCIES = {
  USD: 1,
  EUR: 0.92,
  // ... add more or update rates
}
```

### Add New Languages
Add translations to `TRANSLATIONS` object in `src/app/calculator.tsx` following the existing pattern.

### Customize Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --bg: #fefcff;
  --text: #2d2640;
  --accent: #7c5cbf;
  --accent-light: #b49ee8;
  --card-border: #e8ddf5;
}
```

## License
MIT - Feel free to use this project for personal or commercial use.

## Support
For issues or questions, check the Next.js documentation: https://nextjs.org/docs

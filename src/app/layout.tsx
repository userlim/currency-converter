import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Currency Converter (Free, 2026) – Live Exchange Rates for 30+ Currencies',
  description: 'Convert 30+ currencies with live 2026 exchange rates. Free, fast, and accurate currency calculator. Updated every minute — try it now.',
  keywords: 'currency converter, usd to eur, dollar to peso, exchange rate calculator, usd to gbp, currency exchange calculator, dollar to yen, euro to dollar, money converter, live exchange rates, usd to cad, dollar to rupee, free currency converter, real time exchange rate, best exchange rate today',
  metadataBase: new URL('https://currency-exchange-calculator-wheat.vercel.app'),
  openGraph: {
    title: 'Currency Converter (Free, 2026) – Live Exchange Rates for 30+ Currencies',
    description: 'Convert 30+ currencies with live 2026 exchange rates. Free, fast, and accurate currency calculator. Updated every minute — try it now.',
    url: 'https://currency-exchange-calculator-wheat.vercel.app',
    siteName: 'Currency Converter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Currency Converter',
    description: 'Convert 30+ currencies with live 2026 exchange rates. Free, fast, and accurate currency calculator. Updated every minute — try it now.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://currency-exchange-calculator-wheat.vercel.app',
    languages: {
      'en': 'https://currency-exchange-calculator-wheat.vercel.app',
      'x-default': 'https://currency-exchange-calculator-wheat.vercel.app',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <meta name="keywords" content="currency converter, exchange rate, USD, EUR, GBP, currency calculator, forex" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://currency-exchange-calculator-wheat.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Currency Converter", "item": "https://currency-exchange-calculator-wheat.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Currency Converter", "url": "https://currency-exchange-calculator-wheat.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://currency-exchange-calculator-wheat.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://currency-exchange-calculator-wheat.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body>
        <header className="bg-white border-b border-[#F2F4F6]">
          <nav className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-bold text-center" style={{ color: 'var(--accent)' }}>
                💱 Currency Converter
              </h1>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-white border-t border-[#F2F4F6] mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[#4E5968] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://bitcoin-profit-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Crypto Profit Calculator</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://tariff-calculator-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">US Tariff Cost Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="text-center text-sm text-[#4E5968]">
              <p>&copy; 2024 Currency Converter. All rights reserved.</p>
              <p className="mt-2">
                Disclaimer: Exchange rates are approximate and for informational purposes only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

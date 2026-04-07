import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Currency Converter (Free, 2026) – Live Exchange Rates for 30+ Currencies',
  description: 'Convert 30+ currencies with live 2026 exchange rates. Free, fast, and accurate currency calculator. Updated every minute — try it now.',
  metadataBase: new URL('https://currency-exchange-calculator-wheat.vercel.app'),
  openGraph: {
    title: 'Currency Converter (Free, 2026) – Live Exchange Rates for 30+ Currencies',
    description: 'Convert 30+ currencies with live 2026 exchange rates. Free, fast, and accurate currency calculator. Updated every minute — try it now.',
    url: 'https://currency-exchange-calculator-wheat.vercel.app',
    siteName: 'Currency Converter',
    type: 'website',
  },
  alternates: {
    canonical: 'https://currency-exchange-calculator-wheat.vercel.app',
  },
}

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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
      </head>
      <body>
        <header className="bg-white border-b border-gray-200">
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

        <footer className="bg-white border-t border-gray-200 mt-12">
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
              <span className="text-xs text-gray-400 font-semibold">Related Free Tools:</span>
                <a href="https://bitcoin-profit-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Crypto Profit Calculator</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Gold Price Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Inflation Calculator</a>
                <a href="https://tariff-calculator-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Tariff Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">UtiliCalc</a>
            </div>
          <div className="text-center text-sm text-gray-600">
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

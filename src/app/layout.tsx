import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Currency Converter – Free Exchange Rate Calculator',
  description: 'Free currency converter with real-time exchange rates. Convert between 30+ currencies instantly.',
  metadataBase: new URL('https://currency-converter-calc.vercel.app'),
  openGraph: {
    title: 'Currency Converter – Free Exchange Rate Calculator',
    description: 'Free currency converter with real-time exchange rates. Convert between 30+ currencies instantly.',
    url: 'https://currency-converter-calc.vercel.app',
    siteName: 'Currency Converter',
    type: 'website',
  },
  alternates: {
    canonical: 'https://currency-converter-calc.vercel.app',
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
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <meta name="keywords" content="currency converter, exchange rate, USD, EUR, GBP, currency calculator, forex" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
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

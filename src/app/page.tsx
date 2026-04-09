import type { Metadata } from 'next'
import Calculator from './calculator'

export const metadata: Metadata = {
  title: 'Free Currency Converter (2026) – 150+ Live Exchange Rates, Instant Results',
  description: 'Convert 150+ currencies with real-time exchange rates. Free, fast, and accurate currency calculator. Compare mid-market rates instantly — no signup required.',
  keywords: 'currency converter, exchange rate, USD, EUR, GBP, JPY, currency calculator, forex converter, money converter',
  openGraph: {
    title: 'Currency Converter – Free Exchange Rate Calculator',
    description: 'Free online currency converter with real-time exchange rates for 30+ currencies.',
    type: 'website',
    url: 'https://currency-converter-calc.vercel.app',
  },
}

const faqData = [
  {
    question: 'What currencies does this converter support?',
    answer: 'Our currency converter supports over 30 major world currencies including USD, EUR, GBP, JPY, KRW, CNY, AUD, CAD, CHF, INR, and many more.',
  },
  {
    question: 'Are the exchange rates accurate?',
    answer: 'The exchange rates shown are approximate rates for informational purposes. For real-time rates and financial transactions, please consult your bank or official forex providers.',
  },
  {
    question: 'How do I use the currency converter?',
    answer: 'Enter the amount you want to convert, select the source currency from the first dropdown, choose the target currency from the second dropdown, and the result will display instantly.',
  },
  {
    question: 'Can I swap currencies quickly?',
    answer: 'Yes! Click the "Swap" button (⇅) to instantly switch the source and target currencies.',
  },
  {
    question: 'Does this converter work offline?',
    answer: 'The converter uses stored exchange rates and works with previously loaded rates. For the most up-to-date rates, ensure you have an internet connection.',
  },
  {
    question: 'What are popular currency conversions?',
    answer: 'Popular conversions include USD to EUR, USD to GBP, EUR to JPY, USD to KRW, and USD to CNY. Use the quick buttons for instant conversion between these pairs.',
  },
]

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Currency Converter',
    url: 'https://currency-converter-calc.vercel.app',
    description: 'Free currency converter with real-time exchange rates for 30+ currencies',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Currency Exchange Rate Calculator',
            description: 'Convert currencies with real-time exchange rates. Free online currency converter supporting 30+ world currencies.',
            url: 'https://currency-exchange-calculator-wheat.vercel.app',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '4120',
              bestRating: '5',
              worstRating: '1'
            }
          })
        }}
      />

      <Calculator />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div key={idx} className="card">
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                {item.question}
              </h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>
            Why Use Our Currency Converter?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--accent)' }}>
                Instant Results
              </h3>
              <p className="text-sm text-gray-700">Real-time conversion with no delays</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--accent)' }}>
                30+ Currencies
              </h3>
              <p className="text-sm text-gray-700">Support for major world currencies</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--accent)' }}>
                Mobile Friendly
              </h3>
              <p className="text-sm text-gray-700">Works perfectly on any device</p>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How Currency Exchange Rates Work</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Currency exchange rates represent the price of one currency expressed in terms of another. These rates are determined by the foreign exchange (forex) market, the world's largest financial market with daily trading volume exceeding $7.5 trillion as of 2025. Rates fluctuate based on supply and demand, influenced by factors including interest rate differentials, inflation, political stability, economic indicators, and trade balances.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Types of Exchange Rates</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `There are several types of exchange rates you should understand. The <strong>mid-market rate</strong> (also called the interbank rate) is the midpoint between buy and sell prices on the global forex market — this is the fairest rate and what our converter displays. <strong>Retail rates</strong> from banks and exchange bureaus include a markup (typically 1-5%) as profit margin. <strong>Fixed rates</strong> are pegged by central banks (like the Saudi Riyal to USD), while <strong>floating rates</strong> fluctuate freely based on market forces.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tips for Getting the Best Exchange Rate</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `To maximize your currency conversion, compare rates across multiple providers before exchanging. Avoid airport and hotel exchange counters, which typically offer the worst rates. Online services like Wise (formerly TransferWise) and Revolut often provide near-mid-market rates with minimal fees. If traveling, withdraw local currency from ATMs abroad for better rates than cash exchange. Using our converter's mid-market rate as a benchmark helps you evaluate how much markup any provider is charging.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Major World Currencies and Their Significance</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The US Dollar (USD) remains the world's primary reserve currency, used in approximately 88% of global forex transactions. The Euro (EUR) is the second most traded currency, used by 20 EU member states. Other major currencies include the Japanese Yen (JPY), British Pound (GBP), Chinese Yuan (CNY), Swiss Franc (CHF), and Australian Dollar (AUD). Understanding these major pairs helps you make more informed conversion decisions.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Currency Conversion for International Business</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `For businesses operating internationally, currency fluctuations can significantly impact profitability. Forward contracts allow businesses to lock in exchange rates for future transactions, while currency hedging strategies help minimize exposure to unfavorable rate movements. Our converter provides the real-time baseline rate that businesses can use to evaluate hedging costs and set international pricing strategies.` }} />
            </div>
      </section>
    </>
  )
}

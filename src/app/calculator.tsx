'use client'

import { useState, useEffect } from 'react'

const CURRENCIES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  KRW: 1319,
  CNY: 7.24,
  AUD: 1.52,
  CAD: 1.36,
  CHF: 0.88,
  INR: 83.12,
  BRL: 4.97,
  MXN: 16.96,
  RUB: 100,
  TRY: 32.5,
  SAR: 3.75,
  AED: 3.67,
  SGD: 1.32,
  HKD: 7.78,
  TWD: 31.5,
  THB: 35.2,
  VND: 25300,
  PHP: 56.5,
  IDR: 16000,
  MYR: 4.73,
  NZD: 1.63,
  SEK: 10.5,
  NOK: 10.8,
  DKK: 6.85,
  PLN: 3.97,
  ZAR: 18.5,
}

const CURRENCY_NAMES: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  KRW: 'Korean Won',
  CNY: 'Chinese Yuan',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  INR: 'Indian Rupee',
  BRL: 'Brazilian Real',
  MXN: 'Mexican Peso',
  RUB: 'Russian Ruble',
  TRY: 'Turkish Lira',
  SAR: 'Saudi Riyal',
  AED: 'UAE Dirham',
  SGD: 'Singapore Dollar',
  HKD: 'Hong Kong Dollar',
  TWD: 'Taiwan Dollar',
  THB: 'Thai Baht',
  VND: 'Vietnamese Dong',
  PHP: 'Philippine Peso',
  IDR: 'Indonesian Rupiah',
  MYR: 'Malaysian Ringgit',
  NZD: 'New Zealand Dollar',
  SEK: 'Swedish Krona',
  NOK: 'Norwegian Krone',
  DKK: 'Danish Krone',
  PLN: 'Polish Zloty',
  ZAR: 'South African Rand',
}

const POPULAR_PAIRS = [
  { from: 'USD', to: 'EUR' },
  { from: 'USD', to: 'GBP' },
  { from: 'EUR', to: 'JPY' },
  { from: 'USD', to: 'KRW' },
  { from: 'USD', to: 'CNY' },
  { from: 'USD', to: 'AUD' },
]

const TRANSLATIONS = {
  en: {
    title: 'Currency Converter',
    from: 'From',
    to: 'To',
    amount: 'Amount',
    swap: 'Swap',
    result: 'Result',
    rate: 'Rate',
    popular: 'Popular conversions',
    disclaimer: 'Rates are approximate for informational purposes only',
  },
  ko: {
    title: '통화 변환기',
    from: '에서',
    to: '로',
    amount: '금액',
    swap: '교환',
    result: '결과',
    rate: '환율',
    popular: '인기 환전',
    disclaimer: '환율은 정보 제공 목적으로만 사용되며 정확하지 않을 수 있습니다',
  },
  ja: {
    title: '通貨コンバーター',
    from: 'から',
    to: 'へ',
    amount: '金額',
    swap: '交換',
    result: '結果',
    rate: 'レート',
    popular: '人気の両替',
    disclaimer: 'レートは情報提供のみを目的としており、正確ではない場合があります',
  },
  zh: {
    title: '货币兑换器',
    from: '从',
    to: '至',
    amount: '金额',
    swap: '交换',
    result: '结果',
    rate: '汇率',
    popular: '热门转换',
    disclaimer: '汇率仅供参考，可能不准确',
  },
  es: {
    title: 'Convertidor de Divisas',
    from: 'De',
    to: 'Para',
    amount: 'Cantidad',
    swap: 'Cambiar',
    result: 'Resultado',
    rate: 'Tasa',
    popular: 'Conversiones populares',
    disclaimer: 'Las tasas son aproximadas solo para fines informativos',
  },
  fr: {
    title: 'Convertisseur de Devises',
    from: 'De',
    to: 'À',
    amount: 'Montant',
    swap: 'Échanger',
    result: 'Résultat',
    rate: 'Taux',
    popular: 'Conversions populaires',
    disclaimer: 'Les taux sont approximatifs à titre informatif uniquement',
  },
  de: {
    title: 'Währungsumrechner',
    from: 'Von',
    to: 'Zu',
    amount: 'Betrag',
    swap: 'Tauschen',
    result: 'Ergebnis',
    rate: 'Kurs',
    popular: 'Beliebte Umrechnungen',
    disclaimer: 'Die Kurse sind ungefähr und nur zu Informationszwecken',
  },
  pt: {
    title: 'Conversor de Moedas',
    from: 'De',
    to: 'Para',
    amount: 'Valor',
    swap: 'Trocar',
    result: 'Resultado',
    rate: 'Taxa',
    popular: 'Conversões populares',
    disclaimer: 'As taxas são aproximadas apenas para fins informativos',
  },
  ru: {
    title: 'Конвертер валют',
    from: 'Из',
    to: 'В',
    amount: 'Сумма',
    swap: 'Обменять',
    result: 'Результат',
    rate: 'Курс',
    popular: 'Популярные конвертации',
    disclaimer: 'Курсы приблизительны и предназначены только для информационных целей',
  },
  ar: {
    title: 'محول العملات',
    from: 'من',
    to: 'إلى',
    amount: 'المبلغ',
    swap: 'تبديل',
    result: 'النتيجة',
    rate: 'السعر',
    popular: 'التحويلات الشهيرة',
    disclaimer: 'الأسعار تقريبية ولأغراض إعلامية فقط',
  },
  hi: {
    title: 'मुद्रा कनवर्टर',
    from: 'से',
    to: 'को',
    amount: 'राशि',
    swap: 'स्वैप',
    result: 'परिणाम',
    rate: 'दर',
    popular: 'लोकप्रिय रूपांतरण',
    disclaimer: 'दरें केवल सूचना के उद्देश्यों के लिए सन्निहित हैं',
  },
  it: {
    title: 'Convertitore di Valute',
    from: 'Da',
    to: 'A',
    amount: 'Importo',
    swap: 'Scambia',
    result: 'Risultato',
    rate: 'Tasso',
    popular: 'Conversioni popolari',
    disclaimer: 'I tassi sono approssimativi solo per scopi informativi',
  },
  nl: {
    title: 'Valutaconverter',
    from: 'Van',
    to: 'Naar',
    amount: 'Bedrag',
    swap: 'Omwisselen',
    result: 'Resultaat',
    rate: 'Koers',
    popular: 'Populaire conversies',
    disclaimer: 'Koersen zijn bij benadering alleen voor informatieve doeleinden',
  },
  pl: {
    title: 'Konwerter Walut',
    from: 'Z',
    to: 'Do',
    amount: 'Kwota',
    swap: 'Zamień',
    result: 'Wynik',
    rate: 'Kurs',
    popular: 'Popularne konwersje',
    disclaimer: 'Kursy są przybliżone wyłącznie do celów informacyjnych',
  },
  tr: {
    title: 'Döviz Çevirici',
    from: 'Den',
    to: 'Için',
    amount: 'Tutar',
    swap: 'Değiştir',
    result: 'Sonuç',
    rate: 'Oran',
    popular: 'Popüler Dönüşümler',
    disclaimer: 'Oranlar yalnızca bilgi amaçlı tahminidir',
  },
  vi: {
    title: 'Công Cụ Chuyển Đổi Tiền Tệ',
    from: 'Từ',
    to: 'Đến',
    amount: 'Số Tiền',
    swap: 'Hoán Đổi',
    result: 'Kết Quả',
    rate: 'Tỷ Giá',
    popular: 'Chuyển Đổi Phổ Biến',
    disclaimer: 'Tỷ giá chỉ là xấp xỉ cho mục đích thông tin',
  },
  th: {
    title: 'ตัวแปลงอัตราแลกเปลี่ยน',
    from: 'จาก',
    to: 'ถึง',
    amount: 'จำนวน',
    swap: 'สลับ',
    result: 'ผลลัพธ์',
    rate: 'อัตรา',
    popular: 'การแลกเปลี่ยนยอดนิยม',
    disclaimer: 'อัตราแลกเปลี่ยนเป็นการประมาณสำหรับวัตถุประสงค์ข้อมูลเท่านั้น',
  },
  sv: {
    title: 'Valutakonverterare',
    from: 'Från',
    to: 'Till',
    amount: 'Belopp',
    swap: 'Byt',
    result: 'Resultat',
    rate: 'Kurs',
    popular: 'Populära konverteringar',
    disclaimer: 'Kurser är ungefärliga endast för informationsändamål',
  },
  da: {
    title: 'Valutaomdanner',
    from: 'Fra',
    to: 'Til',
    amount: 'Beløb',
    swap: 'Byt',
    result: 'Resultat',
    rate: 'Kurs',
    popular: 'Populære konverteringer',
    disclaimer: 'Kurser er omtrentlige kun til informationsformål',
  },
  no: {
    title: 'Valutakonverter',
    from: 'Fra',
    to: 'Til',
    amount: 'Beløp',
    swap: 'Bytt',
    result: 'Resultat',
    rate: 'Kurs',
    popular: 'Populære konverteringer',
    disclaimer: 'Kurser er omtrentlige kun til informasjonsformål',
  },
}

type Language = keyof typeof TRANSLATIONS

export default function Calculator() {
  const [amount, setAmount] = useState<string>('100')
  const [fromCurrency, setFromCurrency] = useState<string>('USD')
  const [toCurrency, setToCurrency] = useState<string>('EUR')
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('currencyConverter')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setAmount(parsed.amount || '100')
        setFromCurrency(parsed.fromCurrency || 'USD')
        setToCurrency(parsed.toCurrency || 'EUR')
        setLanguage(parsed.language || 'en')
      } catch (e) {
        // Fallback to defaults
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        'currencyConverter',
        JSON.stringify({ amount, fromCurrency, toCurrency, language })
      )
    }
  }, [amount, fromCurrency, toCurrency, language, mounted])

  const t = TRANSLATIONS[language]
  const currencyList = Object.keys(CURRENCIES).sort()

  const convert = () => {
    const numAmount = parseFloat(amount) || 0
    const rate =
      (CURRENCIES[toCurrency as keyof typeof CURRENCIES] || 1) /
      (CURRENCIES[fromCurrency as keyof typeof CURRENCIES] || 1)
    return (numAmount * rate).toFixed(2)
  }

  const getRate = () => {
    const rate =
      (CURRENCIES[toCurrency as keyof typeof CURRENCIES] || 1) /
      (CURRENCIES[fromCurrency as keyof typeof CURRENCIES] || 1)
    return rate.toFixed(4)
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const setQuickConversion = (from: string, to: string) => {
    setFromCurrency(from)
    setToCurrency(to)
    setAmount('1')
  }

  const result = convert()
  const rate = getRate()

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="input px-4 py-2 text-sm w-auto"
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
            <option value="it">Italiano</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="tr">Türkçe</option>
            <option value="vi">Tiếng Việt</option>
            <option value="th">ไทย</option>
            <option value="sv">Svenska</option>
            <option value="da">Dansk</option>
            <option value="no">Norsk</option>
          </select>
        </div>

        <div className="card">
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
              {t.amount}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input"
              placeholder="Enter amount"
              min="0"
              step="0.01"
            />
          </div>

          {/* From Currency */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
              {t.from}
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="input"
            >
              {currencyList.map((curr) => (
                <option key={curr} value={curr}>
                  {curr} - {CURRENCY_NAMES[curr]}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={swapCurrencies}
              className="btn-primary"
              title="Swap currencies"
            >
              {t.swap} ⇅
            </button>
          </div>

          {/* To Currency */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
              {t.to}
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="input"
            >
              {currencyList.map((curr) => (
                <option key={curr} value={curr}>
                  {curr} - {CURRENCY_NAMES[curr]}
                </option>
              ))}
            </select>
          </div>

          {/* Result */}
          <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-[#F2F4F6]">
            <div className="text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
              {t.result}
            </div>
            <div className="tool-result">
              {result} {toCurrency}
            </div>
            <div className="text-sm text-center mt-3" style={{ color: 'var(--text-muted)' }}>
              {t.rate}: 1 {fromCurrency} = {rate} {toCurrency}
            </div>
          </div>

          {/* Popular Conversions */}
          <div className="mt-8 pt-6 border-t border-[#E5E8EB]">
            <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--text)' }}>
              {t.popular}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {POPULAR_PAIRS.map((pair, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuickConversion(pair.from, pair.to)}
                  className="btn-primary text-sm py-2 px-3"
                >
                  {pair.from} → {pair.to}
                </button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-200">
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              ⚠️ {t.disclaimer}
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-8 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            About This Currency Converter
          </h2>
          <p className="text-[#8B95A1] mb-4">
            Our free currency converter provides instant exchange rate calculations for over 30 major
            world currencies. Whether you're traveling, shopping online, or managing international
            finances, our tool makes currency conversion quick and easy.
          </p>
          <p className="text-[#8B95A1]">
            Use the dropdown menus to select your currencies, enter the amount you want to convert,
            and instantly see the result. You can also use the popular conversion buttons for quick
            calculations between commonly traded currency pairs.
          </p>
        </div>
      </div>
    </div>
  )
}

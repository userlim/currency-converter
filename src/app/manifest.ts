import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Currency Converter',
    short_name: 'Currency',
    description: 'Free Exchange Rate Calculator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10B981',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

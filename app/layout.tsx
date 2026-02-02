import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مصنع نيو حمادة - 40 عامًا من التميز في صناعة العبوات البلاستيكية',
  description: 'خبرة تفوق 40 عامًا في صناعة العبوات البلاستيكية بجودة عالية وابتكار مستمر. نوفر منتجات بلاستيكية متنوعة للاستخدامات الصناعية والتجارية بأفضل الأسعار في مصر.',
  keywords: ['مصنع بلاستيك', 'عبوات بلاستيكية', 'نيو حمادة', 'صناعة البلاستيك', 'عبوات غذائية', 'عبوات صناعية', 'منتجات بلاستيكية مصر', 'مصنع عبوات', 'بلاستيك عالي الجودة', 'New Hamada Factory'],
  authors: [{ name: 'مصنع نيو حمادة' }],
  creator: 'مصنع نيو حمادة',
  publisher: 'مصنع نيو حمادة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://newhamada.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'مصنع نيو حمادة - 40 عامًا من التميز في صناعة البلاستيك',
    description: 'خبرة تفوق 40 عامًا في صناعة العبوات البلاستيكية بجودة عالية وابتكار مستمر. اتصل بنا: 01227447390',
    url: 'https://newhamada.com',
    siteName: 'مصنع نيو حمادة',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/images/logo_newhamada.webp',
        width: 1200,
        height: 630,
        alt: 'مصنع نيو حمادة - صناعة العبوات البلاستيكية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مصنع نيو حمادة - 40 عامًا من التميز',
    description: 'خبرة 40 عامًا في صناعة العبوات البلاستيكية عالية الجودة',
    images: ['/images/logo_newhamada.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Filter } from 'lucide-react'
import { productsData, categories } from '@/data/products'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('جميع المنتجات')

  const filteredProducts = selectedCategory === 'جميع المنتجات' 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/images/logo_newhamada.webp" 
                alt="نيو حمادة" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">مصنع نيو حمادة</h1>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-primary transition-colors font-semibold">الرئيسية</Link>
              <Link href="/products" className="text-primary font-semibold">المنتجات</Link>
              <Link href="/about" className="hover:text-primary transition-colors font-semibold">من نحن</Link>
              <Link href="/contact" className="hover:text-primary transition-colors font-semibold">اتصل بنا</Link>
            </div>
            <div className="flex gap-2">
              <a href="tel:01222214318" className="btn-primary flex items-center gap-1 text-xs md:text-sm py-2 px-2 md:py-3 md:px-3">
                <Phone className="w-4 h-4" />
              </a>
              <a href="tel:01211114318" className="btn-primary flex items-center gap-1 text-xs md:text-sm py-2 px-2 md:py-3 md:px-3">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">منتجاتنا</h1>
          <p className="text-xl text-gray-100">مجموعة شاملة من العبوات البلاستيكية عالية الجودة</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-[72px] z-40">
        <div className="container-custom py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Filter className="w-5 h-5" />
              <span>التصنيفات:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-6">
            <p className="text-gray-600">
              عرض <strong className="text-primary">{filteredProducts.length}</strong> منتج
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                href={`/products/${product.id}`} 
                key={product.id}
                className="card group cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.productCode}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
                    {product.productCode}
                  </h3>
                  <p className="text-sm text-gray-600">
                    السعة: {product.capacity}
                  </p>
                  <div className="pt-2">
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      عرض التفاصيل ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">لا توجد منتجات في هذا التصنيف</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-bold mb-4">هل تحتاج مساعدة في اختيار المنتج المناسب؟</h3>
          <p className="text-xl mb-6">تواصل معنا الآن وسنساعدك في اختيار الأنسب لاحتياجاتك</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:01222214318" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              01222214318
            </a>
            <a href="tel:01211114318" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              01211114318
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>&copy; 2026 مصنع نيو حمادة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

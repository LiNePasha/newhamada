'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Factory, Award, ShieldCheck, Users, Sparkles, TrendingUp, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { productsData } from '@/data/products'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredProducts = productsData.slice(0, 8)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [featuredProducts.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مصنع نيو حمادة",
    "image": "https://newhamada.com/images/logo_newhamada.webp",
    "url": "https://newhamada.com",
    "telephone": "+20-122-744-7390",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG",
      "addressLocality": "مصر"
    },
    "description": "خبرة تفوق 40 عامًا في صناعة العبوات البلاستيكية بجودة عالية وابتكار مستمر",
    "priceRange": "$$",
    "openingHours": "Sa-Th 09:00-18:00",
    "sameAs": []
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header / Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container-custom py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-4">
              <Image 
                src="/images/logo_newhamada.webp" 
                alt="نيو حمادة" 
                width={60} 
                height={60}
                className="object-contain w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-primary">مصنع نيو حمادة</h1>
                <p className="text-xs md:text-sm text-gray-600">40 عامًا من التميز</p>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="hover:text-primary transition-colors font-semibold">الرئيسية</Link>
              <Link href="/products" className="hover:text-primary transition-colors font-semibold">المنتجات</Link>
              <Link href="/about" className="hover:text-primary transition-colors font-semibold">من نحن</Link>
              <Link href="/contact" className="hover:text-primary transition-colors font-semibold">اتصل بنا</Link>
            </div>

            <div className="flex items-center gap-2">
              <a href="tel:01227447390" className="btn-primary flex items-center gap-2 text-sm md:text-base py-2 px-3 md:py-3 md:px-6">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">اتصل بنا</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors font-semibold py-2 px-4 hover:bg-gray-50 rounded-lg">الرئيسية</Link>
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors font-semibold py-2 px-4 hover:bg-gray-50 rounded-lg">المنتجات</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors font-semibold py-2 px-4 hover:bg-gray-50 rounded-lg">من نحن</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors font-semibold py-2 px-4 hover:bg-gray-50 rounded-lg">اتصل بنا</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-8 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Factory className="w-6 h-6 md:w-10 md:h-10" />
                <span className="text-yellow-300 font-bold text-xs md:text-lg">40+ عامًا من الخبرة</span>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-5 leading-tight">
                خبرة تفوق 40 عامًا في صناعة العبوات البلاستيكية
              </h2>
              <p className="text-sm md:text-lg lg:text-xl mb-5 md:mb-6 text-gray-100">
                بجودة عالية وابتكار مستمر لتلبية احتياجات جميع القطاعات
              </p>

              {/* Mini Carousel - Mobile Only */}
              <div className="lg:hidden mb-6">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="relative aspect-video bg-white/10 backdrop-blur-sm">
                    <Link href={`/products/${featuredProducts[currentSlide]?.id}`} className="block w-full h-full">
                      <Image
                        src={featuredProducts[currentSlide]?.image}
                        alt={featuredProducts[currentSlide]?.productCode}
                        fill
                        className="object-contain transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  
                  {/* Compact Controls */}
                  <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-2">
                    <button 
                      onClick={prevSlide}
                      className="bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </button>
                    
                    {/* Dots */}
                    <div className="flex gap-1.5">
                      {featuredProducts.slice(0, 5).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-1.5 rounded-full transition-all ${
                            index === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextSlide}
                      className="bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="mt-2 text-center">
                  <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full font-semibold mb-1">
                    {featuredProducts[currentSlide]?.category}
                  </span>
                  <p className="text-sm font-semibold">{featuredProducts[currentSlide]?.productCode} - {featuredProducts[currentSlide]?.capacity}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="/products" className="btn-secondary text-sm md:text-base text-center py-2.5 md:py-3 px-5 md:px-6">
                  استكشف منتجاتنا ({productsData.length})
                </Link>
                <a href="tel:01227447390" className="bg-white text-primary hover:bg-gray-100 font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                  <Phone className="w-4 h-4" />
                  <span>01227447390</span>
                </a>
              </div>
            </div>

            {/* Desktop Carousel */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {featuredProducts.slice(0, 4).map((product, index) => (
                    <Link 
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
                    >
                      <div className="relative h-32 mb-3">
                        <Image
                          src={product.image}
                          alt={product.productCode}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <p className="text-xs font-semibold text-center">{product.productCode}</p>
                      <p className="text-xs text-center text-white/80">{product.capacity}</p>
                    </Link>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h3 className="section-title text-center mb-12">لماذا مصنع نيو حمادة؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">الجودة المضمونة</h4>
              <p className="text-gray-600 group-hover:text-gray-100">
                منتجات عالية الجودة مصنوعة وفق أعلى المعايير وبخامات مختارة بعناية
              </p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">سهولة التعامل والإدارة</h4>
              <p className="text-gray-600 group-hover:text-gray-100">
                تجربة سهلة ومنظمة من الطلب حتى التسليم مع سرعة استجابة ومرونة
              </p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">خبرة 40+ عامًا</h4>
              <p className="text-gray-600 group-hover:text-gray-100">
                مصنع رائد في صناعة البلاستيك بخبرة طويلة والتزام بالجودة والدقة
              </p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">ابتكار مستمر</h4>
              <p className="text-gray-600 group-hover:text-gray-100">
                تطوير دائم للمنتجات باستخدام تقنيات حديثة وخامات متطورة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="section-title mb-6">نيو حمادة ليس مجرد مصنع... بل شريك يعتمد عليه</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  على مدار أكثر من <strong className="text-primary">40 عامًا من الخبرة</strong>، استطاع مصنع نيو حمادة 
                  أن يثبت مكانته كأحد المصانع الرائدة في صناعة البلاستيك، من خلال الالتزام بالجودة، 
                  والدقة في التنفيذ، وتقديم حلول عملية تلبي احتياجات مختلف القطاعات.
                </p>
                <p>
                  نعمل دائمًا على تطوير منتجاتنا باستخدام <strong className="text-secondary">خامات مختارة بعناية</strong>، 
                  وتقنيات إنتاج حديثة، لضمان منتج نهائي يجمع بين القوة، الاعتمادية، والسعر المناسب.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">40+</div>
                  <div className="text-sm text-gray-600">عامًا من الخبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-secondary mb-2">100%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">1000+</div>
                  <div className="text-sm text-gray-600">منتج متميز</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/logo_newhamada.webp" 
                  alt="مصنع نيو حمادة" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">شاهد منتجاتنا</h3>
              <p className="text-base md:text-lg text-gray-600">تعرف على جودة منتجاتنا وتنوعها</p>
            </div>
            
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="relative pb-[177.78%] md:pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X_Stn9WyIkk"
                  title="نيو حمادة - منتجاتنا"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد للتعامل مع الأفضل؟</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على أفضل الحلول لاحتياجاتك من العبوات البلاستيكية
          </p>
          <a href="tel:01227447390" className="btn-secondary inline-flex items-center gap-2 text-lg">
            <Phone className="w-6 h-6" />
            اتصل بنا الآن: 01227447390
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo_newhamada.webp" 
                  alt="نيو حمادة" 
                  width={60} 
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h4 className="font-bold text-xl">مصنع نيو حمادة</h4>
                  <p className="text-sm text-gray-400">40 عامًا من التميز</p>
                </div>
              </div>
              <p className="text-gray-400">
                شريكك الموثوق في صناعة العبوات البلاستيكية عالية الجودة
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">المنتجات</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">من نحن</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a href="tel:01227447390" className="hover:text-white transition-colors">01227447390</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>info@newhamada.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>مصر</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 مصنع نيو حمادة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

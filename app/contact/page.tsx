import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
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
              <Link href="/products" className="hover:text-primary transition-colors font-semibold">المنتجات</Link>
              <Link href="/about" className="hover:text-primary transition-colors font-semibold">من نحن</Link>
              <Link href="/contact" className="text-primary font-semibold">اتصل بنا</Link>
            </div>
            <div className="flex gap-2">
              <a href="tel:01222214318" className="btn-primary flex items-center gap-1 py-2 px-2 md:py-3 md:px-3">
                <Phone className="w-4 h-4" />
              </a>
              <a href="tel:01211114318" className="btn-primary flex items-center gap-1 py-2 px-2 md:py-3 md:px-3">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-100">نحن هنا لمساعدتك، تواصل معنا الآن</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تواصل معنا</h2>
              <p className="text-lg text-gray-700 mb-8">
                نسعد بتواصلك معنا في أي وقت. فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
              </p>

              <div className="space-y-6">
                <div className="card flex items-start gap-4 group hover:bg-primary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">الهاتف</h3>
                    <div className="flex flex-col gap-2">
                      <a href="tel:01222214318" className="text-lg font-semibold group-hover:underline">
                        01222214318
                      </a>
                      <a href="tel:01211114318" className="text-lg font-semibold group-hover:underline">
                        01211114318
                      </a>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-100 mt-1">
                      اتصل بنا مباشرة
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 group hover:bg-secondary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
                    <a href="mailto:info@newhamada.com" className="text-xl font-semibold group-hover:underline">
                      info@newhamada.com
                    </a>
                    <p className="text-gray-600 group-hover:text-gray-100 mt-1">
                      راسلنا عبر البريد
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 group hover:bg-primary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">الموقع</h3>
                    <a 
                      href="https://maps.app.goo.gl/JnzCgHYM6qgLCUfe8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-semibold group-hover:underline block"
                    >
                      مصر
                    </a>
                    <p className="text-gray-600 group-hover:text-gray-100 mt-1">
                      اضغط لفتح الموقع على الخريطة
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 group hover:bg-secondary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                    <p className="font-semibold">السبت - الخميس</p>
                    <p className="text-gray-600 group-hover:text-gray-100">9:00 صباحًا - 6:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and CTA */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/logo_newhamada.webp"
                    alt="مصنع نيو حمادة"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  مصنع نيو حمادة
                </h3>
                <p className="text-gray-700 mb-6">
                  40+ عامًا من الخبرة في صناعة العبوات البلاستيكية عالية الجودة. 
                  نحن ملتزمون بتقديم أفضل المنتجات والخدمات لعملائنا.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <a 
                      href="tel:01222214318" 
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      01222214318
                    </a>
                    <a 
                      href="tel:01211114318" 
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      01211114318
                    </a>
                  </div>
                  <Link 
                    href="/products" 
                    className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                  >
                    تصفح المنتجات
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">موقعنا على الخريطة</h3>
                <p className="text-gray-100 mb-6">
                  قم بزيارتنا أو شاهد موقعنا على خرائط Google
                </p>
                <a 
                  href="https://maps.app.goo.gl/JnzCgHYM6qgLCUfe8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  افتح الخريطة
                </a>
              </div>

              <div className="bg-gradient-to-br from-secondary to-gray-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">تابعنا على السوشيال ميديا</h3>
                <p className="text-gray-100 mb-6">
                  كن على اطلاع بآخر منتجاتنا وعروضنا الخاصة
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61585647893017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  تابعنا على فيسبوك
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">موقعنا</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37764837493!2d31.224509999999998!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTMnMjguMiJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مصنع نيو حمادة"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            لماذا تختار مصنع نيو حمادة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-3">40+</div>
              <h3 className="font-bold text-xl mb-2">عامًا من الخبرة</h3>
              <p className="text-gray-600">خبرة طويلة في صناعة البلاستيك</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-secondary mb-3">100%</div>
              <h3 className="font-bold text-xl mb-2">جودة مضمونة</h3>
              <p className="text-gray-600">منتجات بأعلى معايير الجودة</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-3">24/7</div>
              <h3 className="font-bold text-xl mb-2">دعم مستمر</h3>
              <p className="text-gray-600">فريقنا جاهز لمساعدتك دائمًا</p>
            </div>
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

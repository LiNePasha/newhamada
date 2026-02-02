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
            <a href="tel:01227447390" className="btn-primary flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">اتصل بنا</span>
            </a>
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
                    <a href="tel:01227447390" className="text-xl font-semibold group-hover:underline">
                      01227447390
                    </a>
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
                    <p className="text-xl font-semibold">مصر</p>
                    <p className="text-gray-600 group-hover:text-gray-100 mt-1">
                      نخدم جميع أنحاء مصر
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
                  <a 
                    href="tel:01227447390" 
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل الآن: 01227447390
                  </a>
                  <Link 
                    href="/products" 
                    className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                  >
                    تصفح المنتجات
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">هل تحتاج مساعدة فورية؟</h3>
                <p className="text-gray-100 mb-6">
                  فريق خدمة العملاء لدينا متاح دائمًا لمساعدتك. لا تتردد في التواصل معنا.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>استجابة سريعة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>دعم احترافي</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>خدمة في جميع أنحاء مصر</span>
                  </div>
                </div>
              </div>
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

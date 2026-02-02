import Link from 'next/link'
import Image from 'next/image'
import { Phone, Award, Target, Users, Lightbulb, ArrowRight } from 'lucide-react'

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-semibold">من نحن</Link>
              <Link href="/contact" className="hover:text-primary transition-colors font-semibold">اتصل بنا</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-xl text-gray-100">تعرف على قصتنا وقيمنا ورؤيتنا</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                نيو حمادة ليس مجرد مصنع... بل شريك يعتمد عليه
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                على مدار أكثر من <strong className="text-primary">40 عامًا من الخبرة</strong>، 
                استطاع مصنع نيو حمادة أن يثبت مكانته كأحد المصانع الرائدة في صناعة البلاستيك، 
                من خلال الالتزام بالجودة، والدقة في التنفيذ، وتقديم حلول عملية تلبي احتياجات مختلف القطاعات.
              </p>

              <p className="text-xl">
                نعمل دائمًا على تطوير منتجاتنا باستخدام <strong className="text-secondary">خامات مختارة بعناية</strong>، 
                وتقنيات إنتاج حديثة، لضمان منتج نهائي يجمع بين القوة، الاعتمادية، والسعر المناسب.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">الجودة</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                نلتزم بأعلى معايير الجودة في كل منتج نصنعه
              </p>
            </div>

            <div className="card text-center group hover:bg-secondary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">الابتكار</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                نطور منتجاتنا باستمرار لمواكبة احتياجات السوق
              </p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">العملاء أولاً</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                رضا عملائنا هو أولويتنا القصوى
              </p>
            </div>

            <div className="card text-center group hover:bg-secondary hover:text-white transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">الدقة</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                دقة في التصنيع والالتزام بالمواعيد
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-black mb-3">40+</div>
              <div className="text-xl text-gray-100">عامًا من الخبرة</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-3">100%</div>
              <div className="text-xl text-gray-100">رضا العملاء</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-3">1000+</div>
              <div className="text-xl text-gray-100">منتج متميز</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            هل تريد معرفة المزيد؟
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              اتصل بنا
            </Link>
            <Link href="/products" className="btn-secondary">
              تصفح المنتجات
            </Link>
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

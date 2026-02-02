import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, Package, ShieldCheck } from 'lucide-react'
import { productsData } from '@/data/products'

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productsData.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">المنتجات</Link>
            <span>/</span>
            <span className="text-gray-900">{product.productCode}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <div className="aspect-square relative bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.productCode}
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block text-sm bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {product.productCode}
              </h1>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {product.capacity && (
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-bold text-gray-800">السعة</h3>
                    </div>
                    <p className="text-3xl font-black text-primary">{product.capacity}</p>
                  </div>
                )}
                
                {product.productCode && (
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border-2 border-secondary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="w-6 h-6 text-secondary" />
                      <h3 className="text-lg font-bold text-gray-800">كود المنتج</h3>
                    </div>
                    <p className="text-3xl font-black text-secondary">{product.productCode}</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">مهتم بهذا المنتج؟</h3>
                <p className="mb-6 text-gray-100">
                  تواصل معنا الآن للحصول على عرض سعر وتفاصيل الطلب
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="tel:01222214318" 
                    className="btn-secondary inline-flex items-center gap-2 w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    01222214318
                  </a>
                  <a 
                    href="tel:01211114318" 
                    className="btn-secondary inline-flex items-center gap-2 w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    01211114318
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">منتجات ذات صلة</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  href={`/products/${relatedProduct.id}`} 
                  key={relatedProduct.id}
                  className="card group cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.productCode}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {relatedProduct.productCode}
                  </h3>
                  <p className="text-sm text-gray-600">{relatedProduct.capacity}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>&copy; 2026 مصنع نيو حمادة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import {
  Sparkles,
  Gift,
  Coffee,
  Palette,
  Heart,
  ShowerHead,
  Watch,
  Glasses,
  Flower2,
  Frame,
  Baby,
  SprayCan
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  const services = [
    {
      title: t('إكسسوارات البنات', 'Girls Accessories'),
      description: t('أرقى الحلي والزينة من الأساور والأقراط والخواتم والعقود بتصميمات بناتية ساحرة.', 'The finest ornaments and decorations of bracelets, earrings, rings, and necklaces with charming girlish designs.'),
      icon: <Sparkles className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('الأكواب السيراميك والمجات', 'Ceramic Mugs'),
      description: t('مجموعة واسعة من الأكواب والأكواب الحرارية بتصاميم تناسب كافة الأذواق وبجودة ممتازة.', 'A wide range of mugs and thermal mugs with designs suitable for all tastes and excellent quality.'),
      icon: <Coffee className="w-6 h-6 text-pink-brand" />,
      image: "/images/mugs.png"
    },
    {
      title: t('تشكيلات الهدايا', 'Gift Collections'),
      description: t('مجموعة متنوعة من الهدايا المميزة بأسعار الجملة لتناسب جميع الأذواق ومحلات الهدايا.', 'A diverse collection of premium gifts at wholesale prices to suit all tastes and gift shops.'),
      icon: <Gift className="w-6 h-6 text-pink-brand" />,
      image: "/images/gift_collection.png"
    },
    {
      title: t('إكسسوارات الشعر', 'Hair Accessories'),
      description: t('أطواق ومشابك شعر متألقة وتصاميم متنوعة تناسب المدارس والمناسبات اليومية.', 'Brilliant hairbands and clips and various designs suitable for schools and daily occasions.'),
      icon: <Heart className="w-6 h-6 text-pink-brand" />,
      image: "/images/hair_accessories.png"
    },
    {
      title: t('مكياج', 'Makeup'),
      description: t('تشكيلة مكياج بالجملة تشمل أساسيات التجميل ومنتجات يومية مختارة بعناية.', 'Wholesale makeup selection including beauty essentials and carefully chosen everyday products.'),
      icon: <Palette className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('كريمات وعناية بالبشرة', 'Skincare & Creams'),
      description: t('كريمات وعناية للبشرة بالجملة بمنتجات متنوعة تناسب مختلف الاحتياجات.', 'Wholesale creams and skincare with a variety of products for different needs.'),
      icon: <Sparkles className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('شامبويات', 'Shampoos'),
      description: t('شامبويات ومنتجات عناية بالشعر بالجملة بجودة ممتازة وأسعار تنافسية.', 'Wholesale shampoos and hair-care products with excellent quality and competitive prices.'),
      icon: <ShowerHead className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('ساعات ونظارات', 'Watches & Eyewear'),
      description: t('ساعات ونظارات بالجملة بتصاميم عصرية تناسب جميع الأذواق.', 'Wholesale watches and eyewear with modern designs for all tastes.'),
      icon: (
        <span className="flex items-center gap-1 text-pink-brand">
          <Watch className="w-5 h-5" />
          <Glasses className="w-5 h-5" />
        </span>
      ),
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('ورد صناعي وتحف منزلية', 'Artificial Flowers & Home Decor'),
      description: t('ورد صناعي وتحف منزلية بالجملة لإضافة لمسة جمالية للمنازل والمتاجر.', 'Wholesale artificial flowers and home decor pieces to add a beautiful touch to homes and shops.'),
      icon: <Flower2 className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('لوحات منزلية', 'Home Wall Art'),
      description: t('لوحات منزلية وديكورات حائط بالجملة بتصاميم أنيقة ومناسبة لمختلف المساحات.', 'Wholesale home wall art and decor with elegant designs for different spaces.'),
      icon: <Frame className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('مستحضرات الأطفال وحديثي الولادة', 'Baby & Newborn Products'),
      description: t('مستحضرات ومنتجات للأطفال وحديثي الولادة بالجملة بتركيبات لطيفة وآمنة.', 'Wholesale baby and newborn products with gentle and safe formulas.'),
      icon: <Baby className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: t('عطورات', 'Perfumes'),
      description: t('عطورات بالجملة بروائح مميزة وخيارات متنوعة تناسب جميع المناسبات.', 'Wholesale perfumes with distinctive scents and a variety of options for all occasions.'),
      icon: <SprayCan className="w-6 h-6 text-pink-brand" />,
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-brand/20">
      <section className="relative overflow-hidden py-32 sm:py-48 flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Family Line Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-brand/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-brand/40 via-transparent to-navy-brand/60"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div variants={fadeIn} className="mb-6 flex flex-col items-center">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-3xl mb-4 shadow-2xl border border-white/20">
              <img
                src="/logo.png"
                alt="Family Line Logo"
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase font-serif drop-shadow-lg mb-2">
              Family Line
            </h2>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 md:mb-6 drop-shadow-md leading-tight"
            variants={fadeIn}
          >
            {t('أناقة وتميز في عالم', 'Elegance and Distinction in')}{' '}
            <span className="text-pink-brand drop-shadow-sm block sm:inline mt-1 sm:mt-0">{t('الجمال', 'Beauty')}</span>
          </motion.h1>

          <motion.p
            className="mt-2 max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-gray-100 mb-8 md:mb-10 leading-relaxed font-medium drop-shadow px-4 sm:px-0"
            variants={fadeIn}
          >
            {t(
              'نقدم للسوق السوري أفضل خيارات الجملة المتنوعة من مستحضرات التجميل، الإكسسوارات، الهدايا، والمستلزمات المنزلية بتصاميم عصرية وجودة عالية تناسب ذوقكم الرفيع.',
              'We offer the Syrian market the best diverse wholesale options including cosmetics, accessories, gifts, and home essentials with trendy designs and high quality that suit your refined taste.'
            )}
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="bg-pink-brand text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-pink-brand transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('تصفح خدماتنا', 'Browse Services')}
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all shadow-sm transform hover:-translate-y-1"
            >
              {t('تواصل معنا', 'Contact Us')}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-brand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-brand mb-4">
              {t('خدماتنا', 'Our Services')}
            </h2>
            <div className="w-24 h-1 bg-pink-brand mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl overflow-hidden border border-pink-brand/10 bg-white shadow-sm hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index, 6) * 0.06, duration: 0.9 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-brand/40 to-navy-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 rtl:right-4 ltr:left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md text-pink-brand border border-pink-brand/10">
                    {service.icon}
                  </div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-xl font-extrabold text-navy-brand group-hover:text-pink-brand transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-100 transition-colors text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-pink-brand/80 bg-pink-brand/10 px-3 py-1 rounded-full">
                      {t('جملة', 'Wholesale')}
                    </span>
                    <Link
                      href="/services"
                      className="text-sm font-bold text-navy-brand group-hover:text-white transition-colors"
                    >
                      {t('عرض المزيد', 'View more')} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action / Features Section */}
      <section className="py-24 bg-gray-brand/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-brand/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-brand mb-4">
              {t('لماذا تختار Family Line؟', 'Why Choose Family Line?')}
            </h2>
            <div className="w-24 h-1 bg-pink-brand mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: <svg className="w-10 h-10 text-pink-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, title: t('توصيل سريع', 'Fast Delivery'), desc: t('إلى كافة المحافظات', 'To all governorates') },
              { icon: <svg className="w-10 h-10 text-pink-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: t('جودة مضمونة', 'Premium Quality'), desc: t('أفضل الخامات والمواد', 'Best materials') },
              { icon: <svg className="w-10 h-10 text-pink-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: t('أسعار تنافسية', 'Competitive Prices'), desc: t('عروض خاصة للجملة', 'Special wholesale offers') },
              { icon: <svg className="w-10 h-10 text-pink-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>, title: t('خدمة عملاء ممتازة', 'Excellent Support'), desc: t('دائماً في خدمتكم', 'Always at your service') },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center border border-pink-brand/10 hover:border-pink-brand/30 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, type: 'spring' }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-gray-brand/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-brand/20 transition-colors group-hover:scale-110 duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-navy-brand mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-navy-brand mb-6">
                {t('عن فاميلي لاين', 'About Family Line')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t(
                  'تأسست فاميلي لاين لتكون الخيار الأول في عالم الجملة للإكسسوارات والهدايا في السوق السوري. نحن نهتم بأدق التفاصيل لنوفر لعملائنا منتجات تجمع بين الأناقة العصرية والجودة العالية.',
                  'Family Line was established to be the first choice in the wholesale world of accessories and gifts in the Syrian market. We care about the finest details to provide our customers with products that combine modern elegance and high quality.'
                )}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-pink-brand font-bold hover:text-navy-brand transition-colors text-lg group"
              >
                {t('اكتشف المزيد عنا', 'Discover more about us')}
                <span className="rtl:mr-2 ltr:ml-2 group-hover:rtl:-translate-x-1 group-hover:ltr:translate-x-1 transition-transform rtl:rotate-180">→</span>
              </Link>
            </motion.div>

            <motion.div
              className="relative h-96 w-full rounded-3xl overflow-hidden bg-[#dddddd] shadow-2xl flex items-center justify-center p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src="/logo.png"
                alt="Family Line About Image"
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-brand text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-pink-brand/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-pink-brand/20 rounded-full blur-3xl"></div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('هل أنتم مستعدون للتميز؟', 'Are you ready to stand out?')}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t(
              'تواصل معنا الآن للتعرف على أحدث العروض والتشكيلات المتوفرة لدينا لطلبات الجملة.',
              'Contact us now to explore the latest offers and collections available for wholesale orders.'
            )}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-pink-brand text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-navy-brand transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('اطلب الآن', 'Order Now')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

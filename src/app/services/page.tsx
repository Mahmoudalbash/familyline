'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const servicesList = [
        {
            id: 1,
            title: t('إكسسوارات البنات', 'Girls Accessories'),
            description: t('أرقى الحلي والزينة من الأساور والأقراط والخواتم والعقود بتصميمات بناتية ساحرة.', 'The finest ornaments and decorations of bracelets, earrings, rings, and necklaces with charming girlish designs.'),
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: t('الأكواب السيراميك والمجات', 'Ceramic Mugs'),
            description: t('مجموعة واسعة من الأكواب والأكواب الحرارية بتصاميم تناسب كافة الأذواق وبجودة ممتازة.', 'A wide range of mugs and thermal mugs with designs suitable for all tastes and excellent quality.'),
            image: '/images/mugs.png',
        },
        {
            id: 3,
            title: t('تشكيلات الهدايا', 'Gift Collections'),
            description: t('مجموعة متنوعة من الهدايا المميزة بأسعار الجملة والمفرق لتناسب جميع الأذواق ومحلات الهدايا.', 'A diverse collection of premium gifts at wholesale and retail prices to suit all tastes and gift shops.'),
            image: '/images/gift_collection.png',
        },
        {
            id: 4,
            title: t('إكسسوارات الشعر', 'Hair Accessories'),
            description: t('أطواق ومشابك شعر متألقة وتصاميم متنوعة تناسب المدارس والمناسبات اليومية.', 'Brilliant hairbands and clips and various designs suitable for schools and daily occasions.'),
            image: '/images/hair_accessories.png',
        },
        {
            id: 5,
            title: t('مكياج', 'Makeup'),
            description: t('تشكيلة مكياج بالجملة والمفرق تشمل أساسيات التجميل ومنتجات يومية مختارة بعناية.', 'Wholesale and Retail makeup selection including beauty essentials and carefully chosen everyday products.'),
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: t('كريمات وعناية بالبشرة', 'Skincare & Creams'),
            description: t('كريمات وعناية للبشرة بالجملة والمفرق بمنتجات متنوعة تناسب مختلف الاحتياجات.', 'Wholesale and Retail creams and skincare with a variety of products for different needs.'),
            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 7,
            title: t('شامبوهات', 'Shampoos'),
            description: t('شامبوهات ومنتجات عناية بالشعر بالجملة والمفرق بجودة ممتازة وأسعار تنافسية.', 'Wholesale and Retail shampoos and hair-care products with excellent quality and competitive prices.'),
            image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 8,
            title: t('ساعات ونظارات', 'Watches & Eyewear'),
            description: t('ساعات ونظارات بالجملة والمفرق بتصاميم عصرية تناسب جميع الأذواق.', 'Wholesale and Retail watches and eyewear with modern designs for all tastes.'),
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 9,
            title: t('ورد صناعي وتحف منزلية', 'Artificial Flowers & Home Decor'),
            description: t('ورد صناعي وتحف منزلية بالجملة والمفرق لإضافة لمسة جمالية للمنازل والمتاجر.', 'Wholesale and Retail artificial flowers and home decor pieces to add a beautiful touch to homes and shops.'),
            image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 10,
            title: t('لوحات منزلية', 'Home Wall Art'),
            description: t('لوحات منزلية وديكورات حائط بالجملة والمفرق بتصاميم أنيقة ومناسبة لمختلف المساحات.', 'Wholesale and Retail home wall art and decor with elegant designs for different spaces.'),
            image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 11,
            title: t('مستحضرات الأطفال وحديثي الولادة', 'Baby & Newborn Products'),
            description: t('مستحضرات ومنتجات للأطفال وحديثي الولادة بالجملة والمفرق بتركيبات لطيفة وآمنة.', 'Wholesale and Retail baby and newborn products with gentle and safe formulas.'),
            image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 12,
            title: t('عطورات', 'Perfumes'),
            description: t('عطورات بالجملة والمفرق بروائح مميزة وخيارات متنوعة تناسب جميع المناسبات.', 'Wholesale and Retail perfumes with distinctive scents and a variety of options for all occasions.'),
            image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-brand/20 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-navy-brand mb-4">
                        {t('خدمات الجملة والمفرق لدينا', 'Our Wholesale and Retail Services')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
                        {t('نوفر لتجار الجملة والمفرق في سوريا تشكيلة شاملة من الإكسسوارات والهدايا بأفضل جودة وسعر.', 'We provide wholesale and retailrs in Syria with a comprehensive range of accessories and gifts with the best quality and price.')}
                    </p>
                    <div className="w-24 h-1 bg-pink-brand mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {servicesList.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2 }}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-brand/20 group-hover:bg-navy-brand/10 transition-colors"></div>
                            </div>
                            <div className="p-8 relative">
                                <div className="absolute -top-6 rtl:right-8 ltr:left-8 bg-pink-brand text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-md border-4 border-white">
                                    0{item.id}
                                </div>
                                <h2 className="text-2xl font-bold text-navy-brand mb-4 mt-2 group-hover:text-pink-brand transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}

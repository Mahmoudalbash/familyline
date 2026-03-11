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
            description: t('مجموعة متنوعة من الهدايا المميزة بأسعار الجملة لتناسب جميع الأذواق ومحلات الهدايا.', 'A diverse collection of premium gifts at wholesale prices to suit all tastes and gift shops.'),
            image: '/images/gift_collection.png',
        },
        {
            id: 4,
            title: t('إكسسوارات الشعر', 'Hair Accessories'),
            description: t('أطواق ومشابك شعر متألقة وتصاميم متنوعة تناسب المدارس والمناسبات اليومية.', 'Brilliant hairbands and clips and various designs suitable for schools and daily occasions.'),
            image: '/images/hair_accessories.png',
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
                        {t('خدمات الجملة لدينا', 'Our Wholesale Services')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
                        {t('نوفر لتجار الجملة في سوريا تشكيلة شاملة من الإكسسوارات والهدايا بأفضل جودة وسعر.', 'We provide wholesalers in Syria with a comprehensive range of accessories and gifts with the best quality and price.')}
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

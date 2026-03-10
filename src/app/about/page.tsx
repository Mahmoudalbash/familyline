'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-navy-brand text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-pink-brand/10 opacity-50"></div>
                <motion.div
                    className="max-w-4xl mx-auto px-4 text-center relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
                        {t('قصتنا في', 'Our Story at')} <span className="text-pink-brand">Family Line</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        {t(
                            'التميز والجودة في سوق الجملة السوري لاكسسوارات البنات.',
                            'Excellence and quality in the Syrian wholesale market for girls accessories.'
                        )}
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-navy-brand border-b-4 border-pink-brand pb-4 inline-block mb-8">
                                {t('رؤيتنا ورسالتنا', 'Our Vision and Mission')}
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    {t(
                                        'تأسست "فاميلي لاين" برؤية واضحة تهدف إلى تلبية احتياجات السوق السوري المتنامية من منتجات الاكسسوارات، الهدايا، والمجات بأسعار الجملة، دون المساومة على الجودة أو الأناقة.',
                                        'Family Line was established with a clear vision aimed at meeting the growing needs of the Syrian market for accessories, gifts, and mugs at wholesale prices, without compromising on quality or elegance.'
                                    )}
                                </p>
                                <p>
                                    {t(
                                        'نحن نؤمن بأن كل قطعة يجب أن تحمل لمسة من الجَمال الأنثوي العصري. لذلك، يعمل فريقنا جاهداً على اختيار أفضل التصاميم وتوفيرها لتجار التجزئة في كافة المحافظات السورية.',
                                        'We believe that every piece should carry a touch of modern feminine beauty. Therefore, our team works hard to choose the best designs and provide them to retailers in all Syrian governates.'
                                    )}
                                </p>
                                <p className="font-semibold text-navy-brand bg-pink-brand/10 p-4 border rtl:border-r-4 ltr:border-l-4 border-pink-brand rounded-lg">
                                    {t(
                                        'هدفنا هو أن نكون الشريك الموثوق الأول لكل متجر وتاجر يبحث عن التميز، الثقة، والمصداقية في السوق.',
                                        'Our goal is to be the first trusted partner for every store and trader looking for excellence, trust, and credibility in the market.'
                                    )}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Team working"
                                className="w-full h-64 object-cover rounded-3xl mt-12 shadow-md"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Company accessories"
                                className="w-full h-64 object-cover rounded-3xl mb-12 shadow-md"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}

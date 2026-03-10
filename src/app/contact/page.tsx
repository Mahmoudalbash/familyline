'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-brand/20 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-navy-brand mb-4">
                        {t('يسعدنا تواصلكم معنا', 'We Are Happy To Hear From You')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
                        {t('للاستفسارات عن المنتجات، الأسعار، أو عروض الجملة، لا تترددوا بالاتصال بنا.', 'For inquiries about products, prices, or wholesale offers, do not hesitate to contact us.')}
                    </p>
                    <div className="w-24 h-1 bg-pink-brand mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Info Sidebar */}
                    <motion.div
                        className="lg:col-span-1 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-navy-brand text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-brand/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10 text-pink-brand">
                                {t('معلومات التواصل', 'Contact Information')}
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <MapPin className="text-pink-brand" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{t('العنوان', 'Address')}</h4>
                                        <p className="text-gray-300 mt-1">{t('سوق الحريقة، دمشق، سوريا', 'Al-Hariqa Market, Damascus, Syria')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <Phone className="text-pink-brand" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{t('الهاتف', 'Phone')}</h4>
                                        <p className="text-gray-300 mt-1 ltr:font-mono">+963 000 000 000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <Mail className="text-pink-brand" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{t('البريد الإلكتروني', 'Email')}</h4>
                                        <p className="text-gray-300 mt-1">info@familyline.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Prominent Section in Contact Page */}
                            <div className="mt-10 pt-8 border-t border-gray-600/50">
                                <a
                                    href="https://wa.me/000000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-2xl font-bold transition-all hover:shadow-lg shadow-md transform hover:-translate-y-1"
                                >
                                    <MessageCircle size={28} />
                                    <span className="text-lg">{t('تواصلوا معنا على واتساب', 'Reach via WhatsApp')}</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-navy-brand mb-8 border-b-2 border-pink-brand/30 inline-block pb-2">
                            {t('أرسل لنا رسالة', 'Send us a message')}
                        </h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('الاسم الكريم', 'Full Name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/20 outline-none transition-all placeholder:text-gray-400 text-navy-brand bg-gray-50 focus:bg-white"
                                        placeholder={t('أدخل اسمك', 'Enter your name')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('البريد الإلكتروني أو رقم الهاتف', 'Email or Phone')}
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/20 outline-none transition-all placeholder:text-gray-400 text-navy-brand bg-gray-50 focus:bg-white ltr:font-sans"
                                        placeholder={t('للتواصل معك', 'For contact')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('نص الرسالة', 'Message')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/20 outline-none transition-all placeholder:text-gray-400 text-navy-brand bg-gray-50 focus:bg-white resize-none"
                                    placeholder={t('كيف يمكننا مساعدتك؟', 'How can we help you?')}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-navy-brand text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-brand transition-colors shadow-md w-full md:w-auto"
                                >
                                    {t('إرسال الرسالة', 'Send Message')}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

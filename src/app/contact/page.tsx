'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = React.useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send');

            setStatus('success');
            setFormData({ name: '', contact: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-brand/20 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
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
                        transition={{ duration: 1.2, delay: 0.2 }}
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
                                        <p className="text-gray-300 mt-1">{t('سوريا دمشق سوق الحمدية سوق النصر', 'Syria, Damascus, Al-Hamidiyah Market, Al-Nasr Market')}</p>
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
                        transition={{ duration: 1.2, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-navy-brand mb-8 border-b-2 border-pink-brand/30 inline-block pb-2">
                            {t('أرسل لنا رسالة', 'Send us a message')}
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('الاسم الكريم', 'Full Name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/20 outline-none transition-all placeholder:text-gray-400 text-navy-brand bg-gray-50 focus:bg-white"
                                        placeholder={t('أدخل اسمك', 'Enter your name')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('البريد الإلكتروني أو رقم الهاتف', 'Email or Phone')}
                                    </label>
                                    <input
                                        type="text"
                                        id="contact"
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
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
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/20 outline-none transition-all placeholder:text-gray-400 text-navy-brand bg-gray-50 focus:bg-white resize-none"
                                    placeholder={t('كيف يمكننا مساعدتك؟', 'How can we help you?')}
                                ></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`bg-navy-brand text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-brand transition-colors shadow-md w-full md:w-auto flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                                            {t('جاري الإرسال...', 'Sending...')}
                                        </>
                                    ) : (
                                        t('إرسال الرسالة', 'Send Message')
                                    )}
                                </button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-green-600 font-bold"
                                    >
                                        {t('تم إرسال الرسالة بنجاح!', 'Message sent successfully!')}
                                    </motion.p>
                                )}

                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-red-500 font-bold"
                                    >
                                        {t('حدث خطأ، يرجى المحاولة لاحقاً.', 'An error occurred, please try again.')}
                                    </motion.p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

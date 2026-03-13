'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, FileHeart, Heart } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-navy-brand text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-pink-brand tracking-tighter" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
                            Family Line
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t(
                                'الوجهة الأولى لاكسسوارات البنات، الهدايا، والأكواب في السوق السوري. نقدم لكم الجودة مع لمسة من الأناقة.',
                                'The premier destination for girls accessories, gifts, and mugs in the Syrian market. We provide quality with a touch of elegance.'
                            )}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-pink-brand relative inline-block">
                            {t('روابط سريعة', 'Quick Links')}
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-pink-brand rounded-full rtl:right-0 rtl:left-auto ltr:left-0"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: t('الرئيسية', 'Home'), href: '/' },
                                { label: t('خدماتنا', 'Services'), href: '/services' },
                                { label: t('من نحن', 'About Us'), href: '/about' },
                                { label: t('اتصل بنا', 'Contact Us'), href: '/contact' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-gray-300 hover:text-white hover:text-pink-brand transition-colors flex items-center gap-2">
                                        <span className="rtl:rotate-180 transform flex items-center justify-center">→</span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-pink-brand relative inline-block">
                            {t('تواصل معنا', 'Contact Us')}
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-pink-brand rounded-full rtl:right-0 rtl:left-auto ltr:left-0"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-pink-brand flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">
                                    {t('سوريا دمشق سوق الحمدية سوق نصري', 'Syria, Damascus, Al-Hamidiyah Market, Naser Market')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-pink-brand flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 ltr:font-mono">+963 969 900 904</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-pink-brand flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">info@familyline.com</span>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <a
                                    href="https://wa.me/000000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors font-medium text-sm"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {t('تواصل عبر الواتساب', 'WhatsApp Us')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 flex justify-center items-center text-center w-full">
                    <p className="text-gray-200 text-base font-bold flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
                        {t('صنع بحب', 'Made with')}
                        <Heart size={16} className="text-pink-brand fill-pink-brand mx-1" />
                        {t('من', 'by')}
                        <a href="https://zaytoon.site" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-brand transition-colors font-bold underline decoration-pink-brand/50 underline-offset-4">
                            {t('وكالة زيتون', 'Zaytoon Agency')}
                        </a>
                        {t('من أجل سوق الجملة السوري', 'for the Syrian wholesale market')}
                    </p>
                </div>
            </div>
        </footer>
    );
}

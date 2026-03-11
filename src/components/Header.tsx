'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const { language, toggleLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t('الرئيسية', 'Home') },
        { href: '/services', label: t('خدماتنا', 'Services') },
        { href: '/about', label: t('من نحن', 'About Us') },
        { href: '/contact', label: t('اتصل بنا', 'Contact') },
    ];

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="inline-block relative w-40 h-20 md:w-48 md:h-24">
                            <img
                                src="/logo.png"
                                alt="Family Line Logo"
                                className="w-full h-full object-contain relative top-2"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-16">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-navy-brand hover:text-pink-brand transition-colors font-medium text-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 rtl:space-x-reverse text-navy-brand hover:bg-gray-brand/50 px-3 py-2 rounded-full transition-colors"
                        >
                            <Globe size={20} />
                            <span className="font-semibold uppercase text-sm">{language === 'ar' ? 'EN' : 'عربي'}</span>
                        </button>
                    </div>

                    <div className="flex md:hidden items-center space-x-4 rtl:space-x-reverse">
                        <button
                            onClick={toggleLanguage}
                            className="text-navy-brand p-2"
                        >
                            <Globe size={20} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy-brand hover:text-pink-brand p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-brand"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-navy-brand hover:bg-pink-brand/10 hover:text-pink-brand rounded-md transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

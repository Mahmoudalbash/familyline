import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تواصل معنا - فاميلي لاين | Contact Us - Family Line',
  description: 'يسعدنا تواصلكم معنا. للاستفسارات عن المنتجات، الأسعار، أو عروض الجملة في سوريا.',
  openGraph: {
    title: 'تواصل معنا - فاميلي لاين',
    description: 'تواصل مع فريق فاميلي لاين في دمشق لطلبات الجملة.',
    url: 'https://familyline.site/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

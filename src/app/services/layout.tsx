import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خدماتنا ومنتجاتنا - فاميلي لاين | Services & Products - Family Line',
  description: 'مكياج، اكسسوار، كريمات، شامبوهات، هدايا، ساعات، نظارات وعطورات بالجملة في السوق السوري.',
  openGraph: {
    title: 'خدمات ومنتجات فاميلي لاين للجملة',
    description: 'تصفح قائمة منتجاتنا بالجملة المتوفرة للتوريد لكافة المحافظات السورية.',
    url: 'https://familyline.site/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

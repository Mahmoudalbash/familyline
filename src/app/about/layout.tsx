import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن - فاميلي لاين | About Us - Family Line',
  description: 'تعرف على فاميلي لاين، الوجهة الأولى في عالم الجملة والمفرق للإكسسوارات والهدايا في السوق السوري.',
  openGraph: {
    title: 'من نحن - فاميلي لاين',
    description: 'تعرف على فاميلي لاين لتجارة الجملة والمفرق ومسيرتنا في السوق السوري.',
    url: 'https://familyline.site/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

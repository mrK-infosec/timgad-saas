import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Toast } from '@/components/ui/Toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TIMGAD | Command Your Trading Floor',
  description: 'Project Management for Forex Traders',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0A0A0B] text-[#F5F5F7] antialiased selection:bg-[#C8A951] selection:text-[#0A0A0B]`}>
        <Providers>
          {children}
          <Toast />
        </Providers>
      </body>
    </html>
  );
}

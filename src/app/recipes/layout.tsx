import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../globals.css';
import HeaderBar from '@/components/HeaderBar';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} overflow-hidden`}>
    <HeaderBar/>
    <div className={'overflow-hidden'}>
      {children}
    </div>
    </body>
    </html>
  );
}

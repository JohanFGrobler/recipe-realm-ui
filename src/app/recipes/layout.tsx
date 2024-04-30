import {Inter} from 'next/font/google';
import '../globals.css';
import HeaderBar from '@/components/headerBar';
import AddButton from '@/components/addButton';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body className={inter.className}>
    <HeaderBar/>
    <div className={'relative overflow-hidden'}>
      {children}
      <AddButton action={console.log('fok')}/>
    </div>
    </body>
    </html>
  );
}

import './globals.css';
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';


import { Work_Sans } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Air BnB Clone',
  description: 'Air BnB Clone built with Next.js and Tailwind CSS',
};

const font = Work_Sans({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const currentUser = await getCurrentUser()
  
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar 
          currentUser={currentUser}
          />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

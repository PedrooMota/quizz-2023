import Image from 'next/image';
import { Quicksand } from 'next/font/google';

import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata = {
  title: 'Quizz 2023',
  description: 'Become the quiz master!'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-br'>
      <body className='bg-[#2b2737] p-4'>
        <main className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}>
          <h3 className="text-xl font-sans font-bold">Quizz 2023</h3>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
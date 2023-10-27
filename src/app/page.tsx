'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Components
import Button from '@/components/Button/Button';
// Homepage image
import HomepageImage from '@/assets/home-pic.png';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quizz');

  return (
    <div className='text-center'>
      <p className='text-white p-4'>
        Desafie-se e descubra como você está ligado aos assuntos de seu cotidiano.
      </p>
      <Image className='max-w-[700px] w-full rounded-[10px]' src={HomepageImage} alt='home-page' />
      <p className='text-[#9F50AC] pt-2 pb-8 text-[10px]'>Imagem meramente ilustrativa</p>
      <Button text='Iniciar Quiz' onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
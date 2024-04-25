import Container from '@/components/Container';
import Image from 'next/image';

export default function Card() {
  return (
    <Container animateHover className={'cursor-pointer absolute inset-0 grid grid-cols-1 grid-rows-4 xl:m-6 m-4 b bg-card rounded-xl shadow-md hover:shadow-xl max-w-5xl'}>
      {/*IMAGE*/}
      <div className={'relative h-0 w-full pt-80 row-span-3'}>
        <Image
          src={'/food.webp'}
          alt={'Picture of food'}
          layout={'fill'}
          className={'object-cover rounded-t-xl'}
        />
      </div>

      <div className={'grid grid-cols-3 grid-rows-2 h-full row-start-4 p-2'}>
        {/*TITLE*/}
        <h3 className={'mt-1 font-bold font-indieFlower text-4xl col-span-3 row-start-1 text-center text-zinc-800'}>
          Mince Pasta
        </h3>

        {/*TOTAL TIME*/}
        <p className={'text-xl row-start-2 col-start-3 flex justify-end items-end text-zinc-800 font-indieFlower'}>25 min</p>
      </div>
    </Container>
  );
}
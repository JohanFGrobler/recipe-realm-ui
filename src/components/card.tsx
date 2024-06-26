// Next
import Image from 'next/image';

// Components
import Container from '@/components/container';

// Icons
import {IoTimerOutline, IoPersonCircleOutline} from 'react-icons/io5';

// Types
type CardProps = {
  data: any
}

export default function Card({data}: CardProps) {
  return (
    <Container
      animateHover
      className={`
      group 
      cursor-pointer 
      absolute inset-0 
      grid grid-cols-1 grid-rows-4 
      xl:m-6 m-4 
      max-w-5xl
      bg-card
      rounded-xl
      shadow-md hover:shadow-xl
`}
    >
      {/*IMAGE*/}
      <div className={'relative h-0 w-full pt-80 row-span-3'}>
        <Image
          src={'/food.webp'} /*TODO: update with url*/
          alt={'Picture of food'}
          layout={'fill'}
          className={'object-cover rounded-t-xl'}
        />
      </div>

      <div className={'grid grid-cols-3 grid-rows-2 h-full row-start-4 p-2'}>
        {/*TITLE*/}
        <h3
          className={'group-hover:text-primary mt-1 font-bold font-indieFlower text-4xl col-span-3 row-start-1 text-center text-zinc-800'}>
          {data.name}
        </h3>

        {/*Additional Info*/}
        <div className={'row-start-2 col-start-1 col-span-3 flex justify-between items-end space-x-0 w-full'}>
          {/*TIME*/}
          <div className={'flex items-center gap-2 text-zinc-800'}>
            <IoPersonCircleOutline size={20}/> <span className={'text-xl font-indieFlower'}>{data.servings}</span>
          </div>

          {/*TIME*/}
          <div className={'flex items-center gap-2 text-2xl text-zinc-800 font-indieFlower'}>
            <span className={'text-xl font-indieFlower'}>{data.time} min </span><IoTimerOutline size={20}/>
          </div>
        </div>
      </div>
    </Container>
  );
}
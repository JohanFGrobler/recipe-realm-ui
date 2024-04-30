'use client';
// Next
import {useEffect} from 'react';
import Image from 'next/image';

// Framer
import {motion, useAnimation} from 'framer-motion';
import Container from '@/components/container';
import ButtonNav from '@/components/buttonNav';

export default function Landing() {
  // Hooks
  const controls = useAnimation();

  // Effects
  useEffect(() => {
    controls.start({scale: 1});
  }, [controls]);

  return (
    <main
      className={'relative overflow-hidden h-[100svh] w-[100svw] sm:h-screen sm:w-screen select-none'}
    >
      {/* BACKGROUND IMAGE */}
      <div className={'relative w-full h-full radial-vignette'}>
        <Image
          src="/landing.webp"
          alt="Image of chicken salad"
          fill
          className="object-cover z-0"
          sizes="100vw"
        />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
        className={'absolute top-0 lg:mt-35 mt-20 z-10 w-full flex flex-col gap-10 justify-center items-center space-y-4'}>
        <h1
          className="md:text-8xl text-5xl sm:max-w-screen-sm ms-5 text-center sm:leading-relaxed font-bold drop-shadow-md font-ptsans">
          Welcome to <span className={'font-lobster text-primary'}>Recipe Realm</span>
        </h1>
      </motion.div>

      {/* SIGN IN CONTAINER */}
      <Container
        className={'absolute right-0 md:mr-10 mr-0 md:top-1/2 bottom-0 transform md:-translate-y-1/2 -translate-y-full md:bg-opacity-50 bg-opacity-70 bg-zinc-900 lg:w-1/3 md:w-1/2 w-full h-fit md:rounded-xl p-4 flex flex-col gap-10 space-y-4 z-10'}
      >
        {/* HEADER */}
        <div className={'flex flex-col gap-10 w-full justify-center items-center'}>
          <h2 className={'md:text-5xl mt-5 text-3xl font-bold font-indieFlower md:leading-tight text-center max-w-4xl'}>
            Ready to elevate your <span className={'text-primary'}>culinary experience?</span>
          </h2>

          {/* DESCRIPTION */}
          <h3 className={'md:text-xl text-lg text-center max-w-3xl font-ptsans'}>
            Welcome to the ultimate destination for food lovers. Dive into a
            world of flavor, creativity, and inspiration with our recipe app.
          </h3>
        </div>

        {/*BUTTONS*/}
        <div className={'flex flex-col gap-3'}>
          <ButtonNav label={'Sign In'} href={'/api/auth/login'} filled/>
          <ButtonNav label={'Sign Up'} href={'/api/auth/register'}/>
        </div>
      </Container>
    </main>
  );
}

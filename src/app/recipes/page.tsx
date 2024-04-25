'use client';
import VirtualGrid from '@/components/Grid';

export default function Recipes() {
  return (
    <main className={'relative overflow-hidden w-[100svw] sm:h-screen sm:w-screen select-none'}>
      <VirtualGrid/>
    </main>
  );
}

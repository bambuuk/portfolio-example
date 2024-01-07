import Hero from '@/components/main/Hero'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex h-[850px] flex-col gap-20'>
        <Hero />
      </div>
    </main>
  )
}

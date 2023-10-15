import Catalogue from '@/components/Catalogue'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container mx-auto '>
      <Header />

      <Hero />
      <Catalogue />
      <Footer />
    </main>
  )
}

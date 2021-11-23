import Head from 'next/head'
import Welcome from '../components/Welcome'
import HowItWorks from '../components/HowItWorks'
import WhitePaper from '../components/WhitePaper'
import Stats from '../components/Stats'
import Blogs from '../components/Blogs'
import JoinUs from '../components/JoinUs'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Welcome/>
        <HowItWorks/>
        <WhitePaper/>
        <Stats/>
        <Blogs/>
        <JoinUs/>
        <Socials/>
        <Footer/>
      </main>
    </div>
  )
}

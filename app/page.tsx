import Image from 'next/image'
import HeroSection from './components/herosection/herosection'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import AboutSection from './components/aboutsection/aboutsection'
import ProjectsSection from './components/projectsSection/projectsSection'
import EmailSection from './components/EmailSection/EmailSection'

export default function Home() {
  return (
 <main className="flex min-h-screen flex-col bg-[#121212] ">
  <Navbar/>
<div className='container mx-auto px-12 py-4'>
<HeroSection />
<AboutSection/>
<ProjectsSection/>
<EmailSection/>
<Footer/>
</div>
 </main>
  )
}

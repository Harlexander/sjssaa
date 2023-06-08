import { Alert } from 'flowbite-react'
import AboutSection from '../components/About/AboutSection'
import QuestionSection from '../components/Contact/QuestionSection'
import EventSection from '../components/Events/EventSection'
import ExcosSections from '../components/Excos/ExcosSections'
import FooterSection from '../components/Footer/FooterSection'
import GallerySection from '../components/Gallery/GallerySection'
import HeroSection from '../components/HeroSection/HeroSection'
import IndexNavbar from '../components/Navbar/Navbar'
import ResponsilbiltySection from '../components/Responsibility/ResponsilbiltySection'

export default function Index() {
  return (
    <>
      <IndexNavbar/>
      <HeroSection/>
      <AboutSection/>
      <GallerySection/>
      <ResponsilbiltySection/>
      <EventSection/>
      <ExcosSections/>
      <QuestionSection/>
      <FooterSection/>
    </>
  )
}

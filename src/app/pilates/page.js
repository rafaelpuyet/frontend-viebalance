import Header from '@/components/pilates/Header';
import Hero from '@/components/pilates/Hero';
import AboutInstructor from '@/components/pilates/AboutInstructor';
import Course from '@/components/pilates/Course';
import WhoIsFor from '@/components/pilates/WhoIsFor';
import Testimonials from '@/components/pilates/Testimonials';
import ContactForm from '@/components/pilates/ContactForm';
import Footer from '@/components/pilates/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutInstructor />
      <Course />
      <WhoIsFor />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
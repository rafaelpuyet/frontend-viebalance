import Header from '@components/Header';
import Hero from '@components/pilates/Hero';
import AboutInstructor from '@components/pilates/AboutInstructor';
import Course from '@components/pilates/Course';
import WhoIsFor from '@components/pilates/WhoIsFor';
import Testimonials from '@components/pilates/Testimonials';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';

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
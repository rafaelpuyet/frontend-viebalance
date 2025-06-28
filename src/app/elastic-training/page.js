import Header from '@components/Header';
import Hero from '@components/elastic-training/Hero';
import AboutInstructor from '@components/AboutInstructor';
import Course from '@components/elastic-training/Course';
import WhoIsFor from '@components/elastic-training/WhoIsFor';
import Testimonials from '@components/elastic-training/Testimonials';
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
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutInstructor from '../components/AboutInstructor';
import Course from '../components/Course';
import WhoIsFor from '../components/WhoIsFor';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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
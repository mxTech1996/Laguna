'use client';

import AboutSection from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import ConsultingServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';
import CoreValueSection from '@/components/organisms/Values';
import WhyChooseUsSection from '@/components/organisms/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <CoreValueSection />
      <ProductsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ConsultingServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

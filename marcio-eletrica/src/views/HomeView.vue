<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ArticlesSection />
    <ContactSection />
    <Footer />
    <!-- <TestimonialsSection />
    
    <LocationSection />
     -->
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/FooterComponent.vue'
import ArticlesSection from '../components/ArticlesSection.vue'
/*import TestimonialsSection from './components/TestimonialsSection.vue'

import LocationSection from './components/LocationSection.vue'
 */

export default {
  name: 'App',
  components: {
    HeroSection,
    ServicesSection,
    ContactSection,
    Footer,
    ArticlesSection
    /* TestimonialsSection,

     LocationSection,
     */
  }
}
</script>

<style>
/* Adicione o estilo global aqui */
</style>

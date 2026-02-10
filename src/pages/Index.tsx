import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Globe, Award, Truck, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import GeneralInquiryDialog from '@/components/GeneralInquiryDialog';
import ExportMap from '@/components/ExportMap';
import CircularGallery from '@/components/CircularGallery';

// Import images
import heroBackground1 from '@/assets/herobackground1.jpg';
import heroBackground2 from '@/assets/herobackground2.jpg';
import aboutUsPic from '@/assets/aboutuspic.jpg';

// Import product images
import productPotatoes from '@/assets/products/productPotatoes.jpeg';
import productCarrots from '@/assets/products/productCarrots.jpeg';
import productGarlic from '@/assets/products/productGarlic.jpeg';
import productGrapefruit from '@/assets/products/productGrapefruit.jpeg';
import productGrapes from '@/assets/products/productGrapes.jpeg';
import productLemon from '@/assets/products/productLemon.jpeg';
import productMandarinMerav from '@/assets/products/productMandarin(Merav).jpeg';
import productMandarinGoldenNugget from '@/assets/products/productMandarin(Golden_Nugget).jpeg';
import productMandarinMurcott from '@/assets/products/productMandarin(Murcott).jpeg';
import productOrangesNavel from '@/assets/products/productOranges(Navel).jpeg';
import productOrangesValencia from '@/assets/products/productOranges(Valencia).jpeg';
import productPeanuts from '@/assets/products/productPeanuts.jpeg';
import productPomegranate from '@/assets/products/productPomegranate.jpeg';
import productStrawberry from '@/assets/products/productStrawberry.jpeg';
import productSweetPotatoes from '@/assets/products/productSweetPotatoes.jpeg';
import productGreenOnions from '@/assets/products/productGreenOnions.jpeg';

// Import all images from carou folder
const carouImages = import.meta.glob('/src/assets/carou/*', { eager: true, import: 'default' }) as Record<string, string>;
const carouImageArray = Object.values(carouImages);

const heroImages = [heroBackground1, heroBackground2];

const products = [
  {
    name: 'Premium Potatoes',
    description: 'High-quality Egyptian potatoes, carefully selected and graded for export markets.',
    image: productPotatoes,
    usage: 'Fresh consumption & Processing',
    varieties: 'Cara, Spunta, Diamant, Colomba, Hermes, Lady Rosetta',
    exportDates: 'End of Jan - Mid-Jun 2026',
  },
  {
    name: 'Carrots',
    description: 'Fresh, crisp carrots with vibrant orange color, rich in beta-carotene and perfect for export markets.',
    image: productCarrots,
    usage: 'Fresh consumption & Processing',
  },
  {
    name: 'Garlic',
    description: 'Premium Egyptian garlic with strong flavor and aroma, carefully cured and packed for export.',
    image: productGarlic,
    usage: 'Culinary & Export',
    exportDates: 'Beginning of Mar - Mid-Apr 2026',
  },
  {
    name: 'Grapefruit',
    description: 'Fresh, tangy grapefruits with perfect balance of sweetness and acidity, ideal for fresh consumption.',
    image: productGrapefruit,
    usage: 'Fresh market & Juice production',
  },
  {
    name: 'Grapes',
    description: 'Sweet, juicy grapes from Egypt\'s vineyards, available in multiple varieties for fresh consumption.',
    image: productGrapes,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of May - End of Jun 2026',
  },
  {
    name: 'Lemons',
    description: 'Fresh, zesty lemons with high juice content, perfect for culinary use and juice production.',
    image: productLemon,
    usage: 'Culinary & Juice production',
  },
  {
    name: 'Mandarin (Merav)',
    description: 'Sweet and seedless Merav mandarins, easy to peel and perfect for fresh consumption.',
    image: productMandarinMerav,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Mandarin (Golden Nugget)',
    description: 'Premium Golden Nugget mandarins with exceptional sweetness and rich flavor.',
    image: productMandarinGoldenNugget,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Mandarin (Murcott)',
    description: 'Delicious Murcott mandarins with perfect balance of sweetness and tanginess.',
    image: productMandarinMurcott,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Oranges (Navel)',
    description: 'Premium Navel oranges, seedless and easy to peel, perfect for fresh consumption.',
    image: productOrangesNavel,
    usage: 'Fresh market & Juice production',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Oranges (Valencia)',
    description: 'Juicy Valencia oranges with high juice content, ideal for both fresh consumption and juice production.',
    image: productOrangesValencia,
    usage: 'Fresh market & Juice production',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Peanuts',
    description: 'Premium quality peanuts, carefully shelled and packed for export markets.',
    image: productPeanuts,
    usage: 'Snacking & Processing',
  },
  {
    name: 'Pomegranates',
    description: 'Ruby-red pomegranates with exceptional flavor, hand-selected for premium quality and export.',
    image: productPomegranate,
    usage: 'Fresh market & Juice production',
  },
  {
    name: 'Strawberries',
    description: 'Fresh, sweet strawberries grown in optimal conditions, carefully packed to maintain freshness.',
    image: productStrawberry,
    usage: 'Fresh market & Export',
  },
  {
    name: 'Sweet Potatoes',
    description: 'Naturally sweet and nutritious sweet potatoes, rich in vitamins and perfect for diverse markets.',
    image: productSweetPotatoes,
    usage: 'Fresh consumption & Processing',
  },
  {
    name: 'Green Onions',
    description: 'Fresh spring onions grown in fertile Nile Delta soil, packed for freshness.',
    image: productGreenOnions,
    usage: 'Culinary & Export',
    exportDates: 'End of Feb - End of Apr 2026',
  },
];

// Create gallery items from carou images
const galleryItems = carouImageArray.map((imagePath, index) => ({
  image: imagePath,
  text: `Image ${index + 1}`
}));

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '20+', label: 'Countries Served' },
  { value: '10K+', label: 'Tons Exported Yearly' },
  { value: '100%', label: 'Quality Guarantee' },
];

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting premium produce to markets across Europe, Asia, and the Middle East.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'All products meet international quality standards and certifications.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Temperature-controlled shipping ensuring freshness from farm to destination.',
  },
  {
    icon: Shield,
    title: 'Food Safety',
    description: 'Strict adherence to global food safety protocols and traceability.',
  },
];

const Index = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <HeroCarousel images={heroImages} interval={6000} />
        
        <div className="relative z-10 container-custom text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            From Egypt's Finest Farms
            <br />
            <span className="text-accent">To Your Table</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Ahmed Abdalla Nanah — your trusted partner for premium quality potatoes 
            and citrus fruits, delivering excellence to global markets since 1990.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="accent" size="xl" onClick={() => handleNavClick('#products')}>
              Explore Products
            </Button>
            <Button variant="hero" size="xl" onClick={() => handleNavClick('#contact')}>
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleNavClick('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <AnimatedText
                tag="span"
                className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                About Us
              </AnimatedText>
              <AnimatedText
                tag="h2"
                delay={0.1}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              >
                A Legacy of Quality Since 1990
              </AnimatedText>
              <AnimatedText delay={0.2} className="font-body text-muted-foreground leading-relaxed mb-6">
                For over three decades, Ahmed Abdalla Nanah has been a cornerstone of Egyptian 
                agricultural exports. Based in Cairo, we specialize in sourcing and exporting 
                the finest potatoes, citrus fruits, and vegetables from Egypt's most fertile regions.
              </AnimatedText>
              <AnimatedText delay={0.3} className="font-body text-muted-foreground leading-relaxed mb-8">
                Our commitment to quality, reliability, and customer satisfaction has made us 
                a preferred partner for importers and distributors across more than 20 countries.
              </AnimatedText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="default" size="lg" onClick={() => handleNavClick('#contact')}>
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutUsPic}
                  alt="Egyptian farmland"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg">
                <p className="font-display text-3xl font-bold text-primary mb-1">30+</p>
                <p className="font-body text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Circular Gallery Section */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container-custom">
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery 
              bend={0} 
              textColor="#1a1a1a" 
              borderRadius={0.05} 
              scrollEase={0.02} 
              items={galleryItems}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              tag="span"
              className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Our Products
            </AnimatedText>
            <AnimatedText
              tag="h2"
              delay={0.1}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Premium Egyptian Produce
            </AnimatedText>
            <AnimatedText delay={0.2} className="font-body text-muted-foreground leading-relaxed">
              We export carefully selected agricultural products that meet the highest 
              international standards for quality, freshness, and food safety.
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard
                key={product.name}
                {...product}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/products">
              <Button
                variant="default"
                size="lg"
                className="mx-auto"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Export/Features Section */}
      <section id="export" className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              tag="span"
              className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Why Choose Us
            </AnimatedText>
            <AnimatedText
              tag="h2"
              delay={0.1}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              Your Trusted Export Partner
            </AnimatedText>
            <AnimatedText delay={0.2} className="font-body text-primary-foreground/80 leading-relaxed">
              We combine decades of expertise with modern logistics to deliver 
              the best Egyptian produce to markets worldwide.
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Export Map */}
          <div className="mt-16">
            <AnimatedText
              tag="h3"
              delay={0.3}
              className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8 text-center"
            >
              Our Global Export Network
            </AnimatedText>
            <ExportMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-3xl p-10 md:p-16 text-center shadow-lg border border-border"
          >
            <AnimatedText
              tag="h2"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Ready to Partner With Us?
            </AnimatedText>
            <AnimatedText delay={0.1} className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you're looking for premium potatoes, fresh citrus, or other Egyptian produce, 
              we're here to serve your needs. Contact us today for inquiries and quotations.
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GeneralInquiryDialog>
                <Button variant="accent" size="xl">
                  Inquire Now
                </Button>
              </GeneralInquiryDialog>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

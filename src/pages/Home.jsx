import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChoose";

import WhatsAppButton from "../components/layout/WhatsAppButton";
import Footer from "../components/layout/Footer";
import Industries from "../components/sections/Industries";
import About from "../components/sections/About";
import QuotePopup from "../components/layout/QuotePopup";

const Home = () => {

  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-darkbg text-white font-sans">

      <Navbar openQuote={() => setQuoteOpen(true)} />

      <Hero openQuote={() => setQuoteOpen(true)} />

      <About />
      <Stats />
      <Services />
      <Industries />
      <WhyChoose />
      
      <WhatsAppButton />
      <Footer />

      <QuotePopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

    </div>
  );
};

export default Home;
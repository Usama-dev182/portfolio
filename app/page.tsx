import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import SingleTestimonial from "@/components/Testimonials/SingleTestimonial";
import Video from "@/components/Video";
import WorkSlider from "@/components/Work slider/WorkSlider";
import { Inter } from "@next/font/google";
import Wework from "@/components/Wework/index";
import UpdatedTestimonial from "@/components/UpdatedTestimonial/index";
import FAQ from "@/components/FAQ/index";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <AboutSectionOne />
      <Features />
      <Video />
      <AboutSectionTwo />
      <Wework />
      {/* <Testimonials /> */}
      <Pricing />
      <UpdatedTestimonial />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}

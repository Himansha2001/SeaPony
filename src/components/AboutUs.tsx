import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".about-content",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative min-h-screen w-screen overflow-hidden bg-black px-5 py-32 text-blue-50"
    >
      <div className="container mx-auto">
        <AnimatedTitle title="About Us" className="mb-16 text-center" />
        
        <div className="about-content grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg border border-violet-300/20 bg-violet-300/5 p-8">
              <h2 className="special-font mb-4 text-3xl">Our Vision</h2>
              <p className="font-robert-regular leading-relaxed">
                We aspire to be a leading force in interactive gaming, digital fashion, and virtual experiences. 
                Our vision is to create next-generation virtual worlds where players, businesses, and creators 
                can seamlessly connect, explore, and innovate. Through cutting-edge game development, AI-driven 
                storytelling, and virtual economies, we want to shape the future of interactive entertainment, 
                making it more accessible, inclusive, and immersive than ever before.
              </p>
            </div>

            <div className="rounded-lg border border-violet-300/20 bg-violet-300/5 p-8">
              <h2 className="special-font mb-4 text-3xl">Who We Are</h2>
              <p className="font-robert-regular leading-relaxed">
                Founded in August 2022, Sea Pony Studios Pvt Ltd is a cutting edge video game development 
                studio dedicated to crafting immersive and engaging experiences. We specialize in developing 
                high-quality games and avatar clothing, helping businesses and brands tap into the vast 
                potential of the metaverse.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border border-violet-300/20 bg-violet-300/5 p-8">
              <h2 className="special-font mb-4 text-3xl">Our Mission</h2>
              <p className="font-robert-regular leading-relaxed">
                Sea Pony Studios is not just a game development company. We are a driving force for 
                Sri Lanka's digital transformation. Our mission is to nurture and uplift Sri Lankan talent, 
                providing opportunities for local developers, artists, and designers to thrive in the global 
                gaming market.
              </p>
              <p className="font-robert-regular mt-4 leading-relaxed">
                We are committed to fostering a strong gaming and tech ecosystem, supporting education, 
                skill development, and international collaboration. By positioning Sri Lanka as a hub for 
                digital innovation, we aim to create a lasting impact on the country's economic growth 
                and technological advancement.
              </p>
            </div>

            <div className="rounded-lg border border-violet-300/20 bg-violet-300/5 p-8">
              <h2 className="special-font mb-4 text-3xl">Our Team</h2>
              <p className="font-robert-regular leading-relaxed">
                A passionate collective of designers, developers, and storytellers, we bring imagination 
                to life through immersive experiences. United by creativity and innovation, we build 
                worlds that inspire and engage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
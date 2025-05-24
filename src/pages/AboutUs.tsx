import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { AnimatedTitle } from "@/components/animated-title";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const GlowingBorder = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-lg p-[1px] transition-all duration-300 hover:scale-[1.02]">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 opacity-75 blur-lg transition-all duration-300 group-hover:opacity-100" />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500" />
    <div className="relative rounded-lg bg-black p-8">
      {children}
    </div>
  </div>
);

const TeamMember = () => (
  <div className="relative mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500/10 to-blue-500/10 p-1">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-20" />
    <div className="relative flex flex-col items-center gap-6 rounded-xl bg-black/90 p-8 md:flex-row">
      <div className="relative h-48 w-48 overflow-hidden rounded-xl">
        <div className="absolute -inset-1 animate-spin-slow bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 [animation-duration:3s]" />
        <div className="absolute inset-1 rounded-xl bg-black">
          <img
            src="/img/creative-director.jpg"
            alt="Creative Director"
            className="size-full rounded-xl object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h3 className="special-font mb-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-2xl text-transparent">
          Anthony Lambert
        </h3>
        <p className="font-robert-regular text-lg text-blue-300">Creative Director</p>
        <p className="mt-4 font-robert-regular text-blue-100">
          With over a decade of experience in game development and digital art, 
          Anthony leads our creative vision and ensures that every project pushes 
          the boundaries of innovation and player engagement.
        </p>
        <div className="mt-4 flex justify-center gap-4 md:justify-start">
          <a
            href="https://twitter.com/seaponystudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/seaponystudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const AboutUsPage = () => {
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

      // Animate cards sequentially
      gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-black via-violet-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
      <Navbar />
      
      <main className="relative">
        {/* Decorative Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-20 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute right-0 top-40 h-96 w-96 animate-pulse rounded-full bg-violet-500/20 blur-[100px]" />
        </div>

        <section
          ref={sectionRef}
          id="about-us"
          className="relative min-h-screen w-screen px-5 py-32 text-blue-50"
        >
          <div className="container mx-auto">
            <Link to="/" className="group mb-8 inline-block">
              <Button
                leftIcon={TiLocationArrow}
                containerClass="bg-gradient-to-r from-violet-500 to-blue-500 group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300 rotate-180"
              >
                Back to Home
              </Button>
            </Link>

            <AnimatedTitle title="About Us" className="mb-16 text-center" />
            
            <div className="about-content grid gap-16 md:grid-cols-2">
              <div className="space-y-8">
                <div className="card group">
                  <GlowingBorder>
                    <div className="relative">
                      <h2 className="special-font mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl text-transparent">
                        Our Vision
                      </h2>
                      <p className="font-robert-regular leading-relaxed text-blue-100">
                        We aspire to be a leading force in interactive gaming, digital fashion, and virtual experiences. 
                        Our vision is to create next-generation virtual worlds where players, businesses, and creators 
                        can seamlessly connect, explore, and innovate.
                      </p>
                      <p className="font-robert-regular mt-4 leading-relaxed text-blue-200">
                        Through cutting-edge game development, AI-driven storytelling, and virtual economies, 
                        we want to shape the future of interactive entertainment, making it more accessible, 
                        inclusive, and immersive than ever before.
                      </p>
                    </div>
                  </GlowingBorder>
                </div>

                <div className="card group">
                  <GlowingBorder>
                    <div className="relative">
                      <h2 className="special-font mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-4xl text-transparent">
                        Who We Are
                      </h2>
                      <p className="font-robert-regular leading-relaxed text-blue-100">
                        Founded in August 2022, Sea Pony Studios Pvt Ltd is a cutting edge video game development 
                        studio dedicated to crafting immersive and engaging experiences.
                      </p>
                      <p className="font-robert-regular mt-4 leading-relaxed text-blue-200">
                        We specialize in developing high-quality games and avatar clothing, helping businesses 
                        and brands tap into the vast potential of the metaverse.
                      </p>
                    </div>
                  </GlowingBorder>
                </div>
              </div>

              <div className="space-y-8">
                <div className="card group">
                  <GlowingBorder>
                    <div className="relative">
                      <h2 className="special-font mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl text-transparent">
                        Our Mission
                      </h2>
                      <p className="font-robert-regular leading-relaxed text-blue-100">
                        Sea Pony Studios is not just a game development company. We are a driving force for 
                        Sri Lanka's digital transformation. Our mission is to nurture and uplift Sri Lankan talent, 
                        providing opportunities for local developers, artists, and designers to thrive in the global 
                        gaming market.
                      </p>
                      <p className="font-robert-regular mt-4 leading-relaxed text-blue-200">
                        We are committed to fostering a strong gaming and tech ecosystem, supporting education, 
                        skill development, and international collaboration. By positioning Sri Lanka as a hub for 
                        digital innovation, we aim to create a lasting impact on the country's economic growth 
                        and technological advancement.
                      </p>
                    </div>
                  </GlowingBorder>
                </div>

                <div className="card group">
                  <GlowingBorder>
                    <div className="relative">
                      <h2 className="special-font mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-4xl text-transparent">
                        Our Team
                      </h2>
                      <p className="font-robert-regular leading-relaxed text-blue-100">
                        A passionate collective of designers, developers, and storytellers, we bring imagination 
                        to life through immersive Roblox experiences.
                      </p>
                      <p className="font-robert-regular mt-4 leading-relaxed text-blue-200">
                        United by creativity and innovation, we build worlds that inspire and engage.
                      </p>
                      <TeamMember />
                    </div>
                  </GlowingBorder>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}; 
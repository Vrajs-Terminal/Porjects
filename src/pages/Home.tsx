import { motion } from 'framer-motion';
import { developerInfo } from '@/data/developer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases developer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with video background */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
              className="w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-sd_960_540_25fps.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-light tracking-wide mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                {developerInfo.availability}
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {developerInfo.name.toUpperCase()}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {developerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {developerInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-sm font-light tracking-wide hover:bg-white/90 transition-colors"
                >
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 text-white rounded-sm font-light tracking-wide hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  What I Do
                </h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  Specialized in creating user-centric web experiences
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-8 border border-border rounded-sm hover:border-foreground/20 transition-colors group">
                  <Code className="size-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-xl font-light mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Building responsive, performant web applications using HTML, CSS, JavaScript, and React.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-border rounded-sm hover:border-foreground/20 transition-colors group">
                  <Palette className="size-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-xl font-light mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Creating intuitive interfaces with focus on usability, navigation design, and user experience.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="p-8 border border-border rounded-sm hover:border-foreground/20 transition-colors group">
                  <Smartphone className="size-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-xl font-light mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Ensuring seamless experiences across all devices with mobile-first approach.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of my recent work
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}

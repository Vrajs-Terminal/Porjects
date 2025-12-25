import { motion } from 'framer-motion';
import { Linkedin, Github, GraduationCap, Award, Code2 } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * About page with developer biography and professional information
 * Features skills, education, and certifications
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}. ${developerInfo.biography.split('\n\n')[0]}`}
        image={developerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {developerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Profile Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center text-white/80 p-8">
                    <div className="text-8xl font-extralight mb-4">
                      {developerInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="text-lg font-light">{developerInfo.tagline}</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {developerInfo.socialLinks.github && (
                    <a
                      href={developerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a
                      href={developerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {developerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {developerInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* Biography */}
                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{developerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-12">
                Technical Skills
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-5 text-muted-foreground" />
                    <h3 className="text-lg font-light">Programming</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developerInfo.skills.programming.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm font-light bg-background border border-border rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-5 text-muted-foreground" />
                    <h3 className="text-lg font-light">Web Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developerInfo.skills.webTech.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm font-light bg-background border border-border rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-5 text-muted-foreground" />
                    <h3 className="text-lg font-light">Frameworks & Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developerInfo.skills.frameworks.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm font-light bg-background border border-border rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="size-6 text-muted-foreground" />
                    <h2 className="text-2xl font-light tracking-wide">Education</h2>
                  </div>
                  <div className="border-l-2 border-border pl-6 space-y-2">
                    <h3 className="text-lg font-light">{developerInfo.education}</h3>
                    <p className="text-muted-foreground font-light">{developerInfo.expectedGraduation}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Certifications */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Award className="size-6 text-muted-foreground" />
                    <h2 className="text-2xl font-light tracking-wide">Certifications</h2>
                  </div>
                  <div className="space-y-3">
                    {developerInfo.certifications.map((cert, index) => (
                      <div key={index} className="border-l-2 border-border pl-6">
                        <p className="font-light">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
                Soft Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {developerInfo.softSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 text-sm font-light border border-border rounded-full hover:bg-accent transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

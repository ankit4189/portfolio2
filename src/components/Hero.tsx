import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hero content
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.3"
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.3"
    )
    .fromTo('.hero-social', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, 
      "-=0.5"
    );

    // Typewriter effect
    const words = ['Web Developer', 'Student', 'Problem Solver', 'Tech Enthusiast'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentWord = words[wordIndex];
      const typewriterElement = typewriterRef.current;

      if (!typewriterElement) return;

      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    setTimeout(typeWriter, 2000);

    // Floating animation for chevron
    gsap.to('.chevron-float', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Ankit</span>
          </h1>
          
          <h2 className="hero-subtitle text-2xl md:text-3xl font-light mb-8 text-gray-300">
            I'm a <span ref={typewriterRef} className="text-blue-400 font-medium"></span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="hero-description text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate computer science student crafting innovative web solutions. 
            I love turning complex problems into simple, beautiful designs that make a difference.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover-lift neon-glow"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 hover-lift"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="hero-social flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 glass rounded-full hover:bg-blue-600/20 transition-all duration-300 hover-lift">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 glass rounded-full hover:bg-blue-600/20 transition-all duration-300 hover-lift">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ankit@example.com" 
               className="p-3 glass rounded-full hover:bg-blue-600/20 transition-all duration-300 hover-lift">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="chevron-float absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
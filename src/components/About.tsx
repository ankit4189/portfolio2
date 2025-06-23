import React, { useEffect } from 'react';
import { BookOpen, Code, Coffee, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const About: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.about-image', 
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo('.about-text', 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo('.about-stat', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, 
      "-=0.3"
    );
  }, []);

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: BookOpen, label: 'Technologies Learned', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
    { icon: Zap, label: 'Years of Experience', value: '2+' }
  ];

  return (
    <section id="about" className="section py-20 bg-slate-900/50">
      <div className="about-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey as a passionate developer and lifelong learner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-image">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-1">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold gradient-text">AA</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-600/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Passionate Developer & Student
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm Ankit Acharya, a dedicated computer science student with a burning passion for 
              web development and problem-solving. My journey in tech began with curiosity and 
              has evolved into a commitment to creating meaningful digital experiences.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Currently pursuing my degree while building real-world projects, I specialize in 
              modern web technologies and love exploring new frameworks and tools. From interactive 
              games to complex web applications, I enjoy every aspect of the development process.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat text-center glass rounded-lg p-6 hover-lift">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
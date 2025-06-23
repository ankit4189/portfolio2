import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Skills: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.skill-category', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Animate skill bars
    gsap.fromTo('.skill-bar', 
      { width: '0%' },
      { 
        width: (index, target) => target.getAttribute('data-width') + '%',
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 60%'
        }
      }
    );
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'API Development', level: 75 }
      ]
    },
    {
      title: 'Design & Animation',
      skills: [
        { name: 'UI/UX Design', level: 70 },
        { name: 'GSAP', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'CSS Animations', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section py-20">
      <div className="skills-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category glass rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="skill-bar bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Always Learning</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development. Currently 
              diving deeper into advanced React patterns, serverless architecture, and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
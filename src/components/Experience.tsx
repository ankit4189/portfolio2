import React, { useEffect } from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';

const Experience: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience-container',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.timeline-item', 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const experiences = [
    {
      type: 'education',
      title: 'Bachelor in Computer Science',
      organization: 'University of Technology',
      location: 'New York, NY',
      period: '2022 - Present',
      description: 'Pursuing a comprehensive computer science degree with focus on software engineering, algorithms, and web development. Maintaining a GPA of 3.8/4.0.',
      achievements: [
        'Dean\'s List for academic excellence',
        'President of Web Development Club',
        'Completed 15+ programming projects'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer Intern',
      organization: 'TechStart Solutions',
      location: 'Remote',
      period: 'Summer 2024',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers on client projects and gained hands-on experience in agile development.',
      achievements: [
        'Built 3 client websites from scratch',
        'Improved page load speeds by 40%',
        'Learned modern deployment practices'
      ]
    },
    {
      type: 'project',
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Creating custom websites and web applications for small businesses and individuals. Specializing in modern, responsive designs with focus on user experience.',
      achievements: [
        'Completed 10+ client projects',
        'Maintained 100% client satisfaction',
        'Generated $5000+ in revenue'
      ]
    },
    {
      type: 'education',
      title: 'High School Diploma',
      organization: 'Central High School',
      location: 'New York, NY',
      period: '2018 - 2022',
      description: 'Graduated with honors, specializing in STEM subjects. Active member of the computer science club and robotics team.',
      achievements: [
        'Valedictorian (4.0 GPA)',
        'First place in regional coding competition',
        'Founded school\'s first hackathon'
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return BookOpen;
      case 'work':
        return Award;
      default:
        return Award;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-blue-400 border-blue-400';
      case 'work':
        return 'text-green-400 border-green-400';
      default:
        return 'text-purple-400 border-purple-400';
    }
  };

  return (
    <section id="experience" className="section py-20">
      <div className="experience-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through learning and professional growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              return (
                <div key={index} className="timeline-item relative flex items-start mb-12">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full glass flex items-center justify-center border-2 ${getColor(exp.type)} relative z-10`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="ml-8 glass rounded-xl p-6 flex-1 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-blue-400 font-semibold mb-3">{exp.organization}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-white font-semibold">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
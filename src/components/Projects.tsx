import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { gsap } from 'gsap';
import TicTacToe from './TicTacToe';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-container',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.project-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Tic Tac Toe Game',
      description: 'Interactive tic-tac-toe game built with vanilla HTML, CSS, and JavaScript. Features smooth animations, win detection, and responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true,
      component: <TicTacToe />
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts, animated backgrounds, and detailed weather metrics.',
      technologies: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app for managing tasks with drag-and-drop functionality, categories, and progress tracking.',
      technologies: ['React', 'Local Storage', 'CSS Grid', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Calculator App',
      description: 'Scientific calculator with advanced mathematical functions, history tracking, and keyboard support.',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Math.js'],
      image: 'https://images.pexels.com/photos/6238/technology-mathematics-number-calculator.jpg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Landing Page',
      description: 'Modern business landing page with scroll animations, contact forms, and responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    }
  ];

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="section py-20 bg-slate-900/50">
      <div className="projects-container container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass rounded-xl overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                {project.component && (
                  <button
                    onClick={() => openProject(project.id)}
                    className="absolute top-4 right-4 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <Play size={16} />
                  </button>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{selectedProjectData.title}</h3>
                  <button
                    onClick={closeProject}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6">
                {selectedProjectData.component}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
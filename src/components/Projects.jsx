import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'TalentFlow',
      subtitle: 'AI-Powered Recruitment Platform',
      description: 'Comprehensive recruitment management system with AI-driven candidate screening and matching',
      features: [
        'Automated resume parsing and candidate ranking',
        'Real-time collaboration tools for hiring teams',
        'Advanced analytics and reporting dashboard',
        'Integration with multiple job boards',
      ],
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'AI/ML'],
      category: ['Full Stack', 'AI'],
      image: 'project-1',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'HRMS',
      subtitle: 'Human Resource Management System',
      description: 'Enterprise-grade HR management solution for employee lifecycle management',
      features: [
        'Employee onboarding and offboarding workflows',
        'Leave and attendance management',
        'Performance review and appraisal system',
        'Payroll integration and reporting',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      category: ['Full Stack', 'Enterprise'],
      image: 'project-2',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'MIS',
      subtitle: 'Management Information System',
      description: 'Data-driven decision-making platform with real-time analytics and reporting',
      features: [
        'Real-time data visualization dashboards',
        'Custom report generation engine',
        'Multi-tenant architecture support',
        'Role-based access control',
      ],
      technologies: ['React', 'Spring Boot', 'MySQL', 'Microservices'],
      category: ['Full Stack', 'Analytics'],
      image: 'project-3',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Admission Management',
      subtitle: 'Student Admission Portal',
      description: 'Streamlined admission process management for educational institutions',
      features: [
        'Online application submission and tracking',
        'Document verification and management',
        'Automated eligibility checking',
        'Payment gateway integration',
      ],
      technologies: ['Vite', 'React', 'Spring Boot', 'PostgreSQL'],
      category: ['Full Stack', 'Education'],
      image: 'project-4',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const filters = ['All', 'Full Stack', 'AI', 'Enterprise', 'Analytics', 'Education'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedFilter));

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing impactful solutions built with modern technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20 font-display">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-400 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {/* <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No projects found for this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

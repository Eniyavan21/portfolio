import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Ragnild Technology',
      position: 'Frontend Developer',
      period: '2025 - Present',
      location: 'Remote',
      achievements: [
        'Developing responsive and performant web applications using React.js and modern frontend technologies',
        'Implementing pixel-perfect UI designs with Tailwind CSS and component libraries',
        'Collaborating with cross-functional teams to deliver high-quality user experiences',
        'Optimizing application performance and implementing best practices',
      ],
      technologies: ['React.js', 'Vite.js', 'Tailwind CSS', 'TypeScript', 'Git'],
    },
    {
      company: 'Innocloud Private Limited',
      position: 'Full Stack Developer',
      period: '2024 - 2025',
      location: 'Hybrid',
      achievements: [
        'Developed end-to-end features for enterprise applications using React and Spring Boot',
        'Implemented microservices architecture with RESTful APIs and message queues',
        'Integrated AWS services (EC2, S3, Lambda) for scalable cloud solutions',
        'Conducted code reviews and mentored junior developers',
        'Automated testing pipelines using Karate API/UI framework',
      ],
      technologies: ['React', 'Spring Boot', 'AWS', 'PostgreSQL', 'Docker', 'Microservices'],
    },
    {
      company: 'Quantumsys Technologies',
      position: 'Full Stack Developer',
      period: '2022 - 2024',
      location: 'On-site',
      achievements: [
        'Built and maintained multiple full-stack applications serving 10,000+ users',
        'Designed and implemented database schemas for complex business requirements',
        'Developed CI/CD pipelines using GitHub Actions for automated deployments',
        'Collaborated with UI/UX designers to implement intuitive user interfaces using Figma designs',
        'Improved application performance by 40% through code optimization and caching strategies',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'MySQL', 'GitHub Actions', 'Figma'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 md:justify-end">
                        <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                    </div>

                    {/* Achievements */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className={`text-primary-600 dark:text-primary-400 flex-shrink-0 ${index % 2 === 0 ? 'order-1' : ''}`}>
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Empty column for spacing */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

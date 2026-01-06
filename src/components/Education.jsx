import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'B.E. Mechanical Engineering',
      institution: "St. Joseph's College",
      period: '2018 - 2022',
      description: 'Completed Bachelor of Engineering with focus on mechanical systems and design principles.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Java Developer',
      issuer: 'Professional Certification',
      period: '2022',
      description: 'Comprehensive training in Java, Spring Boot, React, and full-stack development practices.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${edu.color} rounded-lg text-white flex-shrink-0`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Certifications
            </motion.h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg text-white flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                      {cert.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

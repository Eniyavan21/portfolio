import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vite.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'HTML5/CSS3', level: 92 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Microservices', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Java', level: 87 },
      ],
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 83 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'GitHub Actions', level: 82 },
        { name: 'CI/CD', level: 83 },
      ],
    },
    {
      title: 'AI Tools',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Cursor', level: 90 },
        { name: 'Claude', level: 88 },
        { name: 'GitHub Copilot', level: 85 },
      ],
    },
    {
      title: 'Testing & Design',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Karate API/UI', level: 85 },
        { name: 'Jest/Testing Library', level: 80 },
        { name: 'Figma', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg mb-3`}>
                  <h3 className="text-white font-bold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies to deliver cutting-edge solutions.
            Proficient in building scalable microservices, implementing modern DevOps practices,
            and leveraging AI tools to enhance development efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

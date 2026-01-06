import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Award, Briefcase, Code } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack',
      description: 'Development Expertise',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AI-Driven',
      description: 'Modern Development',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in building scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600 opacity-10"></div>
              <div className="relative z-10 text-center p-8">
                <div className="text-6xl md:text-8xl font-bold gradient-text mb-4 font-display">
                  3+
                </div>
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  Years of Excellence
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated <span className="font-semibold text-primary-600 dark:text-primary-400">Full Stack Developer</span> with over 3 years of experience in designing and developing robust, scalable applications. My expertise spans across frontend technologies like <span className="font-semibold">React.js</span> and <span className="font-semibold">Vite.js</span>, backend frameworks including <span className="font-semibold">Spring Boot</span> and <span className="font-semibold">Node.js</span>, and cloud platforms such as <span className="font-semibold">AWS</span>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in building <span className="font-semibold">microservices architectures</span>, implementing <span className="font-semibold">CI/CD pipelines</span>, and leveraging <span className="font-semibold">AI-driven development tools</span> like Cursor, Claude, and GitHub Copilot to enhance productivity and code quality.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My passion for clean code and user-centric design drives me to create applications that are not only functional but also deliver exceptional user experiences.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-2 text-primary-600 dark:text-primary-400">
                    {highlight.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

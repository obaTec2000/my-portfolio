import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import YourPhoto from "../../assets/images/mypic.jpeg";

const ContactMeMain = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h2
        className="text-5xl font-bold text-center text-cyan-600 mb-4"
        variants={item}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        variants={item}
      >
        Feel free to reach out through any of these channels
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-4 bg-brown p-8 rounded-2xl shadow-lg"
        variants={container}
      >
        {/* Contact Information */}
        <motion.div className="space-y-8" variants={container}>
          <motion.div variants={item}>
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-6"
              variants={textVariants}
            >
              Contact Information
            </motion.h3>

            <motion.div className="space-y-6" variants={container}>
              <motion.div
                className="flex items-start gap-4"
                variants={item}
              >
                <div className="p-3 bg-cyan-100 rounded-full text-cyan-600 mt-1">
                  <HiOutlineMail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a
                    href="mailto:obanijesujohn45@gmail.com"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    obanijesujohn45@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={item}
              >
                <div className="p-3 bg-cyan-100 rounded-full text-cyan-600 mt-1">
                  <HiOutlinePhone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a
                    href="tel:+2349060214824"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    +234 90 6021 4824
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={item}
              >
                <div className="p-3 bg-cyan-100 rounded-full text-cyan-600 mt-1">
                  <FiGithub size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">GitHub</h4>
                  <a
                    href="https://github.com/obaTec2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={item}
              >
                <div className="p-3 bg-cyan-100 rounded-full text-cyan-600 mt-1">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/feranmi-john-107723253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    linkedin.com/in/feranmi-john
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Your Photo Section */}
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={photoVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-[460px] max-w-md overflow-hidden rounded-xl shadow-lg relative">
            <motion.img
              src={YourPhoto}
              alt="John Obanijesu"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />

            <motion.div
              className="text-center absolute inset-0 flex flex-col bg-brown/70 p-6 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-gray-800 text-shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                John Obanijesu
              </motion.h3>
              <motion.p
                className="text-gray-600 mt-2 text-shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Frontend Developer
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactMeMain;
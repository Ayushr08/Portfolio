"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Problem Solver",
    description: "450+ DSA problems solved across multiple platforms",
  },
  {
    icon: Server,
    title: "Backend Expert",
    description: "Specialized in scalable microservices architecture",
  },
  {
    icon: Database,
    title: "Full Stack",
    description: "End-to-end application development experience",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Focused on building fast, secure solutions",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer with expertise in modern web technologies and a strong foundation in computer science
            fundamentals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a driven Backend Developer and Full Stack Engineer with a sharp problem-solving mindset and a proven
              record of delivering high-impact, scalable web applications. I excel at architecting backend systems,
              managing databases, and creating responsive, intuitive user interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in data structures, algorithms, and modern web technologies, I'm committed to
              building fast, secure, and maintainable solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-sm text-gray-400">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

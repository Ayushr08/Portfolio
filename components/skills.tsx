"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "Java", "SQL"],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redis",
      "RabbitMQ",
      "RESTful APIs",
      "Tailwind",
      "React.js",
      "HTML",
      "CSS",
      "Docker",
      "Cloudinary",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Replit"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Core Skills",
    skills: ["Data Structures", "Algorithms", "OOPs Concepts", "DBMS", "Operating Systems"],
    color: "from-purple-500 to-pink-500",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

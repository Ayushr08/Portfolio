"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Code } from "lucide-react"

const certifications = [
  {
    title: "0-100 Full Stack Web Development Course",
    issuer: "100xdevs",
    description:
      "Comprehensive full-stack development course covering modern web technologies, backend development, and deployment strategies.",
    icon: Code,
    link: "https://drive.google.com/file/d/13BPJPsHUjtw4-h9HkSNNRR4qlKs9Nt5u/view?usp=sharing",
    skills: ["Full Stack Development", "Web Technologies", "Backend Development"],
  },
  {
    title: "Data Structure and Algorithms Supreme 2.0",
    issuer: "CODEHELP",
    description:
      "Advanced course on data structures and algorithms with focus on problem-solving and competitive programming.",
    icon: Award,
    link: "#",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-300">Professional certifications and continuous learning achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <cert.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{cert.title}</CardTitle>
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-gray-700 text-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {cert.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

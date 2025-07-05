"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    institution: "Birla Institute of Technology, Mesra",
    degree: "B.Tech - Computer Science and Engineering",
    duration: "2021 – 2025",
    grade: "CGPA: 8.65",
    type: "Bachelor's Degree",
    icon: GraduationCap,
  },
  {
    institution: "Nezamia Public School, Patna",
    degree: "Intermediate - Science",
    duration: "2019-2020",
    grade: "Percentage: 86.4%",
    type: "Higher Secondary",
    icon: Award,
  },
  {
    institution: "St. Michael's High School, Patna",
    degree: "Matriculation",
    duration: "2017-2018",
    grade: "Percentage: 87%",
    type: "Secondary",
    icon: Award,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300">My academic journey and qualifications</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/20 rounded-full">
                        <edu.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white mb-1">{edu.institution}</CardTitle>
                        <p className="text-gray-300 font-medium">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-blue-400 border-blue-400 mb-2">
                        {edu.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-green-400">{edu.grade}</div>
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

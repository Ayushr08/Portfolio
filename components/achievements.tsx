"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code, Target, Star } from "lucide-react"

const achievements = [
  {
    icon: Code,
    title: "450+ Problems Solved",
    description: "Data Structures & Algorithms questions on LeetCode, GFG and HackerRank in C++",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "CodeChef Rating: 1503",
    description: "Achieved highest rating of 1503 in Competitive Programming on CodeChef",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Problem Solving Expert",
    description: "Strong foundation in algorithmic thinking and optimization techniques",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    description: "Maintaining CGPA of 8.65 in Computer Science Engineering",
    color: "from-purple-500 to-pink-500",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-300">Milestones and accomplishments in my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

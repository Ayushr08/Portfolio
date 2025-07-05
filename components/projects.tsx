"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Calendar } from "lucide-react"

const projects = [
  {
    title: "Node.js Microservices System",
    description:
      "Engineered a scalable backend system using microservices architecture with Node.js and Express.js. Implemented Redis for caching and MongoDB for NoSQL data storage, containerized with Docker.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker", "RabbitMQ"],
    github: "https://github.com/Ayushr08/Nodejs-Microservices-System",
    date: "May 2025",
    type: "Backend Architecture Project",
    highlights: [
      "Secured services with JWT authentication",
      "Implemented both REST and gRPC APIs",
      "Efficient inter-service communication",
    ],
  },
  {
    title: "StudyNotion – Online Education Platform",
    description:
      "Built a full-featured ed-tech platform enabling course creation, enrollment, and content consumption for instructors and students. Implemented secure user authentication and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay"],
    github: "https://github.com/Ayushr08/StudyNotion--An-Edtech-Platform",
    date: "Nov 2024",
    type: "Full Stack Web Application",
    highlights: [
      "JWT authentication and authorization",
      "Admin/instructor dashboards",
      "Integrated Razorpay payment gateway",
    ],
  },
  {
    title: "Gemini Chatbot",
    description:
      "Developed Google Gemini application using React JS, enhancing the AI-driven experience with intuitive UI components and state-of-the-art functionality.",
    technologies: ["React", "CSS", "Vite", "Gemini API"],
    github: "https://github.com/Ayushr08/Gemini_chatbot",
    date: "June 2024",
    type: "AI Application",
    highlights: [
      "React Context API for state management",
      "Seamless data flow and user interactions",
      "AI-driven conversational interface",
    ],
  },
  {
    title: "Razorpay Project",
    description: "Payment gateway integration project showcasing secure payment processing and transaction management.",
    technologies: ["JavaScript", "Razorpay API", "Node.js"],
    github: "https://github.com/Ayushr08/Razorpay_project",
    date: "2024",
    type: "Payment Integration",
    highlights: ["Secure payment processing", "Transaction management", "Payment gateway integration"],
  },
  {
    title: "Modern Chair",
    description: "Modern e-commerce website for furniture with responsive design and smooth user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ayushr08/Modern_chair",
    date: "2024",
    type: "Frontend Project",
    highlights: ["Responsive design", "Modern UI/UX", "E-commerce functionality"],
  },
  {
    title: "Edu-Filter",
    description: "Educational content filtering and management system for better learning experiences.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayushr08/Edu-Filter",
    date: "2024",
    type: "Educational Tool",
    highlights: ["Content filtering system", "Educational management", "User-friendly interface"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">A showcase of my recent work and technical achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs text-blue-400 border-blue-400">
                      {project.type}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-700 text-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
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

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Code, Trophy, Download } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Ayushr08", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-raj-719507315", label: "LinkedIn" },
  { icon: Code, href: "https://www.codechef.com/users/skynet_17", label: "CodeChef" },
  { icon: Trophy, href: "https://leetcode.com/u/ayushraj080102/", label: "LeetCode" },
]

const words = [
  { text: "Hi,", className: "text-white" },
  { text: "I'm", className: "text-white" },
  {
    text: "Ayush",
    className: "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold",
  },
  {
    text: "Raj",
    className: "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent font-extrabold",
  },
]

export function Hero() {
  const [dots, setDots] = useState<null | any[]>(null)

  useEffect(() => {
    const newDots = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random(),
      animateY: Math.random() * window.innerHeight,
      animateOpacity: Math.random(),
      duration: Math.random() * 10 + 10,
    }))
    setDots(newDots)
  }, [])

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/1NevHZLawlKeRapu700JkfULT5V2180nJ/view?usp=sharing", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>

        {dots &&
          dots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: dot.x,
                y: dot.y,
                opacity: dot.opacity,
              }}
              animate={{
                y: [null, dot.animateY],
                opacity: [null, dot.animateOpacity],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TypewriterEffect
              words={words}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              cursorClassName="bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-gray-300 mb-2">Backend Developer & Full Stack Engineer</h2>
            <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Anandpuri, Patna
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +91-9142436962
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                ayushraj080102@gmail.com
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Driven Backend Developer with a sharp problem-solving mindset and a proven record of delivering high-impact,
            scalable web applications. Committed to building fast, secure, and maintainable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-full transition-colors duration-200"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-3 overflow-hidden group border-0"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

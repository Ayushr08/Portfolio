"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Trophy,
  ExternalLink,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ayushraj080102@gmail.com",
    href: "mailto:ayushraj080102@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9142436962",
    href: "tel:+919142436962",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Anandpuri, Patna",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ayushr08",
    username: "@Ayushr08",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-raj-719507315",
    username: "Ayush Raj",
  },
  {
    icon: Code,
    label: "CodeChef",
    href: "https://www.codechef.com/users/skynet_17",
    username: "skynet_17",
  },
  {
    icon: Trophy,
    label: "LeetCode",
    href: "https://leetcode.com/u/ayushraj080102/",
    username: "ayushraj080102",
  },
];

type Dot = {
  x: number;
  y: number;
  opacity: number;
  animateY: number;
  duration: number;
};

export function Contact() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5,
      animateY: Math.random() * window.innerHeight,
      duration: Math.random() * 15 + 10,
    }));
    setDots(generated);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{ x: dot.x, y: dot.y, opacity: dot.opacity }}
            animate={{ y: dot.animateY, opacity: [dot.opacity, Math.random() * 0.5] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <info.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.href !== "#" ? (
                        <a href={info.href} className="text-white hover:text-blue-400 transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-600 text-white hover:bg-gray-700 hover:border-blue-500 bg-transparent"
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <link.icon className="w-5 h-5 mr-3" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">{link.label}</div>
                        <div className="text-sm text-gray-400">{link.username}</div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-600 text-white hover:bg-gray-700 hover:border-blue-500 bg-transparent"
                    onClick={() => window.open("https://www.geeksforgeeks.org/user/ayushraj8ybp/", "_blank")}
                  >
                    <Code className="w-5 h-5 mr-3" />
                    <div className="flex-1 text-left">
                      <div className="font-medium">GeeksforGeeks</div>
                      <div className="text-sm text-gray-400">ayushraj8ybp</div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">Ready to work together? Let's build something amazing!</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            onClick={() => window.open("mailto:ayushraj080102@gmail.com", "_blank")}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Me an Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

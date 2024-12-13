'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from './projects.module.css'
import { useAppContext } from '../context/AppContext'
import { FormattedMessage } from 'react-intl';

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  longDescription: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "Deep learning based image generation system",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Python", "PyTorch", "React"],
    longDescription: "This AI Image Generator utilizes state-of-the-art deep learning techniques to create unique and stunning images from textual descriptions. Built with PyTorch and integrated into a React frontend, it offers an intuitive interface for users to generate custom artwork, design assets, and more."
  },
  {
    id: 2,
    title: "NLP Chatbot",
    description: "Advanced conversational AI system",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["TensorFlow", "BERT", "FastAPI"],
    longDescription: "Our NLP Chatbot leverages the power of BERT and TensorFlow to understand and respond to user queries with unprecedented accuracy. Deployed via FastAPI, this chatbot can be easily integrated into various platforms, providing intelligent customer support, information retrieval, and interactive experiences."
  },
  {
    id: 3,
    title: "Computer Vision App",
    description: "Real-time object detection system",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["OpenCV", "YOLOv5", "React Native"],
    longDescription: "This Computer Vision App brings real-time object detection to mobile devices. Using YOLOv5 for fast and accurate detection, OpenCV for image processing, and React Native for cross-platform deployment, the app can identify and track objects in live video feeds, making it ideal for security, retail, and augmented reality applications."
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive data visualization platform",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["D3.js", "Node.js", "MongoDB"],
    longDescription: "Our Data Analytics Dashboard transforms complex datasets into intuitive, interactive visualizations. Built with D3.js for powerful, customizable charts, Node.js for robust backend processing, and MongoDB for flexible data storage, this platform enables businesses to gain valuable insights from their data through a user-friendly interface."
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet application",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Solidity", "Web3.js", "React"],
    longDescription: "This Blockchain Wallet provides a secure and user-friendly way to manage cryptocurrencies. Developed with Solidity for smart contract integration, Web3.js for blockchain interaction, and React for a responsive UI, it offers features like multi-currency support, transaction history, and enhanced security measures to protect users' digital assets."
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { isDarkTheme } = useAppContext()

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#1A1F2C] text-white' : 'bg-gray-100 text-gray-900'} p-4 md:p-8`}>
      <Link href="/">
        <Button 
          variant="ghost" 
          className={`mb-8 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <FormattedMessage id="backToHome"/>
        </Button>
      </Link>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
          <FormattedMessage id="projectsPageTitle" />
        </h1>
        <div className={`flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scroll-smooth pr-[20%] ${styles.hideScrollbar}`}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[80%] max-w-[300px] snap-start"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`bg-white bg-opacity-5 backdrop-blur-sm border-none overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 h-full ${isDarkTheme ? 'bg-opacity-5' : 'bg-opacity-100'}`}
                onClick={() => setSelectedProject(project)}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-purple-400' : 'text-gray-900'}`}>{project.title}</h2>
                  <p className={`text-gray-300 mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-2 py-1 ${isDarkTheme ? 'bg-purple-500 bg-opacity-20 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-full text-xs`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className={`bg-[#1A1F2C] border-purple-500 ${isDarkTheme ? 'bg-[#1A1F2C]' : 'bg-gray-100'}`}>
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${isDarkTheme ? 'text-purple-400' : 'text-gray-900'}`}>{selectedProject?.title}</DialogTitle>
            <Button
              className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground ${isDarkTheme ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only"><FormattedMessage id="close"/></span>
            </Button>
          </DialogHeader>
          {selectedProject?.image && (
            <Image 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <DialogDescription className={`text-gray-300 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedProject?.longDescription}
          </DialogDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject?.tech?.map((tech, i) => (
              <span key={i} className={`px-2 py-1 ${isDarkTheme ? 'bg-purple-500 bg-opacity-20 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-full text-xs`}>
                {tech}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


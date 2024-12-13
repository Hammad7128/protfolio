'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Linkedin, Github, Twitter, MessageSquare, Mail, Facebook, Instagram, Menu, Home, User, Code2, FolderGit2, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import AnimatedBackground from './AnimatedBackground'
import { useAppContext } from '../context/AppContext'

const projects = [
  {
    title: "AI Image Generator",
    description: "Deep learning based image generation system",
    tech: ["Python", "PyTorch", "React"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "NLP Chatbot",
    description: "Advanced conversational AI system",
    tech: ["TensorFlow", "BERT", "FastAPI"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Computer Vision App",
    description: "Real-time object detection system",
    tech: ["OpenCV", "YOLOv5", "React Native"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive data visualization platform",
    tech: ["D3.js", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet application",
    tech: ["Solidity", "Web3.js", "React"],
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function EnhancedPortfolio() {
  const { isDarkTheme, isCursorFollowerEnabled } = useAppContext()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isCursorVisible, setIsCursorVisible] = useState(false)

  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isCursorFollowerEnabled) {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
  }, [isCursorFollowerEnabled]);

  useEffect(() => {
    const handleMouseEnter = () => isCursorFollowerEnabled && setIsCursorVisible(true)
    const handleMouseLeave = () => isCursorFollowerEnabled && setIsCursorVisible(false)

    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseenter', handleMouseEnter)
      document.body.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        document.body.removeEventListener('mouseenter', handleMouseEnter)
        document.body.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isCursorFollowerEnabled, handleMouseMove]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`min-h-screen w-full ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} overflow-hidden flex flex-col transition-colors duration-300`}>
      <header className={`sticky top-0 left-0 right-0 z-20 transition-all duration-300 ${isDarkTheme ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-pink-600' : 'from-purple-600 to-pink-600'}`}>
              <FormattedMessage id="title" />
            </span>
          </h1>
          <nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                  <Menu className={`h-5 w-5 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} />
                  <span className="sr-only"><FormattedMessage id="openMenu" /></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className={`${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'} rounded-xl border shadow-lg p-2 min-w-[200px] animate-in slide-in-from-top-2 duration-200`}
              >
                <DropdownMenuItem 
                  onClick={() => scrollToSection(homeRef)}
                  className="cursor-pointer px-4 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <FormattedMessage id="home" />
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="cursor-pointer px-4 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <FormattedMessage id="aboutPage" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="cursor-pointer px-4 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Link href="/skills" className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    <FormattedMessage id="skills" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="cursor-pointer px-4 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4" />
                    <FormattedMessage id="projects" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  asChild
                  className="cursor-pointer px-4 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <FormattedMessage id="contact" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <section ref={homeRef} id="home" className="relative min-h-screen w-full flex items-center justify-center py-8 px-4 overflow-hidden">
          <AnimatedBackground isDarkTheme={isDarkTheme} />
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
              <div className={`absolute inset-0 rounded-full ${isDarkTheme ? 'bg-purple-600' : 'bg-purple-400'}`} />
              <Image 
                src="/placeholder.svg?height=192&width=192"
                alt="Hammad"
                width={192}
                height={192}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`} aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`} aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`} aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center whitespace-nowrap">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-pink-600' : 'from-purple-600 to-pink-600'}`}>
                <FormattedMessage id="greeting" />
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl mb-4 text-center">
              <FormattedMessage id="tagline" />
            </p>
            
            <p className={`text-lg md:text-xl text-center ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
              <FormattedMessage id="description" />
            </p>

            <div className="flex justify-center gap-4">
              <Button 
                className={`bg-gradient-to-r ${isDarkTheme ? 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' : 'from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800'} text-white px-6 py-2 text-sm rounded-full transform hover:scale-105 transition-all`}
                onClick={() => scrollToSection(projectsRef)}
              >
                <FormattedMessage id="viewProjects" />
                <ChevronRight className="ml-2 w-3 h-3" />
              </Button>
              
              <Button 
                variant="outline"
                className={`${isDarkTheme ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10'} px-6 py-2 text-sm rounded-full transform hover:scale-105 transition-all`}
                onClick={() => scrollToSection(contactRef)}
              >
                <FormattedMessage id="contactMe" />
                <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="relative w-full py-12 px-4">
          <AnimatedBackground isDarkTheme={isDarkTheme} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className={`${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6 shadow-lg`}>
              <h3 className="text-3xl font-bold mb-4 text-center"><FormattedMessage id="aboutMe" /></h3>
              <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-center mb-6`}>
                <FormattedMessage id="aboutDescription" />
              </p>
              <div className="flex justify-center">
                <Link href="/about">
                  <Button 
                    variant="outline"
                    className={`${isDarkTheme ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10'} px-6 py-2 text-sm rounded-full transform hover:scale-105 transition-all`}
                  >
                    <FormattedMessage id="moreAboutMe" />
                    <ChevronRight className="ml-2 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="relative w-full py-12 px-4">
          <AnimatedBackground isDarkTheme={isDarkTheme} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center"><FormattedMessage id="skills" /></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["UI", "UX", "React", "JS", "HTML", "CSS"].map((skill) => (
                <div key={skill} className={`${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 flex items-center justify-center`}>
                  <span className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-pink-600' : 'from-purple-600 to-pink-600'}`}>
                    <FormattedMessage id={`skill-${skill}`} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="relative w-full py-12 px-4">
          <AnimatedBackground isDarkTheme={isDarkTheme} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center"><FormattedMessage id="projects" /></h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4" style={{ width: 'max-content' }}>
                {projects.map((project, index) => (
                  <div key={index} className={`w-72 flex-shrink-0 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border flex flex-col overflow-hidden`}>
                    <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
                    <div className="p-4 flex-grow">
                      <h4 className="text-xl font-semibold mb-2"><FormattedMessage id={`project-${project.title}`} /></h4>
                      <p className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                        <FormattedMessage id={`projectDescription-${project.title}`} />
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className={`text-xs ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-800'} px-2 py-1 rounded-full`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="relative w-full py-12 px-4">
          <AnimatedBackground isDarkTheme={isDarkTheme} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center"><FormattedMessage id="contact" /></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { Icon: MessageSquare, label: 'WhatsApp', info: '+1 234 567 8900' },
                { Icon: Mail, label: 'Email', info: 'hammad@example.com' },
                { Icon: Facebook, label: 'Facebook', info: 'facebook.com/hammad' },
                { Icon: Instagram, label: 'Instagram', info: '@hammad_insta' },
                { Icon: Github, label: 'GitHub', info: 'github.com/hammad' },
              ].map(({ Icon, label, info }) => (
                <div  
                  key={label} 
                  className={`${isDarkTheme ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'} rounded-lg border p-4 flex items-center space-x-4 transition-all duration-300 hover:scale-105 cursor-pointer group`}
                >
                  <Icon className={`w-6 h-6 ${isDarkTheme ? 'text-purple-400 group-hover:text-pink-400' : 'text-purple-600 group-hover:text-pink-600'} transition-colors duration-300`} />
                  <div>
                    <p className="text-sm font-semibold"><FormattedMessage id={`contact-${label}`} /></p>
                    <p className={`text-xs ${isDarkTheme ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'} transition-colors duration-300`}>{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={`relative z-10 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 
'bg-gray-100 border-gray-200'} border-t py-4`}>
        <div className="container mx-auto px-4 text-center">
          <FormattedMessage id="footer" />
        </div>
      </footer>

      {typeof window !== 'undefined' && window.innerWidth >= 1024 && isCursorFollowerEnabled && (
        <div
          className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
            isCursorVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className={`w-10 h-10 rounded-full ${isDarkTheme ? 'bg-purple-400' : 'bg-purple-600'} opacity-50`} />
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}
`}} />
    </div>
  )
}


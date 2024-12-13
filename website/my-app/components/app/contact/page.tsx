'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Github, Twitter, Mail, Globe } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { FormattedMessage } from 'react-intl'
import { useAppContext } from '../context/AppContext'

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
  const { isDarkTheme } = useAppContext()
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-6 h-6" />
      <span><FormattedMessage id={label} /></span>
    </motion.a>
  )
}

export default function Contact() {
  const { isDarkTheme } = useAppContext()

  const socialLinks = [
    { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
    { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
    { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
    { href: "https://yourwebsite.com", icon: Globe, label: "Personal Website" },
  ]

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#1A1F2C] text-white' : 'bg-gray-100 text-gray-900'} p-4 md:p-8`}>
      <Link href="/">
        <Button 
          variant="ghost" 
          className={`mb-8 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <FormattedMessage id="backToHome" />
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
          <FormattedMessage id="contactPageTitle" />
        </h1>

        <Card className={`p-8 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur-sm border-none' : 'bg-white border-gray-200'}`}>
          <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
            <FormattedMessage id="contactPageDescription" />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SocialLink {...link} />
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className={`mt-8 p-8 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur-sm border-none' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
            <FormattedMessage id="letsCollaborate" />
          </h2>
          <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>
            <FormattedMessage id="collaborationDescription" />
          </p>
        </Card>
      </div>
    </div>
  )
}


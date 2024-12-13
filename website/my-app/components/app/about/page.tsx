'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { FormattedMessage } from 'react-intl'
import { useAppContext } from '../context/AppContext'

export default function About() {
  const { isDarkTheme } = useAppContext()

  const achievements = [
    "Developed AI-powered applications",
    "Created data visualization dashboards",
    "Built responsive web applications",
    "Implemented machine learning models",
    "Contributed to open-source projects",
    "Led technical workshops"
  ]

  const interests = [
    "Artificial Intelligence",
    "Data Science",
    "Web Development",
    "Machine Learning",
    "Open Source",
    "Technology Innovation"
  ]

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#1A1F2C] text-white' : 'bg-gray-100 text-gray-900'} p-4 md:p-8`}>
      {/* Back Button */}
      <Link href="/">
        <Button 
          variant="ghost" 
          className={`mb-8 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <FormattedMessage id="backToHome" />
        </Button>
      </Link>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
          <FormattedMessage id="aboutPageTitle" />
        </h1>

        {/* Detailed Bio */}
        <Card className={`p-8 mb-8 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur border-none' : 'bg-white border-gray-200'}`}>
          <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            <FormattedMessage id="aboutPageDescription" />
          </p>
        </Card>

        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
            <FormattedMessage id="keyAchievements" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`p-4 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur border-none' : 'bg-white border-gray-200'}`}>
                <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}><FormattedMessage id={`achievement${index + 1}`} values={{ achievement }} /></p>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
            <FormattedMessage id="areasOfInterest" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <Card key={index} className={`p-4 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur border-none' : 'bg-white border-gray-200'}`}>
                <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}><FormattedMessage id={`interest${index + 1}`} values={{ interest }} /></p>
              </Card>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <Card className={`p-6 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur border-none' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
            <FormattedMessage id="letsConnect" />
          </h2>
          <div className="flex justify-center gap-6">
            <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors`} aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors`} aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className={`${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors`} aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}


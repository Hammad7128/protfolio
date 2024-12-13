'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { FormattedMessage } from 'react-intl'
import { useAppContext } from '../context/AppContext'

const SkillCard = ({ category, skills }: { category: string; skills: string[] }) => {
  const { isDarkTheme } = useAppContext()
  return (
    <Card className={`p-6 ${isDarkTheme ? 'bg-white bg-opacity-5 backdrop-blur-sm border-none' : 'bg-white border-gray-200'}`}>
      <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
        <FormattedMessage id={category} />
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500 bg-opacity-20 text-purple-300' : 'bg-purple-100 text-purple-800'} rounded-full text-sm`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <FormattedMessage id={skill} />
          </motion.span>
        ))}
      </div>
    </Card>
  )
}

export default function Skills() {
  const { isDarkTheme } = useAppContext()

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      category: "Web Technologies",
      skills: ["React", "Next.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Data Science & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Google Cloud"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Agile Methodologies"]
    }
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

      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
          <FormattedMessage id="skillsPageTitle" />
        </h1>

        <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
          <FormattedMessage id="skillsPageDescription" />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard category={skillCategory.category} skills={skillCategory.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


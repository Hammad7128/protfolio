'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { messages } from '@/lib/messages'

type AppContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
  language: 'en' | 'ur' | 'hi'
  changeLanguage: (lang: 'en' | 'ur' | 'hi') => void
  isCursorFollowerEnabled: boolean
  toggleCursorFollower: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [language, setLanguage] = useState('en')
  const [isCursorFollowerEnabled, setIsCursorFollowerEnabled] = useState(true)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const storedLanguage = localStorage.getItem('language')
    const storedCursorFollower = localStorage.getItem('cursorFollower')

    if (storedTheme) setIsDarkTheme(storedTheme === 'dark')
    if (storedLanguage) setLanguage(storedLanguage)
    if (storedCursorFollower) setIsCursorFollowerEnabled(storedCursorFollower === 'true')
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light')
  }

  const changeLanguage = (lang: 'en' | 'ur' | 'hi') => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const toggleCursorFollower = () => {
    setIsCursorFollowerEnabled(!isCursorFollowerEnabled)
    localStorage.setItem('cursorFollower', (!isCursorFollowerEnabled).toString())
  }

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme, language, changeLanguage, isCursorFollowerEnabled, toggleCursorFollower }}>
      <IntlProvider messages={messages[language as keyof typeof messages]} locale={language} defaultLocale="en">
        {children}
      </IntlProvider>
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}


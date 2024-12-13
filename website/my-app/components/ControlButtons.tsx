'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Globe, Eye, EyeOff } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { FormattedMessage } from 'react-intl'

const ControlButtons: React.FC = () => {
  const { isDarkTheme, toggleTheme, language, changeLanguage, isCursorFollowerEnabled, toggleCursorFollower } = useAppContext()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full p-2 ${isDarkTheme ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only"><FormattedMessage id="changeLanguage" /></span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => changeLanguage('en')}><FormattedMessage id="language-en" defaultMessage="English" /></DropdownMenuItem>
          <DropdownMenuItem onSelect={() => changeLanguage('ur')}><FormattedMessage id="language-ur" defaultMessage="اردو" /></DropdownMenuItem>
          <DropdownMenuItem onSelect={() => changeLanguage('hi')}><FormattedMessage id="language-hi" defaultMessage="हिन्दी" /></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className={`rounded-full p-2 ${isDarkTheme ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
      >
        {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only"><FormattedMessage id="toggleTheme" /></span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleCursorFollower}
        className={`rounded-full p-2 ${isDarkTheme ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
      >
        {isCursorFollowerEnabled ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        <span className="sr-only"><FormattedMessage id="toggleCursorFollower" /></span>
      </Button>
    </div>
  )
}

export default ControlButtons


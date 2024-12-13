'use client'
import { IntlProvider } from 'react-intl'
import { useState } from 'react'
import { messages } from '@/lib/messages'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')

  return (
    <IntlProvider messages={messages[language as keyof typeof messages]} locale={language} defaultLocale="en">
      {children}
    </IntlProvider>
  )
}


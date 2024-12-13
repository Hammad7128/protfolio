'use client'

import EnhancedPortfolio from '@/app/components/EnhancedPortfolio'
import { useAppContext } from './context/AppContext'

export default function Home() {
  const { language } = useAppContext()

  return (
    <EnhancedPortfolio />
  )
}


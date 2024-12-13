import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from './context/AppContext'
import ControlButtons from './components/ControlButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hammad\'s Portfolio',
  description: 'Personal portfolio of Hammad, showcasing skills in AI, Data Science, and Software Engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
          <ControlButtons />
        </AppProvider>
      </body>
    </html>
  )
}


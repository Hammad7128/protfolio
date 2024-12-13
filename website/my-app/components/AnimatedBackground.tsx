import React from 'react'
import { Code, Database, Server, Cpu, Wifi, Cloud, Monitor, Smartphone, Tablet, Laptop } from 'lucide-react'

interface AnimatedBackgroundProps {
  isDarkTheme: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDarkTheme }) => {
  const icons = [Code, Database, Server, Cpu, Wifi, Cloud, Monitor, Smartphone, Tablet, Laptop]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const Icon = icons[i % icons.length]
        return (
          <div
            key={i}
            className={`absolute ${isDarkTheme ? 'text-gray-700' : 'text-gray-300'} opacity-10`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.5}rem`,
              animation: `float ${Math.random() * 5 + 5}s linear infinite`
            }}
          >
            <Icon />
          </div>
        )
      })}
    </div>
  )
}

export default AnimatedBackground


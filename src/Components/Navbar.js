'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sun, Moon, List } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'Consulting', href: '/services/consulting' },
      ]
    },
    { name: 'Experience', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-300">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-[15px] rotate-50 transition-transform animate-spin hover:rotate-180"></div>
                <div className="absolute inset-0 bg-gradient-to-br dark:from-black from-amber-50 dark:to-black to-white rounded-[50%] flex items-center justify-center">
                  <span className="text-black dark:text-white font-extrabold shadow-2xs text-4xl md:text-4xl">Ñ</span>
                </div>
              </div>
              {/* <span className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                SR.NOYON
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 font-medium"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div
                    className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 py-2 mt-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-150"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Section: Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-950" />
                )}
              </button>
            )}

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block px-3 py-2 bg-gradient-to-r from-red-600 to-red-600  text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
             <Menu />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 font-medium"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isServicesOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-150"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all hidden lg:block duration-200 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
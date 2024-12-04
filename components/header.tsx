'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowRight, Menu, Search, ChevronDown, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MegaMenu } from "@/components/ui/mega-menu"
import { TopBar } from "@/components/ui/top-bar"
import { useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      {!isScrolled && <TopBar />}
      <motion.header
        className={`fixed ${
          isScrolled ? "top-0" : "top-10"
        } z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-10">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={
                isScrolled
                  ? "https://res.cloudinary.com/dkdltgrov/image/upload/v1733351009/Logo-liggend_4x_iaai4p.png"
                  : "https://res.cloudinary.com/dkdltgrov/image/upload/v1733351010/Logo-wit_4x_zhnqsi.png"
              }
              alt="logo"
              width={80}
              height={40}
              priority
              className="w-auto h-8"
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1">
            <nav className="flex items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  className={`flex items-center gap-2 text-base font-medium ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Wat we doen
                  <ChevronDown className="h-4 w-4" />
                </button>
                {megaMenuOpen && <MegaMenu />}
              </div>
              <Link
                href="/cases"
                className={`text-base font-medium ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Cases
              </Link>
              <Link
                href="/carriere"
                className={`text-base font-medium group ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Carrière
                <ChevronDown className="inline-block h-4 w-4 ml-1" />
              </Link>
              <Link
                href="/insights"
                className={`text-base font-medium group ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Insights
                <ChevronDown className="inline-block h-4 w-4 ml-1" />
              </Link>
              <Link
                href="/over-ons"
                className={`text-base font-medium group ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Over ons
                <ChevronDown className="inline-block h-4 w-4 ml-1" />
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-8">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-black" : "text-white"}
            >
              <Search className="h-5 w-5" />
            </Button>
            <select 
              className={`bg-transparent border-none outline-none cursor-pointer ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <option value="nl">NL</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
            <Button
              variant="outline"
              className={`rounded-full px-6 ${
                isScrolled 
                  ? "text-black border-black hover:bg-black hover:text-white" 
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              Contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
          </Button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-6">
              <Link href="/">
                <Image
                  src="/logo-dark.png"
                  alt="logo"
                  width={80}
                  height={40}
                  className="w-auto h-8"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-6">
                <Link
                  href="/wat-we-doen"
                  className="flex items-center justify-between text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wat we doen
                  <ChevronDown className="h-5 w-5" />
                </Link>
                <Link
                  href="/cases"
                  className="flex items-center justify-between text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cases
                </Link>
                <Link
                  href="/carriere"
                  className="flex items-center justify-between text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Carrière
                  <ChevronDown className="h-5 w-5" />
                </Link>
                <Link
                  href="/insights"
                  className="flex items-center justify-between text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insights
                  <ChevronDown className="h-5 w-5" />
                </Link>
                <Link
                  href="/over-ons"
                  className="flex items-center justify-between text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Over ons
                  <ChevronDown className="h-5 w-5" />
                </Link>
              </nav>
            </div>
            <div className="border-t p-6">
              <div className="flex flex-col gap-4">
                <select className="bg-transparent border-none outline-none cursor-pointer">
                  <option value="nl">NL</option>
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                </select>
                <Button className="w-full rounded-full">
                  Contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


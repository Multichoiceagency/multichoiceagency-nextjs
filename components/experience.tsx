"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Strategie",
    description: "Digitale transformatiestrategieën die succes stimuleren",
  },
  {
    title: "Technologie",
    description: "Innovatieve oplossingen gebouwd voor het moderne web",
  },
  {
    title: "Marketing",
    description: "Datagestuurde campagnes die resultaat leveren",
  },
  {
    title: "Design",
    description: "Creatieve ervaringen die inspireren en boeien",
  },
]

export function Experience(): JSX.Element {
  const words: string[] = [
    "Maak elke klantinteractie",
    "krachtig.",
  ]

  return (
    <section className="relative min-h-screen bg-black">
      {/* Geanimeerde rasterlijnen */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute bottom-0 top-0 w-px bg-white/10"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Inhoud */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col items-start justify-center">
            {/* Dienstvakken */}
            <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-2xl bg-gradient-to-br from-[#1e7932]/20 to-[#1e7932]/10 p-8 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-2xl font-medium text-white">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Hoofdtekst */}
            <div className="mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-xl italic text-white/80"
              >
                Ervaring maakt het verschil
              </motion.p>

              <div className="overflow-hidden">
                {words.map((word, index) => (
                  <motion.h2
                    key={word}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={cn(
                      "text-5xl font-medium leading-tight md:text-7xl",
                      index === words.length - 1 ? "text-[#1e7932]" : "text-white"
                    )}
                  >
                    {word}
                  </motion.h2>
                ))}
              </div>
            </div>

            {/* Beschrijving */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-3xl text-lg text-white/60"
            >
              Transformeer je merk en bedrijf met uitzonderlijke digitale ervaringen die groei en innovatie stimuleren. Ons team van experts levert geavanceerde oplossingen die je een voorsprong geven op de concurrentie.
            </motion.p>

            {/* Knop */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group flex items-center gap-2 rounded-full bg-[#1e7932] px-6 py-3 text-white transition-all hover:bg-[#1e7932]/90"
            >
              <span>Ontdek onze oplossingen</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

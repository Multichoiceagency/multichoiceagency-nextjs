'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

interface MegaMenuItem {
  title: string
  href: string
  description?: string
}

interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

const megaMenuData: MegaMenuSection[] = [
  {
    title: "Diensten",
    items: [
      {
        title: "Brand, Business & Experience Design",
        href: "/wat-we-doen/diensten/brand-business-experience-design",
        description: "Strategische merkidentiteit en gebruikerservaring",
      },
      {
        title: "Digital Platforms",
        href: "/wat-we-doen/diensten/digital-platforms",
        description: "Moderne digitale oplossingen",
      },
      {
        title: "Marketing Programs & Campaigns",
        href: "/wat-we-doen/diensten/marketing-programs-campaigns",
        description: "Effectieve marketingcampagnes",
      },
    ],
  },
  {
    title: "Platformen en partners",
    items: [
      {
        title: "AWS",
        href: "/platforms/aws",
      },
      {
        title: "Drupal",
        href: "/platforms/drupal",
      },
      {
        title: "Google Marketing Platform",
        href: "/platforms/google-marketing-platform",
      },
      {
        title: "HubSpot",
        href: "/platforms/hubspot",
      },
      {
        title: "Shopware",
        href: "/platforms/shopware",
      },
      {
        title: "Sitecore",
        href: "/platforms/sitecore",
      },
    ],
  },
]

export function MegaMenu() {
    return (
      <div className="absolute w-screen center-full left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm shadow-lg flex justify-center">
        {/* Container voor content */}
        <div className="w-full max-w-[1200px] px-6 py-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {megaMenuData.map((section) => (
              <div key={section.title}>
                <h3 className="text-base font-semibold text-muted-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between rounded-lg p-2 text-base font-medium hover:bg-muted transition-all"
                      >
                        <div>
                          <div className="text-foreground">{item.title}</div>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


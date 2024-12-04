'use client'

import * as React from "react"
import { Check, ChevronDown, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const languages = [
  { label: "Nederlands", value: "nl" },
  { label: "English", value: "en" },
  { label: "Deutsch", value: "de" },
  { label: "Français", value: "fr" },
]

const countries = [
  { label: "Nederland", value: "nl" },
  { label: "België", value: "be" },
  { label: "Deutschland", value: "de" },
  { label: "France", value: "fr" },
]

export function LanguageSelector() {
  const [openLang, setOpenLang] = React.useState(false)
  const [openCountry, setOpenCountry] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState(languages[0])
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0])

  return (
    <div className="flex gap-2">
      <Popover open={openLang} onOpenChange={setOpenLang}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openLang}
            className="w-[140px] justify-between"
          >
            <Globe className="mr-2 h-4 w-4" />
            {selectedLang.label}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[140px] p-0">
          <Command>
            <CommandInput placeholder="Zoek taal..." />
            <CommandEmpty>Geen taal gevonden.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    setSelectedLang(language)
                    setOpenLang(false)
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      selectedLang.value === language.value
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openCountry} onOpenChange={setOpenCountry}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCountry}
            className="w-[140px] justify-between"
          >
            {selectedCountry.label}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[140px] p-0">
          <Command>
            <CommandInput placeholder="Zoek land..." />
            <CommandEmpty>Geen land gevonden.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  onSelect={() => {
                    setSelectedCountry(country)
                    setOpenCountry(false)
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      selectedCountry.value === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}


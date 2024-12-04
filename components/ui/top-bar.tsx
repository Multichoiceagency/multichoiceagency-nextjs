import Link from 'next/link'

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full text-white z-50">
      <div className="mx-auto flex h-10 max-w-[1800px] items-center justify-end px-10">
        <div className="flex items-center gap-6 text-sm">
          <Link href="/rfp" className="hover:text-primary">
            RFP/RFI Insturen
          </Link>
          <Link href="tel:+31882013101" className="hover:text-primary">
            +31 882 013 101
          </Link>
          <Link href="mailto:business@iodigital.com" className="hover:text-primary">
            business@iodigital.com
          </Link>
        </div>
      </div>
    </div>
  )
}


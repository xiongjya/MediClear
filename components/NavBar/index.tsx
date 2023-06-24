'use client'

import Image from 'next/image'

export function NavBar() {
  return (
    <div className="p-3 px-5 navbar-bg space-x-2 flex flex-row justify-start items-center">
      <a
        href="/"
      >
        <Image
          src="/icon.jpg"
          alt="MediClear Logo"
          width={50}
          height={50}
          priority
        />
      </a>

      <div className='font-bold'>
        MediClear
      </div>
    </div>
  )
}
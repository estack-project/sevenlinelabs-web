'use client'

import Social_Git from '@/public/svgs/social-git'
import Social_X from '@/public/svgs/social-x'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/sevenlineLabs_Logo.png'
import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

export default function Header() {
  const [previousScrollY, setPreviousScrollY] = useState(0)
  const onMenuToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const menu = document.querySelector('.resIcon')
    const sidebar = document.querySelector('.sidebar')
    if (menu instanceof HTMLDivElement && sidebar instanceof HTMLDivElement) {
      const isOpen = menu.classList.toggle('open')
      isOpen ? sidebar.classList.add('show') : sidebar.classList.remove('show')
    }
  }

  const onScroll = throttle(() => {
    const currentScrollY = window.scrollY
    const direction = currentScrollY > previousScrollY ? 'down' : 'up'

    direction === 'down'
      ? document.querySelector('header')?.classList.remove('show')
      : document.querySelector('header')?.classList.add('show')

    setPreviousScrollY(currentScrollY)
  }, 500)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  return (
    <header className="show bg-transparen fixed z-50 h-20 w-full backdrop-blur-sm md:h-16 md:px-4">
      <div className="navigation mx-auto my-0 h-full w-full max-w-[820px]">
        <div className="head flex h-full items-center justify-between">
          <div className="head-logo z-50 h-full break-keep text-xl font-normal">
            <Link href={'/'} className="logo inline-flex h-full items-center">
              <Image src={Logo} alt="logo-image" className="max-h-10 max-w-14" />
              <span className="text-white">Sevenline</span>
              <span className="ml-0.5 tracking-wide text-[#4e529a]">Labs</span>
            </Link>
          </div>

          <div className="head-icons z-50 inline-flex text-white">
            <div className="sns_icon inline-flex flex-row flex-nowrap gap-2 md:hidden">
              <Link href="https://x.com/" target="_blank">
                <Social_X />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <Social_Git />
              </Link>
            </div>

            <div
              onClick={onMenuToggle}
              className="resIcon relative hidden h-6 w-[26px] cursor-pointer md:inline-block">
              <div className="resIcon_wrap">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="sidebar fixed top-0 z-40 px-8 pt-20">
            <div className="side-sns flex gap-3 text-white ">
              <Link href="https://x.com/" target="_blank">
                <Social_X width={'1.25rem'} height={'1.25rem'} />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <Social_Git width={'1.25rem'} height={'1.25rem'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

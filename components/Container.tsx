'use client'
import ArrowDown from '@/public/svgs/arrow-down'
import EthereumFoundation from '@/public/svgs/ethereumFoundation'
import Social_Git from '@/public/svgs/social-git'
import Social_X from '@/public/svgs/social-x'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import TmhcLogo from '../public/images/support_tmhc.png'
import MaticLogo from '../public/images/matic.png'
import BscLogo from '../public/images/bsc.png'

export default function Container() {
  const onScrollMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const moveNode = document.querySelector('#second-section')
    moveNode instanceof HTMLElement &&
      window.scrollTo({
        top: moveNode.offsetTop,
        behavior: 'smooth',
      })
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section className="flex h-screen flex-col flex-nowrap items-center justify-center md:p-4">
        <div className="mb-10 max-w-[820px] text-center text-white">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            className="text-6xl font-bold md:text-4xl">
            Welcom to
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            className="text-7xl font-bold md:text-5xl">
            Sevenline
            <span className="text-[#8c8aff]">Labs</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="2000"
            className="break-keep py-8 text-2xl font-normal leading-10 text-[#989898] md:text-xl md:leading-8">
            We are an engineering team that is passionate about blockchain.
            <br /> We challenge new things together for your success.
          </p>
        </div>
        <div
          className="scroll-down max-w-[820px]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
          onClick={onScrollMove}>
          <ArrowDown width={'2.5rem'} height={'2.5rem'} />
        </div>
      </section>

      <section
        id="second-section"
        className="sticky top-0 flex h-screen items-center justify-center bg-[#4e529a] md:p-4">
        <div className="max-w-[820px] text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            className="mb-5 pb-12 text-4xl font-bold md:text-3xl">
            What We&apos;re doing?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
            className="break-keep pb-8 text-left text-2xl leading-9 text-[#989898] md:text-xl">
            We are expanding on the usability of blockchain. This will be a great challenge to
            enable mainstream adoption of public blockchain, and our mission is to accelerate this
            ongoing blockchain revolution.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
            className="break-keep text-left text-2xl leading-9 text-[#989898] md:text-xl">
            Sevenline Labs has been carrying out missions since 2022 and is trying to increase the
            number of users for each project with each solution. It will make blockchain more
            valuable today and contribute to the expansion of usage.
          </p>
        </div>
      </section>

      <section className="sticky top-0 flex h-screen items-center justify-center bg-neutral-800 md:p-4">
        <div className="max-w-[820px] text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            className="mb-5 pb-12 text-4xl font-bold md:text-3xl">
            How we work?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
            className="break-keep pb-8 text-left text-2xl leading-9 text-[#989898] md:text-xl">
            Sevenline Labs is a place full of experienced and actionable people. Our team is a very
            attractive team that can execute the customer&apos;s process immediately.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
            className="break-keep text-left text-2xl leading-9 text-[#989898] md:text-xl">
            The important thing is not just to think, but to reach results.Our headquarters is in
            Korea, but we can work in the world through the network.
          </p>
        </div>
      </section>

      <section className="sticky top-0 flex h-screen items-center justify-center bg-neutral-950 md:p-4">
        <div className="max-w-[820px] text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            className="mb-5 pb-12 text-4xl font-bold md:text-3xl">
            Interested to join?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
            className="break-keep pb-8 text-left text-2xl leading-9 text-[#989898] md:text-xl">
            We&apos;re always looking for exceptional talent.Check out our open positions, or just
            reach out if our mission, challenges and culture resonate with you.
          </p>
        </div>
      </section>

      <section className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#11142b] md:p-4">
        <div className="max-w-[820px] text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            className="mb-5 pb-12 text-4xl font-bold md:text-3xl">
            Backed by th wisionaries
          </h1>
          <div
            className="logo-group"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200">
            <a
              href="https://blog.matter-labs.io/grant-from-the-ethereum-foundation-for-matter-labs-64338f3dd938"
              target="_blank">
              <EthereumFoundation />
            </a>
            <a href="https://www.tokyomongzhillsclub.com/" target="_blank">
              <Image src={TmhcLogo} alt="tmhc-logo" />
            </a>
            <a href="https://polygon.technology/" target="_blank">
              <Image src={MaticLogo} alt="matic-logo" />
            </a>
            <a href="https://www.bnbchain.org/" target="_blank">
              <Image src={BscLogo} alt="bsc-logo" />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
          className="cont-box-wrapper w-full max-w-[820px]">
          <div className="cont-box sm:flex-wrap sm:px-3 sm:py-7 sm:text-center">
            <div className="left-cont titleArea p-0 pr-3 text-white">
              <h2 className="left mb-5 text-4xl font-bold sm:text-3xl">Contact us</h2>
              <p className="break-all pb-6 text-[#989898] sm:text-sm">
                If you are interested in our project, please forward your email address. If you
                deliver the email address, it will be delivered to our team. Our team will contact
                you by your email soon.
              </p>
            </div>
            <div className="right-cont flex flex-col flex-nowrap justify-around pl-3">
              <div className="follow-container flex flex-row flex-nowrap items-center justify-between text-white">
                <div className="follow-title text-[#989898]">Follow us:</div>
                <div className="follow-sns inline-flex gap-3">
                  <Link href="https://x.com/" target="_blank">
                    <Social_X width={'1.25rem'} height={'1.25rem'} />
                  </Link>
                  <Link href="https://github.com/" target="_blank">
                    <Social_Git width={'1.25rem'} height={'1.25rem'} />
                  </Link>
                </div>
              </div>

              <div className="email-container text-right">
                <a
                  href="mailTo:cs@sevenlinelabs.com"
                  className="send-mail-button h-full w-24 cursor-pointer bg-[#4e529a] px-4 py-2 font-bold text-white transition-colors hover:bg-[#282a4a]">
                  Send Mail
                </a>
              </div>
            </div>
          </div>
        </div>
        s
      </section>
    </>
  )
}

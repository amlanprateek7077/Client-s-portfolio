import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className=' relative w-full border-2 border-solid border-Dark_gray text-Medium text-lg sm:text-base '>
      <Layout className='py-8 flex items-center justify-between ld:flex-col ld-py-6'>
        <span>{new Date().getFullYear()} &copy; Aps || All Rights reserved</span>
        <Link href="/">&#9829;Join Us</Link>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
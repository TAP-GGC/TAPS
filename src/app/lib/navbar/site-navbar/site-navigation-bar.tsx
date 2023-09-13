"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";


interface SiteNavigationBarProps {
  brand: string,
  homePage: string,
  children: React.ReactNode,
}

export default function SiteNavigationBar(props: SiteNavigationBarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY
  
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }
  
      setPrevScrollPos(currentScrollPos)
  }
  
  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <nav className={ `w-screen flex-col items-center bg-secondary-400 py-20 md:sticky md:top-0 ${visible ? '' : 'md:translate-y-[-100%]'} md:delay-150 md:duration-300 md:py-1 md:h-fit md:px-20 md:flex-row md:justify-between` }>
      <Link href={ props.homePage } className="text-lg tracking-widest pb-5 md:text-sm md:pb-0">{ props.brand }</Link>
      <div className="flex-col w-screen flex md:gap-7 md:w-fit md:flex-row">
        { props.children }
      </div>
    </nav>
  )
}
import React, { useState, useEffect } from 'react'
import './backTop.css'

export default function BackToTop() {
    const [goToTop, setGoToTop] = useState(false)

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    useEffect(() => {
        const handleScroll = () => {           
            setGoToTop(window.scrollY >= 800)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {goToTop && (<btn className='backTop' onClick={scrollToTop}><i className="fas fa-arrow-up"></i></btn>)}
        </>
    )
}
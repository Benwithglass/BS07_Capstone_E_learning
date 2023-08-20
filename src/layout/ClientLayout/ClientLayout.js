import React from 'react'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'

export default function ClientLayout({Component}) {
  return (
    <div>
        <Header/>
        <Component/>
        <Footer/>
    </div>
  )
}

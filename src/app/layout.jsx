'use client'
import React from 'react'
import '../style/global.css'
import Providers from './Providers'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const Layout = ({children}) => {
  
  return (
    <html lang='en'>
        <body>
            <Providers>
              <Header/>
                {children}
            </Providers>
        </body>
    </html>
  )
}

export default Layout

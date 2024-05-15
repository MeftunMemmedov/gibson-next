'use client'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { CartProvider } from 'react-use-cart'

const Providers = ({children}) => {
  return (
    <>
      <Provider store={store}>
        <CartProvider>
          {children}
        </CartProvider>
      </Provider>
    </>
  )
}

export default Providers

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  storeProvider from './storeProvider'
import StoreProvider from './storeProvider'

const inter = Inter(
  { 
    subsets: ['latin'] 
  }
)

export const metadata= {
  title: 'HopAround App',
  description: 'Travel and Accomodation App',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className='overflow-hidden relative'>
        <StoreProvider>
        {/* <main className='relative overflow-hidden'> */}
          {children}
        {/* </main> */}
        </StoreProvider>

        
      </body>
    </html>
  )
}
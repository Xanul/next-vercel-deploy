import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Rodrigo</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar />

      <main className={styles.main}>
        
        { children }

      </main>
    </>
  )
}

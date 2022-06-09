import React from 'react'
import Home from '../pages/home'
import Head from 'next/head'

const Base: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Janderson Ariel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default Base
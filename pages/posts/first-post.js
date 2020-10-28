import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { util } from '../../utils/'

export default function FirstPost() {
  return (
    <Layout>
          <Head>
        <title>First Post</title>
      </Head>
      <h1> 
      First Post {util(6)}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
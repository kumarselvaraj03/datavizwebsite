import Header from 'dvfrontend/components/Header'
import Head from 'next/head'

export default function Home({todos}) {
  return (
    <>
      <Head>
        <title>DataViz - Beautiful, easy data visualization and storytelling</title>
        <meta name="description" content="Beautiful, easy data visualization and storytelling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}

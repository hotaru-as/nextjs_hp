import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <p className='text-4xl'>Welcome to Nextjs</p>
    </Layout>
  )
}

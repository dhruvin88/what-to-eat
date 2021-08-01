import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import { MasterForm } from '../components/master-form'

export default function Home() {
  return (
    <Layout home>
      <MasterForm></MasterForm>
    </Layout>
  )
}

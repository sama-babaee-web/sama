import Header from './Header'
import styles from '@/styles/Home.module.css'
import HomeWrapper from './Home'
import SocialMedia from './SocialMedia'
// import CustomCursor from './CustomCursor'

export default function Layout({ children }) {
  return (
    <>
      {/* <CustomCursor /> */}
      <div className={`${styles.main}  container-fluid `}>
        <div className='container-xxl p-0 m-0'>
          <SocialMedia />
          <Header />
          <main className='py-4' >
            <section className="">
                {children}
            </section>
          </main>

        </div>
      </div>
    </>
  )
}
import { useState, useEffect } from 'react'
import GnbTop from './components/GnbTop'
import GnbNav from './components/GnbNav'
import MobDrawer from './components/MobDrawer'
import Footer from './components/Footer'
import CeoPage from './pages/CeoPage'
import VodPage from './pages/VodPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import ProgramPage from './pages/ProgramPage'

type Page = 'home' | 'ceo' | 'program' | 'vod' | 'faq'

function useScrollReveal() {
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight
      document.querySelectorAll<Element>('.reveal:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) el.classList.add('in')
      })
      document.querySelectorAll<Element>('.srise:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) el.classList.add('in')
      })
    }
    check()
    const timer = setInterval(check, 350)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])
}

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [page])

  return (
    <>
      <svg style={{ display: 'none' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wg" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="wgs" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
      <GnbTop />
      <GnbNav currentPage={page} onSwitchPage={setPage} onOpenDrawer={() => setDrawerOpen(true)} />
      <MobDrawer isOpen={drawerOpen} currentPage={page} onClose={() => setDrawerOpen(false)} onSwitchPage={setPage} />
      {page === 'home' && <HomePage onSwitchPage={setPage} />}
      {page === 'ceo' && <CeoPage />}
      {page === 'program' && <ProgramPage />}
      {page === 'vod' && <VodPage />}
      {page === 'faq' && <FaqPage />}
      <Footer />
    </>
  )
}

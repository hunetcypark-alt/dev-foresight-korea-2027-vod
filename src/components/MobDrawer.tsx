type Page = 'home' | 'ceo' | 'program' | 'vod' | 'faq'

interface Props {
  isOpen: boolean
  currentPage: Page
  onClose: () => void
  onSwitchPage: (p: Page) => void
}

export default function MobDrawer({ isOpen, currentPage, onClose, onSwitchPage }: Props) {
  const go = (p: Page) => { onSwitchPage(p); onClose() }
  return (
    <>
      <div className={`mob-overlay${isOpen ? ' open' : ''}`} aria-hidden={!isOpen} onClick={onClose} />
      <div className={`mob-drawer${isOpen ? ' open' : ''}`} id="mob-drawer" role="dialog" aria-modal="true" aria-label="내비게이션">
        <div className="mob-drawer-head">
          <span className="mob-drawer-title">FORESIGHT KOREA 2027</span>
          <button className="mob-drawer-close" aria-label="메뉴 닫기" onClick={onClose}>
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mob-drawer-nav">
          <div className="mob-drawer-label">포럼 메뉴</div>
          <a href="#" data-page="home" className={currentPage === 'home' ? 'on' : ''} onClick={(e) => { e.preventDefault(); go('home') }}>Home</a>
          <a href="#" data-page="ceo" className={currentPage === 'ceo' ? 'on' : ''} onClick={(e) => { e.preventDefault(); go('ceo') }}>CEO Remarks</a>
          <a href="#" data-page="program" className={currentPage === 'program' ? 'on' : ''} onClick={(e) => { e.preventDefault(); go('program') }}>Program &amp; Speakers</a>
          <a href="#" data-page="vod" className={currentPage === 'vod' ? 'on' : ''} onClick={(e) => { e.preventDefault(); go('vod') }}>VOD</a>
          <a href="#" data-page="faq" className={currentPage === 'faq' ? 'on' : ''} onClick={(e) => { e.preventDefault(); go('faq') }}>FAQ</a>
          <div className="mob-drawer-divider"></div>
          <div className="mob-drawer-label">Forum Archive</div>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ opacity: .55, cursor: 'default' }}>
            2027 <span style={{ fontSize: 11, background: 'rgba(223,7,46,.15)', color: 'var(--hunet-red)', padding: '1px 6px', borderRadius: 4, fontWeight: 600, letterSpacing: '.06em' }}>NOW</span>
          </a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2026/home" target="_blank" rel="noreferrer">2026</a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2025/home" target="_blank" rel="noreferrer">2025</a>
        </nav>
      </div>
    </>
  )
}

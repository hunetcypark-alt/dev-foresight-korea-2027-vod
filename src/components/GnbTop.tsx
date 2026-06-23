export default function GnbTop() {
  return (
    <div id="gnb-top">
      <a href="#" className="gt-logo" aria-label="휴넷CEO">
        <img src="/dev-foresight-korea-2027-vod/assets/hunet-ceo-logo.svg" alt="휴넷CEO" style={{ width: 26 }} />
      </a>
      <div className="gt-right">
        <nav className="gt-snav">
          <a href="#"></a>
          <a href="#" style={{ fontFamily: "'PT Serif'" }}>휴넷CEO</a>
          <a href="#" className="on" style={{ fontFamily: "'PT Serif'" }}>FORESIGHT KOREA</a>
        </nav>
        <div className="gt-vsep"></div>
        <div className="gt-user">
          <span>박시안님</span>
          <img src="/dev-foresight-korea-2027-vod/assets/user-icon.svg" alt="" />
        </div>
        <a href="#" className="gt-myforum" style={{ borderStyle: 'none', fontFamily: "'PT Serif'", padding: '5px 0px' }}>My Forum</a>
      </div>
    </div>
  )
}

import { useState } from 'react'

const FAQS = [
  { q: '행사는 언제, 어디에서 진행되나요?', a: 'FORESIGHT KOREA 2027 오프라인은 2027년 10월 1일(목) 서울 그랜드 인터컨티넨탈 파르나스에서 진행됩니다. 현장 라이브 강연은 유료 신청 참가자에 한해 본 홈페이지에서 오전 9시부터 오후 6시까지 시청하실 수 있습니다.' },
  { q: '등록 후 취소/환불은 어떻게 하나요?', a: '행사 2일 전(2027년 9월 27일)까지 전액 환불 가능합니다. 행사 전날부터는 환불이 불가합니다. 취소는 My Forum에서 직접 신청하시거나 고객센터(1588-6559)로 문의해 주세요.' },
  { q: 'ALL PASS와 LIVE PASS의 차이가 무엇인가요?', a: 'ALL PASS는 오프라인 현장 참석 + 라이브 생중계 + 다시보기(3개월)가 포함됩니다. LIVE PASS는 라이브 생중계 + 다시보기(3개월)가 포함되며, 오프라인 현장 참석은 제공되지 않습니다.' },
  { q: '단체 등록은 어떻게 진행하나요?', a: '6인 이상 단체 등록은 고객센터(1588-6559)로 문의해 주세요. 담당자가 배정되어 단체 할인 및 별도 등록 절차를 안내해 드립니다.' },
  { q: '얼리버드 할인은 언제까지 적용되나요?', a: '얼리버드 1차(~8/15, 40% 할인), 2차(~8/27, 30% 할인), 3차(~9/13, 15% 할인)로 운영됩니다. 단계별로 할인율이 낮아지니 빨리 등록하실수록 유리합니다.' },
  { q: '세금계산서 발행이 가능한가요?', a: '세금계산서 발행이 필요하신 경우 고객센터(1588-6559) 또는 이메일(hubiz@hunet.co.kr)로 문의해 주세요.' },
  { q: '다시보기는 언제부터 제공되나요?', a: '다시보기는 행사 종료 후 영업일 기준 3~5일 내에 ALL PASS 및 LIVE PASS 구매자에게 3개월간 무료로 제공됩니다.' },
  { q: '주차 지원이 가능한가요?', a: '행사 당일 그랜드 인터컨티넨탈 서울 파르나스 지하 주차장을 무료로 이용하실 수 있습니다. 단, 주차 공간이 한정되어 있으므로 대중교통 이용을 권장합니다.' },
  { q: '수료증은 발급되나요?', a: '행사 참석자에게는 수료증이 발급됩니다. My Forum에서 PDF로 다운로드하실 수 있습니다.' },
  { q: '강연 자료는 어디서 받을 수 있나요?', a: 'ALL PASS 및 LIVE PASS 구매자에게는 연사별 강연 자료(PDF)가 My Forum을 통해 제공됩니다. 연사 동의 후 제공 가능한 자료에 한해 배포됩니다.' },
]

const ArrowIcon = () => (
  <svg className="faq-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" width="20" height="20" style={{ flexShrink: 0, transition: 'transform .25s' }}>
    <g fill="none" fillRule="evenodd">
      <path fill="currentColor" fillRule="nonzero" d="m17.54 7.942-6.535 6.25a.67.67 0 0 1-.462.183.67.67 0 0 1-.463-.183l-6.536-6.25a.606.606 0 0 1 0-.884.675.675 0 0 1 .925 0l6.074 5.808 6.073-5.808a.68.68 0 0 1 .632-.162.64.64 0 0 1 .462.442.61.61 0 0 1-.17.604" />
      <path d="M.085 0H21v20H.085z" />
    </g>
  </svg>
)

const PinIcon = ({ label }: { label: string }) => (
  <span className="faq-pin">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 31" width="24" height="30">
      <path fill="currentColor" d="M12 .188c6.627 0 12 5.372 12 12 0 2.55-.799 4.913-2.155 6.857h.012l-.092.111q-.473.661-1.029 1.252l-8.074 9.83a.857.857 0 0 1-1.324 0l-8.075-9.83a12 12 0 0 1-1.029-1.252l-.091-.111h.012A11.94 11.94 0 0 1 0 12.187c0-6.627 5.373-12 12-12" />
    </svg>
    <span className="faq-pin-label">{label}</span>
  </span>
)

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div id="page-faq" className="page" style={{ background: '#fff', minHeight: '100vh' }}>
      <div className="subtop">
        <div className="subtop-row">
          <div className="subtop-left">
            <img src="/dev-foresight-korea-2027-vod/assets/img/logo-w-h.png" alt="FORESIGHT KOREA 2027" className="subtop-logoimg" />
          </div>
          <div className="subtop-right">
            <div className="subtop-textblock">
              <p className="subtop-main-ttl">2027년을 미리본다</p>
              <p className="subtop-sub-ttl">AX&thinsp;·&thinsp;Transforming into an AI-Native Company</p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-body">
        <div className="faq-sec">
          <header className="pgsec-head">
            <h2 className="pgsec-title">오시는 길</h2>
          </header>
          <div className="faq-venue">
            <span className="faq-venue-name">그랜드 인터컨티넨탈 서울 파르나스 5F Grand Ballroom</span>
            <span className="faq-venue-addr">(서울특별시 강남구 테헤란로 521)</span>
          </div>
          <div className="faq-map">
            <img src="https://ceo.hunet.co.kr/static/images/foresight-korea/2026/faq/map.png" alt="오시는 길 지도" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <p className="faq-map-note">※ 인터컨티넨탈 서울 코엑스와 혼동하시지 않도록 참고해주시기 바랍니다.</p>
        </div>

        <div className="faq-sec faq-traffic">
          <div className="faq-trow">
            <div className="faq-ticon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" width="22" height="22"><path fill="currentColor" d="M15.26 2.334H7.235c-.205 0-1.282.06-2.294 1.238C3.944 4.732 3.916 5.874 3.916 6v10.084a1.834 1.834 0 0 0 1.833 1.833h.917l-1.833 2.75H6.99l.611-.917h7.333l.62.917h2.112l-1.833-2.75h.916a1.833 1.833 0 0 0 1.834-1.834V6c0-.172-.03-1.314-1.035-2.443-1.06-1.19-2.165-1.223-2.288-1.223M9.416 4.167h3.667V6H9.416zM7.124 16.084a1.376 1.376 0 1 1 .001-2.752 1.376 1.376 0 0 1 0 2.752m8.25 0a1.375 1.375 0 1 1 .001-2.751 1.375 1.375 0 0 1 0 2.75M16.75 11.5h-11V7.834h11z"/></svg>
              <span className="faq-tname">지하철</span>
            </div>
            <div className="faq-tdetail">
              <div className="faq-subway-row">
                <span className="faq-line-badge">2호선</span>
                <div>
                  <span className="faq-ttext fw">삼성역 5번출구 (도보 1분)</span>
                  <span className="faq-ttext sm">*지하로 오실 경우 파르나스몰 내 연결 엘리베이터를 이용하실 수 있습니다.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-trow">
            <div className="faq-ticon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" width="22" height="22"><path fill="currentColor" d="M16.75 10.63h-11V6.045h11M15.373 16.13a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75m-8.25 0a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75m-3.208-.916c0 .806.358 1.53.917 2.035v1.631a.917.917 0 0 0 .916.917h.917a.917.917 0 0 0 .917-.917v-.916h7.333v.916a.917.917 0 0 0 .917.917h.916a.917.917 0 0 0 .917-.917v-1.631c.56-.504.917-1.229.917-2.035V6.046c0-3.208-3.282-3.667-7.334-3.667s-7.333.459-7.333 3.667z"/></svg>
              <span className="faq-tname">버스</span>
            </div>
            <div className="faq-tdetail faq-bus-detail">
              {[
                { label: 'A', stop: '지하철 2호선 삼성역', buses: '146, 333, 341, 360, 740, N13, N61, 3411, 500-2, 1100, 1700, 2000, 2000-1, 7007, 9303, 8001, P9601, P9602, M6450, 강남07, 강남08' },
                { label: 'B', stop: '지하철 2호선 삼성역', buses: '11-3, 917, 350, 401, 2413, 3422, 4318, 4319, 6900, 9407, 9507, 9607' },
                { label: 'C', stop: '무역 센터', buses: '143, 2413, 4419, 500-2, 9407, 9507, 9607, 강남01, 강남06, 강남08' },
              ].map((b) => (
                <div className="faq-bus-row" key={b.label}>
                  <div className="faq-bus-stop">
                    <PinIcon label={b.label} />
                    <span className="faq-ttext fw">{b.stop}</span>
                  </div>
                  <span className="faq-ttext">{b.buses}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderBottom: '1px solid #e1e2e4' }}></div>
        </div>

        <div className="faq-sec">
          <header className="pgsec-head">
            <h2 className="pgsec-title">FAQ</h2>
          </header>
          <div id="faq-list" style={{ borderTop: '1px solid #171719' }}>
            {FAQS.map((item, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{item.q}</span>
                  <ArrowIcon />
                </button>
                {open === i && (
                  <div className="faq-answer">
                    <p className="faq-a-text">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="faq-contact">찾으시는 내용이 없으시면 <a href="mailto:hubiz@hunet.co.kr"><strong>hubiz@hunet.co.kr</strong></a>로 문의해 주세요.</p>
        </div>
      </div>
    </div>
  )
}

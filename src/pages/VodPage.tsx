import { useState } from 'react'

const TRACKS = [
  { key: 'all', name: '전체 - 사업전략 수립을 위한 포사이트 코리아 2027', price: 500000 },
  { key: 'a', name: 'TRACK A - [포사이트 코리아 2027] 거시환경', price: 150000 },
  { key: 'b', name: 'TRACK B - [포사이트 코리아 2027] 경영전략·혁신', price: 150000 },
  { key: 'c', name: 'TRACK C - [포사이트 코리아 2027] AX · Tech', price: 150000 },
  { key: 'd', name: 'TRACK D - [포사이트 코리아 2027] 마케팅', price: 150000 },
  { key: 'e', name: 'TRACK E - [포사이트 코리아 2027] 조직인사·리더십', price: 150000 },
]

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 10" width="11" height="9" aria-hidden="true">
    <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="1.688" d="m4.411 8.375 6.75-6.75M4.214 8.178l-2.98-2.98" />
  </svg>
)

export default function VodPage() {
  const [selected, setSelected] = useState('all')
  const current = TRACKS.find((t) => t.key === selected) ?? TRACKS[0]

  return (
    <div id="page-vod" className="page">
      <section className="vod-main">
        <div className="vod-heading">
          <h2>FORESIGHT KOREA 2027</h2>
          <p>VOD 타입을 선택하세요</p>
        </div>
        <div className="vod-card">
          <ul className="vod-notes">
            <li>・ 모든 VOD 타입에는 기조연설(KEYNOTE) 영상 및 각 강의별 교안(PDF)가 제공됩니다.</li>
            <li>・ 구매한 VOD는 바로 학습 가능합니다. (우측 상단 My Forum &gt; 학습내역)</li>
          </ul>
          <ul className="vod-tracks">
            {TRACKS.map((track) => (
              <li key={track.key} className={`vod-track${selected === track.key ? ' selected' : ''}`} onClick={() => setSelected(track.key)}>
                <span className={`vod-check${selected === track.key ? ' checked' : ''}`}><CheckIcon /></span>
                <span className="vod-track-label">
                  <span className="vod-track-name">{track.name}</span>
                  <span className="vod-track-price">{track.price.toLocaleString('ko-KR')}원</span>
                </span>
              </li>
            ))}
          </ul>
          <dl className="vod-total">
            <dt>총 결제금액</dt>
            <dd>{current.price.toLocaleString('ko-KR')}원</dd>
          </dl>
        </div>
        <div className="vod-action">
          <button type="button" className="vod-buy-btn">VOD 구매하기</button>
        </div>
        <div className="vod-already">
          <span>VOD를 구매했다면?</span>
          <a href="#">VOD 학습하기
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path fill="currentColor" fillRule="nonzero" d="m18.114 16-7.057 7.057a1.333 1.333 0 1 0 1.886 1.886l8-8c.52-.52.52-1.365 0-1.886l-8-8a1.333 1.333 0 1 0-1.886 1.886z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

import { useState, useRef, useEffect, type CSSProperties } from 'react'

type Page = 'home' | 'ceo' | 'program' | 'vod' | 'faq'
interface Props { onSwitchPage: (p: Page) => void }

interface Speaker {
  no: string
  img: string | null
  alt: string
  title: string
  company: string
  name: string
  video?: boolean
  tbd?: boolean
}

const TRACK_A: Speaker[] = [
  { no: 'A-1', img: 'img.png',   alt: '윤상하', title: '2027 사업계획의 첫 번째 전제: 성장·물가·교역의 새 질서', company: '대외경제정책연구원', name: '윤상하 실장', video: true },
  { no: 'A-2', img: 'img-1.png', alt: '이승주', title: '모두가 타깃이 되는 세계: 2027 지정학 리스크와 한국 기업의 선택', company: '중앙대학교', name: '이승주 교수' },
  { no: 'A-3', img: 'img-2.png', alt: '강명수', title: '에너지·물류 초크포인트: 원가와 공급망을 흔드는 다음 충격', company: '삼일PwC', name: '강명수 국제통상솔루션센터장' },
  { no: 'A-4', img: null,        alt: '',      title: '환율·금리·자본비용: 2027 재무 전략의 리스크 지도', company: '', name: 'TBD', tbd: true },
  { no: 'A-5', img: 'img-4.png', alt: '주원',  title: 'K자형 양극화의 한국 경제: 2027 성장 기회와 방어 전략', company: '현대경제연구원', name: '주원 실장' },
  { no: 'A-6', img: 'img-5.png', alt: '김동규', title: '불확실성을 숫자로 바꾸는 시나리오 경영: 예산과 실행계획의 기술', company: 'PADO', name: '김동규 편집장' },
]

const TRACK_B: Speaker[] = [
  { no: 'B-1', img: 'img-6.png',  alt: '강정묵', title: '연간 계획의 종말: AI Adaptive Planning으로 전략을 다시 짜다', company: 'PwC', name: '강정묵 파트너', video: true },
  { no: 'B-2', img: 'img-7.png',  alt: '원정준', title: 'AI Native 도약의 첫 조건: 성장을 막는 레거시를 버리는 법', company: 'KPMG', name: '원정준 부대표' },
  { no: 'B-3', img: 'img-8.png',  alt: '노상규', title: 'Dual AX 전략: 사업 모델과 실행 역량을 동시에 바꾸다', company: '서울대학교', name: '노상규 교수' },
  { no: 'B-4', img: 'img-9.png',  alt: '신현한', title: '[AX사례] 제품을 넘어 생태계로: 플랫폼 기업은 어떻게 비즈니스를 재정의했나', company: '연세대학교', name: '신현한 교수' },
  { no: 'B-5', img: 'img-10.png', alt: '최창범', title: '[AX사례] 실행 속도의 혁명: 하이퍼 스냅스 조직은 어떻게 움직이는가', company: 'PwC', name: '최창범 전무' },
  { no: 'B-6', img: 'img-11.png', alt: '손재권', title: '실리콘밸리의 극단적 AX: \'1인 유니콘\'이 던지는 성장의 질문', company: '더밀크', name: '손재권 대표' },
]

const TRACK_C: Speaker[] = [
  { no: 'C-1', img: 'img-12.png', alt: '윤성훈', title: '스틸칼라의 등장: 피지컬 AI가 산업 현장을 바꾸는 방식', company: '커니(Kearney)', name: '윤성훈 파트너', video: true },
  { no: 'C-2', img: 'img-13.png', alt: '백서인', title: '테크 드래곤의 비상: 중국 AI 굴기가 바꾸는 경쟁의 판', company: '한양대학교', name: '백서인 교수' },
  { no: 'C-3', img: 'img-14.png', alt: '김용섭', title: 'AI 투자의 성패: 거품과 워크슬롭을 넘어 ROI를 만드는 법', company: '날카로운상상력연구소', name: '김용섭 소장' },
  { no: 'C-4', img: 'img-15.png', alt: '이동근', title: '[AX사례] 전사 AI 도입의 현실: 성공 조건과 실패 패턴', company: 'KPMG', name: '이동근 AI센터장' },
  { no: 'C-5', img: 'img-16.png', alt: '정연승', title: '자율 경제 에이전트(AEA): AI가 결정하는 시대의 통제와 책임', company: '단국대학교', name: '정연승 교수' },
  { no: 'C-6', img: 'img-17.png', alt: '정희선', title: '통제인가 자율인가: 새도우 AI를 성과로 바꾸는 조직 설계', company: '일본 유자베이스', name: '정희선 애널리스트' },
]

const TRACK_D: Speaker[] = [
  { no: 'D-1', img: 'img-18.png', alt: '전미영', title: 'AI 네이티브 소비자의 탄생: 2027 고객은 어떻게 선택하는가', company: '트렌드코리아컴퍼니', name: '전미영 박사', video: true },
  { no: 'D-2', img: 'img-19.png', alt: '윤성훈', title: '검색 이후의 브랜드 전략: AI가 바꾼 구매 여정의 새 규칙', company: 'Kearney', name: '윤성훈 파트너' },
  { no: 'D-3', img: 'img-20.png', alt: '이승무', title: 'AI 시대의 미디어 투자 전략: 채널 믹스와 성과 극대화의 새 공식', company: '한국종합예술원', name: '이승무 교수' },
  { no: 'D-4', img: 'img-21.png', alt: '송수진', title: '[AX사례] 퍼포먼스 마케팅의 재설계: AI 측정·최적화와 인간의 판단', company: '고려대학교', name: '송수진 교수' },
  { no: 'D-5', img: 'img-22.png', alt: '이중학', title: 'AI 네이티브 마케팅 조직: 사람과 에이전트는 어떻게 협업하는가', company: '동국대학교', name: '이중학 교수' },
  { no: 'D-6', img: 'img-23.png', alt: '이승훈', title: '[AX사례] 고객 경험의 AX: AI는 접점을 어떻게 바꾸는가', company: '링글', name: '이승훈 대표' },
]

const TRACK_E: Speaker[] = [
  { no: 'E-1', img: 'img-24.png', alt: '이중학', title: '글로벌 빅테크가 다시 짠 일의 구조: AI Native 직무 재설계', company: '동국대학교', name: '이중학 교수', video: true },
  { no: 'E-2', img: 'img-25.png', alt: '강정수', title: '프롬프트가 업무 능력이 된 시대: 임직원 AI 리스킬링 전략', company: '블루닷 AI연구센터', name: '강정수 센터장' },
  { no: 'E-3', img: 'img-26.png', alt: '백서인', title: '프롬프트 리더십: 구성원의 AI 잠재력을 깨우는 리더의 역할', company: '한양대학교', name: '백서인 교수' },
  { no: 'E-4', img: 'img-27.png', alt: '한광모', title: '[AX사례] AI Native HR: 채용부터 평가까지 인재 의사결정을 바꾸다', company: 'SAP', name: '한광모 본부장' },
  { no: 'E-5', img: 'img-28.png', alt: '이동근', title: '[AX사례] 전사 AI 내재화의 조건: 임원진은 어떻게 변화를 밀어붙였나', company: 'KPMG', name: '이동근 전무' },
  { no: 'E-6', img: 'img-29.png', alt: '오성미', title: '[AX사례] 연공서열과 AI 속도의 충돌: 한국형 조직의 현실적 전환법', company: '마이크로소프트', name: '오성미 총괄팀장' },
]

const VIDEOS = [
  { ytid: 'oUKRWztjfeU', title: '작년 행사 참석자가 전하는 \'포사이트 코리아 이런 점이 좋았어요!\'' },
  { ytid: 'FpNbvALZbsY', title: '[월간휴넷 포사이트 코리아 2027 프리뷰] Session 1.' },
  { ytid: 'Jf-q5UycxZE', title: '[월간휴넷 포사이트 코리아 2027 프리뷰] Session 2.' },
  { ytid: 'E97ubaSDmJg', title: '피크코리아, 경영을 새로 쓰다' },
  { ytid: 'UE8wSGiSUY8', title: '한국 기업이 집중해야 되는 경영 전략?' },
  { ytid: 'w1kdDdMTUPU', title: '대한민국 CEO를 대상으로 한 흥미로운 설문 결과?' },
  { ytid: '48tjZLQwhO0', title: '경제 성장의 원동력은 이것? 그런데 왜 성장은 멈췄을까' },
  { ytid: 'djDv8E_2BVk', title: '국내 AI 활용과 해외의 차이점은?' },
  { ytid: 'Vnzc_SDWKqw', title: '대전환의 분기점: 글로벌 경제 전망 2027' },
  { ytid: 'yYqh4AVyxao', title: '격변기 사업전략의 새로운 프레임워크' },
  { ytid: 'Ig4pbjy_83w', title: 'AI에 의한 고객 여정의 마지막 진화, 위임하는 종의 탄생' },
  { ytid: '4oQNeugn4v8', title: '연공서열 파괴, 원점 사고로 다시 만드는 미래 조직' },
  { ytid: 'lu2HulShvGQ', title: '테크트렌드 2027: AI 전쟁을 미리보다' },
]

const TRACK_DEFS = [
  { id: 'a', acc: '#3cc6ff', label: 'TRACK A', cat: '거시환경',       speakers: TRACK_A },
  { id: 'b', acc: '#4aa6ff', label: 'TRACK B', cat: '경영전략·혁신', speakers: TRACK_B },
  { id: 'c', acc: '#5a8dff', label: 'TRACK C', cat: 'AX · Tech',     speakers: TRACK_C },
  { id: 'd', acc: '#6f7bf0', label: 'TRACK D', cat: '마케팅',         speakers: TRACK_D },
  { id: 'e', acc: '#8b5cf6', label: 'TRACK E', cat: '조직인사·리더십', speakers: TRACK_E },
]

function VideoIcon() {
  return (
    <span className="sc-vid-ic" title="영상 강연">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/>
        <path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/>
      </svg>
    </span>
  )
}

function SpeakerCard({ sp }: { sp: Speaker }) {
  return (
    <article className={`sc srise${sp.tbd ? ' is-tbd' : ''}`} style={{ fontSize: 16 }}>
      <div className="sc-photo">
        {sp.img ? (
          <img
            src={`/assets/img/speakers/${sp.img}`}
            alt={sp.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        ) : (
          <img
            src="/assets/img/man.svg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center', transform: 'scale(1.2) translateY(25%)', transformOrigin: 'bottom center', opacity: 0.4 }}
          />
        )}
      </div>
      <div className="sc-no">{sp.no}</div>
      <div className="sc-title">
        {sp.video && <VideoIcon />}
        {sp.title}
      </div>
      <div className="sc-foot">
        <div className="sc-co">{sp.company || <>&nbsp;</>}</div>
        <div className="sc-name">{sp.name}</div>
      </div>
    </article>
  )
}

export default function HomePage({ onSwitchPage }: Props) {
  const [ytModal, setYtModal] = useState<string | null>(null)
  const ivTrackRef = useRef<HTMLDivElement>(null)
  const trkZoneRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // hero-canvas.js 로드
  useEffect(() => {
    const s = document.createElement('script')
    s.src = '/assets/hero-canvas.js'
    s.async = true
    document.body.appendChild(s)
    return () => { document.body.removeChild(s) }
  }, [])

  // ESC 키로 유튜브 모달 닫기
  useEffect(() => {
    if (!ytModal) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setYtModal(null) }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [ytModal])

  function scrollCarousel(dir: 'prev' | 'next') {
    const el = ivTrackRef.current
    if (!el) return
    const slideW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? 280
    el.scrollBy({ left: dir === 'next' ? slideW * 2 : -slideW * 2, behavior: 'smooth' })
  }

  function scrollToTrack(id: string) {
    const el = trkZoneRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="page-home" className="page active">

      {/* ① HERO */}
      <section id="hero">
        <video id="hero-video" autoPlay muted loop playsInline>
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div id="hero-dim"></div>
        <canvas id="grid-cv"></canvas>
        <canvas id="cv"></canvas>

        <div id="hb" style={{ height: 800, padding: '100px 60px 0px', fontWeight: 800, margin: '6px 0px 0px' }}>
          {/* FK 로고 */}
          <div id="lw">
            <svg width="445" height="305" viewBox="0 0 445 305" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Foresight Korea" style={{ width: 180 }}>
              <defs>
                <linearGradient id="ray-grad" x1="100" y1="290" x2="420" y2="10" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c8e8ff"/>
                  <stop offset=".35" stopColor="#70b8ff"/>
                  <stop offset=".7"  stopColor="#2080e0"/>
                  <stop offset="1"   stopColor="#0050b0"/>
                </linearGradient>
                <filter id="rg">
                  <feGaussianBlur stdDeviation="1" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <g className="rays" filter="url(#rg)">
                <path d="M225.67 107.42L227.7 105.37L227.92 105.54L225.88 107.6L225.67 107.42Z" fill="url(#ray-grad)"/>
                <path d="M338.94 196L333.09 202.06L288.86 163.09L293.15 158.69L338.94 196Z" fill="url(#ray-grad)"/>
                <path d="M325.49 209.66L319.43 215.51L283.36 171.25L287.82 166.91L325.49 209.66Z" fill="url(#ray-grad)"/>
                <path d="M305.4 228.37L277.3 179.7L281.9 175.46L311.6 222.8L305.4 228.37Z" fill="url(#ray-grad)"/>
                <path d="M291.19 240.47L270.69 188.38L275.4 184.27L297.45 235.25L291.19 240.47Z" fill="url(#ray-grad)"/>
                <path d="M276.96 251.7L263.54 197.22L268.33 193.29L283.21 246.88L276.96 251.7Z" fill="url(#ray-grad)"/>
                <path d="M262.88 261.95L255.9 206.14L260.72 202.42L269.04 257.57L262.88 261.95Z" fill="url(#ray-grad)"/>
                <path d="M249.11 271.14L247.82 215.03L252.64 211.57L255.12 267.24L249.11 271.14Z" fill="url(#ray-grad)"/>
                <path d="M235.78 279.22L239.37 223.8L244.14 220.63L241.58 275.81L235.78 279.22Z" fill="url(#ray-grad)"/>
                <path d="M223.02 286.15L230.61 232.33L235.29 229.49L228.55 283.24L223.02 286.15Z" fill="url(#ray-grad)"/>
                <path d="M210.93 291.93L221.65 240.52L226.2 238.02L216.16 289.53L210.93 291.93Z" fill="url(#ray-grad)"/>
                <path d="M199.58 296.58L212.59 248.23L216.96 246.11L204.48 294.67L199.58 296.58Z" fill="url(#ray-grad)"/>
                <path d="M189.04 300.13L203.53 255.36L207.69 253.63L193.57 298.7L189.04 300.13Z" fill="url(#ray-grad)"/>
                <path d="M179.34 302.64L194.6 261.81L198.5 260.47L183.5 301.66L179.34 302.64Z" fill="url(#ray-grad)"/>
                <path d="M170.5 304.16L185.89 267.48L189.53 266.54L174.28 303.61L170.5 304.16Z" fill="url(#ray-grad)"/>
                <path d="M162.52 304.76L177.53 272.32L180.87 271.77L165.92 304.61L162.52 304.76Z" fill="url(#ray-grad)"/>
                <path d="M155.4 304.53L169.6 276.28L172.63 276.1L158.43 304.73L155.4 304.53Z" fill="url(#ray-grad)"/>
                <path d="M149.11 303.53L162.19 279.33L164.9 279.51L151.77 304.06L149.11 303.53Z" fill="url(#ray-grad)"/>
                <path d="M143.62 301.84L155.36 281.48L157.75 281.98L145.93 302.66L143.62 301.84Z" fill="url(#ray-grad)"/>
                <path d="M151.25 283.53L140.88 300.63L138.89 299.54L149.18 282.72L151.25 283.53Z" fill="url(#ray-grad)"/>
                <path d="M145.42 284.18L136.56 298.02L134.89 296.71L143.66 283.09L145.42 284.18Z" fill="url(#ray-grad)"/>
                <path d="M140.31 283.96L132.95 294.91L131.57 293.4L138.85 282.63L140.31 283.96Z" fill="url(#ray-grad)"/>
                <path d="M135.93 282.94L129.99 291.36L128.88 289.68L134.75 281.4L135.93 282.94Z" fill="url(#ray-grad)"/>
                <path d="M132.26 281.16L127.64 287.44L126.79 285.62L131.35 279.44L132.26 281.16Z" fill="url(#ray-grad)"/>
                <path d="M129.3 278.71L125.85 283.21L125.24 281.26L128.64 276.83L129.3 278.71Z" fill="url(#ray-grad)"/>
                <path d="M127.03 275.64L124.59 278.7L124.19 276.65L126.6 273.63L127.03 275.64Z" fill="url(#ray-grad)"/>
                <path d="M125.42 272.02L123.8 273.97L123.6 271.83L125.19 269.91L125.42 272.02Z" fill="url(#ray-grad)"/>
                <path d="M123.45 269.06L123.43 266.85L124.38 265.75L124.42 267.94L123.45 269.06Z" fill="url(#ray-grad)"/>
                <path d="M123.5 264L123.64 261.74L124.13 261.2L123.99 263.45L123.5 264Z" fill="url(#ray-grad)"/>
                <path d="M123.92 258.83L124.21 256.52L124.39 256.33L124.1 258.63L123.92 258.83Z" fill="url(#ray-grad)"/>
                <path d="M229.24 104.81L228.52 103.94L230.56 101.92L231.31 102.77L229.24 104.81Z" fill="url(#ray-grad)"/>
                <path d="M232.53 102.15L231.52 100.4L233.57 98.42L234.64 100.12L232.53 102.15Z" fill="url(#ray-grad)"/>
                <path d="M235.75 99.62L234.65 96.8L236.71 94.86L237.9 97.6L235.75 99.62Z" fill="url(#ray-grad)"/>
                <path d="M238.91 97.21L237.91 93.15L239.99 91.24L241.09 95.22L238.91 97.21Z" fill="url(#ray-grad)"/>
                <path d="M242.01 94.92L241.32 89.45L243.4 87.58L244.21 92.95L242.01 94.92Z" fill="url(#ray-grad)"/>
                <path d="M245.03 92.75L244.87 85.7L246.96 83.87L247.27 90.81L245.03 92.75Z" fill="url(#ray-grad)"/>
                <path d="M247.99 90.69L248.55 81.91L250.65 80.12L250.25 88.78L247.99 90.69Z" fill="url(#ray-grad)"/>
                <path d="M250.87 88.75L252.38 78.08L254.48 76.33L253.16 86.87L250.87 88.75Z" fill="url(#ray-grad)"/>
                <path d="M253.7 86.91L256.34 74.22L258.45 72.5L256 85.07L253.7 86.91Z" fill="url(#ray-grad)"/>
                <path d="M256.45 85.18L260.45 70.34L262.57 68.66L258.78 83.39L256.45 85.18Z" fill="url(#ray-grad)"/>
                <path d="M259.14 83.55L264.68 66.44L266.81 64.79L261.49 81.8L259.14 83.55Z" fill="url(#ray-grad)"/>
                <path d="M261.77 82.02L269.06 62.53L271.19 60.92L264.12 80.33L261.77 82.02Z" fill="url(#ray-grad)"/>
                <path d="M264.34 80.59L273.56 58.62L275.71 57.04L266.7 78.95L264.34 80.59Z" fill="url(#ray-grad)"/>
                <path d="M266.85 79.25L278.19 54.72L280.35 53.18L269.21 77.67L266.85 79.25Z" fill="url(#ray-grad)"/>
                <path d="M269.29 78L282.95 50.84L285.12 49.33L271.65 76.49L269.29 78Z" fill="url(#ray-grad)"/>
                <path d="M271.68 76.84L287.83 46.98L290.02 45.51L274.03 75.4L271.68 76.84Z" fill="url(#ray-grad)"/>
                <path d="M274.02 75.76L292.83 43.16L295.03 41.72L276.36 74.4L274.02 75.76Z" fill="url(#ray-grad)"/>
                <path d="M276.3 74.78L297.94 39.38L300.16 37.98L278.62 73.5L276.3 74.78Z" fill="url(#ray-grad)"/>
                <path d="M278.53 73.87L303.15 35.67L305.39 34.31L280.82 72.68L278.53 73.87Z" fill="url(#ray-grad)"/>
                <path d="M280.71 73.05L308.47 32.03L310.72 30.71L282.97 71.95L280.71 73.05Z" fill="url(#ray-grad)"/>
                <path d="M282.84 72.31L313.87 28.48L316.15 27.2L285.06 71.31L282.84 72.31Z" fill="url(#ray-grad)"/>
                <path d="M284.92 71.65L319.36 25.04L321.65 23.81L287.1 70.75L284.92 71.65Z" fill="url(#ray-grad)"/>
                <path d="M286.95 71.06L324.91 21.73L327.22 20.55L289.09 70.28L286.95 71.06Z" fill="url(#ray-grad)"/>
                <path d="M288.94 70.56L330.51 18.57L332.84 17.44L291.02 69.9L288.94 70.56Z" fill="url(#ray-grad)"/>
                <path d="M290.88 70.14L336.14 15.58L338.48 14.51L292.9 69.6L290.88 70.14Z" fill="url(#ray-grad)"/>
                <path d="M292.78 69.81L341.78 12.8L344.14 11.8L294.73 69.39L292.78 69.81Z" fill="url(#ray-grad)"/>
                <path d="M294.64 69.55L347.41 10.25L349.77 9.32L296.52 69.26L294.64 69.55Z" fill="url(#ray-grad)"/>
                <path d="M296.46 69.38L352.99 7.95L355.37 7.1L298.25 69.23L296.46 69.38Z" fill="url(#ray-grad)"/>
                <path d="M298.23 69.29L358.53 5.92L360.91 5.16L299.93 69.28L298.23 69.29Z" fill="url(#ray-grad)"/>
                <path d="M299.96 69.29L363.93 4.26L366.3 3.6L301.56 69.43L299.96 69.29Z" fill="url(#ray-grad)"/>
                <path d="M301.65 69.39L369.31 2.83L371.67 2.28L303.14 69.67L301.65 69.39Z" fill="url(#ray-grad)"/>
                <path d="M303.29 69.57L374.66 1.66L377 1.23L304.68 70.02L303.29 69.57Z" fill="url(#ray-grad)"/>
                <path d="M304.89 69.86L379.95 0.78L382.26 0.49L306.15 70.46L304.89 69.86Z" fill="url(#ray-grad)"/>
                <path d="M306.44 70.26L385.17 0.21L387.43 0.0799999L307.57 71.02L306.44 70.26Z" fill="url(#ray-grad)"/>
                <path d="M307.93 70.77L390.28 0L392.49 0.03L308.93 71.7L307.93 70.77Z" fill="url(#ray-grad)"/>
                <path d="M309.37 71.41L395.26 0.17L397.4 0.37L310.22 72.51L309.37 71.41Z" fill="url(#ray-grad)"/>
                <path d="M310.75 72.17L400.07 0.76L402.13 1.16L311.45 73.44L310.75 72.17Z" fill="url(#ray-grad)"/>
                <path d="M312.05 73.07L404.68 1.81L406.64 2.43L312.6 74.52L312.05 73.07Z" fill="url(#ray-grad)"/>
                <path d="M313.28 74.13L409.05 3.36L410.87 4.21L313.66 75.75L313.28 74.13Z" fill="url(#ray-grad)"/>
                <path d="M314.43 75.34L413.11 5.45L414.79 6.56L314.63 77.14L314.43 75.34Z" fill="url(#ray-grad)"/>
                <path d="M315.51 78.71L315.49 76.73L416.83 8.14L418.34 9.52L315.51 78.71Z" fill="url(#ray-grad)"/>
                <path d="M316.44 78.3L420.14 11.46L421.45 13.13L316.27 80.47L316.44 78.3Z" fill="url(#ray-grad)"/>
                <path d="M317.28 80.08L422.97 15.46L424.05 17.45L316.91 82.43L317.28 80.08Z" fill="url(#ray-grad)"/>
                <path d="M317.99 82.07L425.27 20.19L426.09 22.5L317.41 84.6L317.99 82.07Z" fill="url(#ray-grad)"/>
                <path d="M318.55 84.29L426.96 25.68L427.49 28.34L317.77 87.01L318.55 84.29Z" fill="url(#ray-grad)"/>
                <path d="M318.96 86.77L427.96 31.97L428.16 35L317.95 89.67L318.96 86.77Z" fill="url(#ray-grad)"/>
                <path d="M319.18 89.52L428.19 39.09L428.03 42.5L317.95 92.6L319.18 89.52Z" fill="url(#ray-grad)"/>
                <path d="M319.21 92.56L427.59 47.07L427.04 50.85L317.74 95.81L319.21 92.56Z" fill="url(#ray-grad)"/>
                <path d="M319 95.92L426.07 55.91L425.09 60.07L317.3 99.34L319 95.92Z" fill="url(#ray-grad)"/>
                <path d="M318.55 99.6L423.56 65.61L422.13 70.15L316.61 103.19L318.55 99.6Z" fill="url(#ray-grad)"/>
                <path d="M317.82 103.65L420.01 76.15L418.1 81.05L315.63 107.38L317.82 103.65Z" fill="url(#ray-grad)"/>
                <path d="M316.77 108.07L415.36 87.5L412.96 92.73L314.33 111.95L316.77 108.07Z" fill="url(#ray-grad)"/>
                <path d="M315.38 112.88L409.58 99.59L406.67 105.13L312.69 116.9L315.38 112.88Z" fill="url(#ray-grad)"/>
                <path d="M313.62 118.12L402.65 112.35L399.24 118.15L310.68 122.25L313.62 118.12Z" fill="url(#ray-grad)"/>
                <path d="M311.44 123.78L394.57 125.68L390.67 131.69L308.25 128.02L311.44 123.78Z" fill="url(#ray-grad)"/>
                <path d="M308.81 129.88L385.38 139.45L381 145.61L305.38 134.21L308.81 129.88Z" fill="url(#ray-grad)"/>
                <path d="M305.7 136.43L375.13 153.53L370.31 159.78L302.03 140.82L305.7 136.43Z" fill="url(#ray-grad)"/>
                <path d="M302.07 143.43L363.9 167.76L358.68 174.02L298.18 147.85L302.07 143.43Z" fill="url(#ray-grad)"/>
                <path d="M297.9 150.85L351.79 181.97L346.22 188.18L293.8 155.28L297.9 150.85Z" fill="url(#ray-grad)"/>
              </g>
              <g>
                <path d="M30.83 136.79C30.83 128.47 35.21 123.72 43.24 123.72C51.27 123.72 55.65 128.47 55.65 136.79V163.83C55.65 172.15 51.27 176.91 43.24 176.91C35.21 176.91 30.83 172.16 30.83 163.83V136.79ZM39 164.35C39 168.07 40.63 169.48 43.23 169.48C45.83 169.48 47.46 168.07 47.46 164.35V136.27C47.46 132.56 45.83 131.14 43.23 131.14C40.63 131.14 39 132.55 39 136.27V164.35Z" fill="white"/>
                <path d="M81.02 176.31C80.57 174.97 80.28 174.16 80.28 169.92V161.75C80.28 156.92 78.65 155.14 74.93 155.14H72.11V176.31H63.94V124.31H76.27C84.74 124.31 88.38 128.25 88.38 136.27V140.36C88.38 145.71 86.67 149.2 83.03 150.91C87.12 152.62 88.45 156.56 88.45 161.98V170C88.45 172.53 88.52 174.38 89.34 176.31H81.02ZM72.1 131.74V147.71H75.29C78.34 147.71 80.19 146.37 80.19 142.21V137.08C80.19 133.37 78.93 131.73 76.03 131.73H72.09L72.1 131.74Z" fill="white"/>
                <path d="M104.98 146.23H116.2V153.66H104.98V168.89H119.09V176.32H96.8V124.32H119.09V131.75H104.98V146.24V146.23Z" fill="white"/>
                <path d="M138.15 123.72C146.1 123.72 150.18 128.47 150.18 136.79V138.42H142.45V136.27C142.45 132.56 140.96 131.14 138.36 131.14C135.76 131.14 134.27 132.55 134.27 136.27C134.27 146.97 150.24 148.97 150.24 163.83C150.24 172.15 146.08 176.91 138.06 176.91C130.04 176.91 125.88 172.16 125.88 163.83V160.64H133.61V164.35C133.61 168.07 135.24 169.4 137.84 169.4C140.44 169.4 142.07 168.06 142.07 164.35C142.07 153.65 126.1 151.65 126.1 136.79C126.1 128.47 130.19 123.72 138.13 123.72H138.15Z" fill="white"/>
                <path d="M157.96 124.31H166.13V176.31H157.96V124.31Z" fill="white"/>
                <path d="M187.34 147.34H198.78V163.83C198.78 172.15 194.62 176.91 186.6 176.91C178.58 176.91 174.42 172.16 174.42 163.83V136.79C174.42 128.47 178.58 123.72 186.6 123.72C194.62 123.72 198.78 128.47 198.78 136.79V141.84H191.05V136.27C191.05 132.56 189.42 131.14 186.82 131.14C184.22 131.14 182.59 132.55 182.59 136.27V164.35C182.59 168.07 184.22 169.4 186.82 169.4C189.42 169.4 191.05 168.06 191.05 164.35V154.77H187.34V147.34Z" fill="white"/>
                <path d="M215.24 176.31H207.07V124.31H215.24V146.6H224.53V124.31H232.85V176.31H224.53V154.02H215.24V176.31Z" fill="white"/>
                <path d="M239.43 124.31H264.69V131.74H256.15V176.31H247.98V131.74H239.44V124.31H239.43Z" fill="white"/>
                <path d="M30.83 206.89C30.83 198.57 35.21 193.82 43.24 193.82C51.27 193.82 55.65 198.57 55.65 206.89V233.93C55.65 242.25 51.27 247.01 43.24 247.01C35.21 247.01 30.83 242.26 30.83 233.93V206.89ZM39 234.45C39 238.16 40.63 239.58 43.23 239.58C45.83 239.58 47.46 238.17 47.46 234.45V206.37C47.46 202.66 45.83 201.24 43.23 201.24C40.63 201.24 39 202.65 39 206.37V234.45Z" fill="white"/>
                <path d="M81.02 246.41C80.57 245.07 80.28 244.26 80.28 240.02V231.85C80.28 227.02 78.65 225.24 74.93 225.24H72.11V246.41H63.94V194.41H76.27C84.74 194.41 88.38 198.35 88.38 206.37V210.46C88.38 215.81 86.67 219.3 83.03 221.01C87.12 222.72 88.45 226.66 88.45 232.08V240.1C88.45 242.63 88.52 244.48 89.34 246.41H81.02ZM72.1 201.84V217.81H75.29C78.34 217.81 80.19 216.47 80.19 212.31V207.18C80.19 203.46 78.93 201.83 76.03 201.83H72.09L72.1 201.84Z" fill="white"/>
                <path d="M104.98 216.33H116.2V223.76H104.98V238.99H119.09V246.42H96.8V194.42H119.09V201.85H104.98V216.34V216.33Z" fill="white"/>
                <path d="M154.5 246.42H146.25L144.84 236.99H134.81L133.4 246.42H125.9L134.22 194.42H146.18L154.5 246.42ZM135.85 229.92H143.73L139.79 203.62L135.85 229.92Z" fill="white"/>
                <path d="M21.62 131.74V124.31H0V176.31H8.17V154.84H18.72V147.41H8.17V131.74H21.62Z" fill="white"/>
                <path d="M27.04 194.41H18.87L8.17 217.07V194.41H0V246.41H8.17V230.44L10.7 225.69L18.65 246.41H27.04L15.67 217.59L27.04 194.41Z" fill="white"/>
                <path d="M20.14 100.43H15.26V106.21H12.53V100.43H7.58V106.21H4.87V100.43H0V98.24H20.14V100.43ZM19 88.58H1V86.43H8.68V84.09H11.36V86.43H18.99V88.58H19ZM17.48 93.31C17.48 95.7 14.68 97.04 10.02 97.04C5.36 97.04 2.56 95.7 2.56 93.31C2.56 90.92 5.36 89.58 10.02 89.58C14.68 89.58 17.48 90.9 17.48 93.31ZM5.39 93.31C5.37 94.41 6.97 94.99 10.02 94.97C13.07 95 14.68 94.41 14.68 93.31C14.68 92.21 13.07 91.63 10.02 91.63C6.97 91.63 5.36 92.19 5.39 93.31Z" fill="white"/>
                <path d="M25.85 94.29C27.92 94.27 29.93 94.12 32.12 93.61L32.39 95.8C29.63 96.41 27.27 96.56 24.64 96.56H23.18V86.1H25.86V94.29H25.85ZM42.05 103.97L41.03 106.07C37.53 105.57 34.79 104.03 33.45 101.88C32.07 104.04 29.34 105.57 25.84 106.07L24.84 103.97C29.28 103.41 32.08 101.07 32.11 98.58V97.92H34.77V98.58C34.77 101.07 37.6 103.41 42.06 103.97H42.05ZM36.53 97.07H33.97V91.12H29.75V88.95H33.97V84.59H36.53V97.08V97.07ZM41.02 99.02H38.44V84.17H41.02V99.02Z" fill="white"/>
                <path d="M52.73 88.97C49.83 88.97 47.8 91.19 47.8 95.19C47.8 99.19 49.85 101.41 52.73 101.41C54.83 101.41 56.53 100.24 56.95 98.17H60.14C59.65 101.56 56.87 104.27 52.68 104.27C48.02 104.27 44.61 100.88 44.61 95.2C44.61 89.52 48.07 86.13 52.68 86.13C56.58 86.13 59.61 88.4 60.14 92.32H56.95C56.58 90.2 54.88 88.98 52.73 88.98V88.97Z" fill="white"/>
                <path d="M63.37 86.36H74.85V89.02H66.53V93.85H74.24V96.51H66.53V101.34H74.89V104.02H63.36V86.37L63.37 86.36Z" fill="white"/>
                <path d="M86.06 104.26C81.43 104.26 77.96 100.87 77.96 95.19C77.96 89.51 81.42 86.12 86.06 86.12C90.7 86.12 94.16 89.48 94.16 95.19C94.16 100.9 90.7 104.26 86.06 104.26ZM86.06 88.97C83.18 88.97 81.16 91.16 81.16 95.19C81.16 99.22 83.18 101.41 86.06 101.41C88.94 101.41 90.96 99.22 90.96 95.19C90.96 91.16 88.94 88.97 86.06 88.97Z" fill="white"/>
                <path d="M123.14 103.63H103V101.36H111.66V97.02H104.73V94.87H107.83V88.29H104.66V86.1H121.39V88.29H118.17V94.87H121.32V97.02H114.35V101.36H123.15V103.63H123.14ZM115.48 94.87V88.29H110.53V94.87H115.48Z" fill="white"/>
                <path d="M135.85 91.73H128.66V94.19C132.09 94.17 134.61 94.06 137.54 93.61L137.74 95.8C134.5 96.34 131.69 96.41 127.72 96.41H125.99V89.68H133.21V87.41H125.94V85.22H135.86V91.73H135.85ZM143.53 105.92H128.78V98.14H143.53V105.92ZM131.49 103.72H140.85V100.26H131.49V103.72ZM143.53 97.12H140.82V91.05H137.06V88.86H140.82V84.18H143.53V97.13V97.12Z" fill="white"/>
                <path d="M167.72 207.92L162.62 215.5H169.92V219.52H157.64V215.84L164.53 205.58C165.42 204.24 165.76 203.24 165.76 201.87C165.76 199.75 164.96 198.47 163.51 198.47C162.06 198.47 161.24 199.72 161.24 201.87V202.77H157.37V201.87C157.37 197.78 159.55 194.41 163.51 194.41C167.47 194.41 169.63 197.78 169.63 201.87C169.63 204.4 169.17 205.77 167.72 207.92Z" fill="white"/>
                <path d="M184.79 217.62C183.75 219.18 182.2 219.96 180.2 219.96C178.2 219.96 176.65 219.18 175.61 217.62C174.23 215.59 173.6 212.5 173.6 207.17C173.6 201.84 174.23 198.78 175.61 196.75C176.65 195.19 178.2 194.41 180.2 194.41C182.2 194.41 183.75 195.19 184.79 196.75C186.14 198.78 186.8 201.87 186.8 207.17C186.8 212.47 186.15 215.59 184.79 217.62ZM178.29 214.69C178.75 215.53 179.35 215.91 180.2 215.91C181.05 215.91 181.63 215.54 182.11 214.69C182.74 213.5 182.93 211.35 182.93 207.17C182.93 202.99 182.74 200.87 182.11 199.68C181.63 198.84 181.02 198.46 180.2 198.46C179.38 198.46 178.75 198.83 178.29 199.68C177.66 200.87 177.47 203.02 177.47 207.17C177.47 211.32 177.66 213.5 178.29 214.69Z" fill="white"/>
                <path d="M179.2 234.55L174.1 242.13H181.4V246.15H169.12V242.47L176.01 232.21C176.9 230.87 177.24 229.87 177.24 228.5C177.24 226.38 176.44 225.1 174.99 225.1C173.54 225.1 172.72 226.35 172.72 228.5V229.4H168.85V228.5C168.85 224.41 171.03 221.04 174.99 221.04C178.95 221.04 181.11 224.41 181.11 228.5C181.11 231.03 180.65 232.4 179.2 234.55Z" fill="white"/>
                <path d="M190.123 246H185.819L192.103 225.537H185V221.883H197.281L190.123 246Z" fill="white"/>
              </g>
            </svg>
          </div>

          <p className="kicker"></p>
          <h1 className="ht1" style={{ fontSize: 60, fontWeight: 700 }}>2027년을 미리본다</h1>
          <h1 className="ht2" style={{ fontSize: 60 }}></h1>
          <p className="hsub" id="hero-sub" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 24, color: 'rgb(226,238,255)', margin: '0px 0px 40px', lineHeight: 1, letterSpacing: '0.5px' }}>
            <strong>AX</strong>&nbsp; · &nbsp;Transforming into an AI-Native Company
          </p>

          <div className="ctas" style={{ flexDirection: 'column', margin: '40px 0px 0px' }}>
            <a
              href="#"
              className="cbtn"
              id="hero-cta"
              onClick={(e) => { e.preventDefault(); onSwitchPage('vod') }}
              style={{ width: 402, justifyContent: 'center', padding: '16px 24px', height: 'auto', fontSize: 16 }}
            >
              <span>VOD 구매하기</span> <span className="arrow">→</span>
            </a>
            <span className="chint" id="hero-hint" style={{ fontFamily: 'Pretendard', fontWeight: 400, fontSize: 14, letterSpacing: '-0.5px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 1.6 }}>
              포럼 참석자분들은 상단 <strong>[VOD] &gt; [다시보기]</strong> 메뉴를 통해<br />구매없이 시청이 가능합니다.
            </span>
          </div>
        </div>

        <div id="meta" style={{ padding: '36px 60px' }}>
          <div className="mi"><span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Date</span><span className="mv" style={{ fontSize: 16 }}>2026.10.01 <span className="sub" style={{ fontSize: 16 }}>(목)</span></span></div>
          <div className="mi"><span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Venue</span><span className="mv" style={{ fontSize: 16 }}>그랜드 인터컨티넨탈 서울 파르나스</span></div>
          <div className="mi"><span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Theme</span><span className="mv" style={{ fontSize: 16 }}>AX: Transforming into an AI-Native Company</span></div>
          <div className="mi"><span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Host</span><span className="mv" style={{ fontSize: 16 }}>휴넷CEO 포럼</span></div>
        </div>
      </section>

      {/* ② 포럼 소개 */}
      <section className="s s-intro" id="intro" style={{ paddingTop: 120 }}>
        <div className="intro-bg" aria-hidden="true"></div>
        <div className="intro-bottom-dim" aria-hidden="true"></div>
        <div className="wrap">
          <div className="intro-eyebrow reveal">About · Foresight Korea</div>
          <div className="intro-cols" style={{ textAlign: 'left' }}>
            <h2 className="intro-h reveal" style={{ fontSize: 40 }}>국내외 경영자와 석학이 모이는<br />국내 최고 수준의 비즈니스 포럼</h2>
            <div className="intro-text reveal">
              <p className="lead">FORESIGHT KOREA는 국내외 경영자, 기업 리더, 석학이 한자리에 모여 격변하는 경영 환경에 대응할 전략과 해법을 모색하는 국내 최고 수준의 비즈니스 포럼입니다.</p>
              <p>기업 운영 전반에 걸친 주요 의제를 심도 있게 다루며, 조직 혁신을 촉진하고 경영 역량을 한층 강화할 수 있는 기회를 제공합니다. 조직의 방향성과 경쟁력을 강화할 실질적인 전략 포럼, FORESIGHT KOREA에서 지금 우리 기업에 꼭 필요한 답을 찾아보시기 바랍니다.</p>
              <div className="intro-domains">
                <span>거시환경</span>
                <span>경영전략·혁신</span>
                <span>AX · Tech</span>
                <span>마케팅</span>
                <span>조직인사·리더십</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ AX 컨셉 */}
      <section className="s s-concept" id="concept">
        <div className="wrap" style={{ textAlign: 'left' }}>
          <div className="eyebrow reveal"><span>Concept · 2027</span><span className="idx"></span></div>

          <div className="cx-hero reveal" style={{ textAlign: 'center' }}>
            <div className="cx-ax">AX</div>
            <p className="cx-axsub">Transforming into an <em>AI-Native Company</em></p>
          </div>

          <div className="cx-body reveal">
            <p>지난 3년간 한국 기업의 AI 도입은 빠르게 확산되었습니다.<br />
              그러나 파일럿은 늘었어도 전사 전략은 그대로이고, 도구는 도입했어도 의사결정 구조는 과거의 문법을 따르고 있습니다.<br />
              진짜 과제는 'AI를 더 쓰는 것'이 아니라 'AI를 전제로 회사를 다시 설계하는 것'입니다.</p>
            <p>AX(AI Transformation)는 사업 포트폴리오, 고객 가치, 조직 운영, 인재 기준, 의사결정 권한까지<br />
              회사의 운영체제(OS)를 다시 짜는 작업입니다. AI Native Company는 AI를 도구로 소비하지 않습니다.<br />
              제품을 다시 설계하고, 고객 접점을 다시 정의하며, 조직의 일하는 방식과 리더십을 다시 만듭니다.</p>
            <p>AI 시대의 결과는 K자로 갈립니다. 먼저 움직인 소수만이 위쪽 곡선에 올라탑니다.<br />
              이번 휴넷CEO 포럼은 'AX: Transforming into an AI-Native Company'를 화두로,<br />
              한국 경영진이 자기 회사의 OS를 다시 쓰기 위한 좌표와 실행 언어를 함께 잡는 자리입니다.</p>
          </div>

          {/* 통계 카드 */}
          <div style={{ position: 'relative', marginTop: 72, paddingTop: 120 }}>
            <div className="stats-bg-title" aria-hidden="true">FORESIGHT</div>
            <ul className="stats-grid reveal" style={{ padding: 0, position: 'relative', zIndex: 2 }}>
              <li className="stat-card" style={{ '--acc': '#3cc6ff' } as CSSProperties}>
                <div className="stat-inner">
                  <div className="stat-deco" aria-hidden="true">
                    <svg viewBox="0 0 140 140" fill="none"><rect x="6" y="42" width="20" height="98" rx="10" fill="white"/><rect x="32" y="22" width="20" height="118" rx="10" fill="white"/><rect x="60" y="6" width="20" height="134" rx="10" fill="white"/><rect x="88" y="22" width="20" height="118" rx="10" fill="white"/><rect x="114" y="42" width="20" height="98" rx="10" fill="white"/></svg>
                  </div>
                  <div className="stat-bot"></div>
                  <span className="stat-edge"></span>
                  <strong className="stat-num">5</strong>
                  <em className="stat-label">Tracks</em>
                  <p className="stat-desc">경영, 경제, 소비 트렌드,<br />인사조직전략, AI 등<br />이론 및 실무 총망라</p>
                </div>
              </li>
              <li className="stat-card" style={{ '--acc': '#5a8dff' } as CSSProperties}>
                <div className="stat-inner">
                  <div className="stat-deco" aria-hidden="true">
                    <svg viewBox="0 0 140 140" fill="none"><rect x="50" y="8" width="40" height="64" rx="20" fill="white"/><path d="M22 58C22 92 44 110 70 110C96 110 118 92 118 58" stroke="white" strokeWidth="5" strokeLinecap="round"/><line x1="70" y1="110" x2="70" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="130" x2="98" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round"/></svg>
                  </div>
                  <div className="stat-bot"></div>
                  <span className="stat-edge"></span>
                  <strong className="stat-num">31</strong>
                  <em className="stat-label">Speakers</em>
                  <p className="stat-desc">업계 및 학계 최고 전문가<br />31명이 모여 주제별<br />인사이트 공유</p>
                </div>
              </li>
              <li className="stat-card" style={{ '--acc': '#8b5cf6' } as CSSProperties}>
                <div className="stat-inner">
                  <div className="stat-deco" aria-hidden="true">
                    <svg viewBox="0 0 140 140" fill="none"><line x1="18" y1="48" x2="112" y2="48" stroke="white" strokeWidth="8" strokeLinecap="round"/><polyline points="92,28 116,48 92,68" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/><line x1="122" y1="92" x2="28" y2="92" stroke="white" strokeWidth="8" strokeLinecap="round"/><polyline points="48,72 24,92 48,112" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="stat-bot"></div>
                  <span className="stat-edge"></span>
                  <strong className="stat-num">2</strong>
                  <em className="stat-label">Options</em>
                  <p className="stat-desc">포럼 전체는 VOD(ALL),<br />주제별 집중은 VOD(TRACK),<br />상황에 맞게 수강 가능</p>
                </div>
              </li>
              <li className="stat-card" style={{ '--acc': '#2dd4bf' } as CSSProperties}>
                <div className="stat-inner">
                  <div className="stat-deco" aria-hidden="true">
                    <svg viewBox="0 0 140 140" fill="none"><rect x="15" y="26" width="110" height="100" rx="14" stroke="white" strokeWidth="6" fill="none"/><line x1="15" y1="54" x2="125" y2="54" stroke="white" strokeWidth="5"/><line x1="46" y1="10" x2="46" y2="42" stroke="white" strokeWidth="6" strokeLinecap="round"/><line x1="94" y1="10" x2="94" y2="42" stroke="white" strokeWidth="6" strokeLinecap="round"/></svg>
                  </div>
                  <div className="stat-bot"></div>
                  <span className="stat-edge"></span>
                  <strong className="stat-num">1</strong>
                  <em className="stat-label">Year</em>
                  <p className="stat-desc">VOD 구매 시<br />복습기간 1년 내내<br />참고하며 인사이트 발견</p>
                </div>
              </li>
            </ul>
          </div>

          {/* VOD 가격 카드 */}
          <div className="vp-glow-wrap">
            <div className="vp-grid reveal" style={{ marginTop: 48, marginBottom: 0 }}>
              <div className="vp-card vp-card--featured">
                <div className="vp-stub">
                  <div className="vp-stub-top"><span className="vp-status">전체 VOD 구매하기</span></div>
                  <div className="vp-tier">VOD ALL</div>
                </div>
                <div className="vp-body">
                  <div className="vp-pass">
                    <div className="vp-pass-now">
                      <span className="vp-price">500,000<span className="vp-won">원</span></span>
                    </div>
                  </div>
                  <div className="vp-divider-label"><span>포함 내용</span></div>
                  <ul className="vp-features">
                    <li>기조연설(KEYNOTE) (2개 강의)</li>
                    <li>TRACK A~E (트랙별 각 6개, 총 30개 강의)</li>
                    <li>각 강의별 PDF 제공</li>
                    <li>학습기간 5개월</li>
                  </ul>
                  <a href="#" className="vp-cta" onClick={(e) => { e.preventDefault(); onSwitchPage('vod') }}>구매하기</a>
                </div>
              </div>
              <div className="vp-card vp-card--featured">
                <div className="vp-stub">
                  <div className="vp-stub-top"><span className="vp-status">TRACK별 VOD 구매하기</span></div>
                  <div className="vp-tier">VOD TRACK</div>
                </div>
                <div className="vp-body">
                  <div className="vp-pass">
                    <div className="vp-pass-now">
                      <span className="vp-per">각 Track</span>
                      <span className="vp-price">150,000<span className="vp-won">원</span></span>
                    </div>
                  </div>
                  <div className="vp-divider-label"><span>포함 내용</span></div>
                  <ul className="vp-features">
                    <li>기조연설(KEYNOTE) (2개 강의)</li>
                    <li>TRACK A~E 중 선택분 (트랙별 각 6개 강의)</li>
                    <li>각 강의별 PDF 제공</li>
                    <li>학습기간 1개월</li>
                  </ul>
                  <a href="#" className="vp-cta" onClick={(e) => { e.preventDefault(); onSwitchPage('vod') }}>구매하기</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ 연사 */}
      <section className="s" id="speakers" style={{ padding: '0px 0px 100px' }}>
        <div className="sp-bg" aria-hidden="true">
          <div className="sp-arcs"></div>
          <div className="sp-arcs sp-arcs-hi"></div>
        </div>
        <div className="sp-portal" aria-hidden="true"></div>

        <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="silg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0"   stopColor="#90c0ff" stopOpacity="0.72"/>
              <stop offset="0.5" stopColor="#5a8dff" stopOpacity="0.50"/>
              <stop offset="1"   stopColor="#2a50c8" stopOpacity="0.22"/>
            </linearGradient>
          </defs>
          <symbol id="avatar-sil" viewBox="0 0 454 482">
            <path d="M150.993 36.4C131.715 66.203 133.349 101.351 139.729 134.768C136.83 135.174 134 136.506 132.945 139.475C129.787 148.359 133.662 160.556 136.301 169.329C138.062 175.183 143.629 183.898 148.146 188.047C149.986 189.534 152.497 190.702 154.67 191.711C155.658 194.724 156.121 198.726 156.875 201.921C158.127 207.332 159.524 212.815 161.25 218.085C163.314 224.388 166.686 230.119 169.676 235.818C170.662 237.699 169.409 246.501 169.034 249.016C168.461 252.869 167.541 258.841 165.563 262.294C162.235 267.621 154.877 271.229 149.8 274.746C147.64 276.244 145.577 277.551 143.439 279.151C141.039 280.781 138.325 283.556 135.648 284.616C128.817 287.321 121.894 289.961 115.083 292.719C97.8531 299.534 80.7094 306.564 63.6559 313.809C55.0491 317.466 47.4751 319.659 39.5814 325.396C30.0759 332.321 21.9541 342.181 16.8831 352.819C11.411 364.296 10.541 378.751 9.2487 391.206L5.52023 428.691C4.53428 438.264 3.49277 447.831 2.3958 457.391C1.4404 465.534 0.5812 473.381 0 481.556H453.128L452.128 470.689C450.643 457.456 449.118 444.329 447.901 431.559C446.731 419.101 445.496 406.649 444.198 394.204C442.733 380.821 441.566 365.269 436.163 352.951C431.133 341.479 422.118 331.164 411.706 324.214C403.946 319.034 397.571 317.426 389.338 313.931C376.101 308.194 362.778 302.646 349.381 297.289C342.578 294.524 335.578 291.571 328.776 288.976C320.518 285.829 315.803 284.561 308.833 278.841C303.918 274.924 294.461 270.241 290.061 266.486C285.178 262.319 283.368 242.329 282.906 236.144C284.133 233.588 285.908 231.104 287.203 228.545C291.538 219.992 294.086 210.772 296.238 201.47C296.966 198.336 297.401 194.654 298.471 191.658C300.331 190.506 302.841 189.754 304.743 188.319C306.893 186.698 308.226 184.74 309.768 182.571C315.883 173.98 318.448 164.928 320.096 154.629C320.851 149.905 321.751 141.844 318.691 137.659C317.211 135.635 315.523 135.178 313.221 134.934C318.178 111.812 321.823 71.192 305.951 50.6018C302.413 46.0113 296.046 43.8068 290.323 43.334C294.183 29.7525 288.113 21.003 276.511 13.8318C238.038 -9.94724 176.785 -3.47077 150.993 36.4Z" fill="url(#silg)"/>
          </symbol>
        </svg>

        {/* 키노트 배너 */}
        <div className="spb spb-keynote reveal" id="kn-banner" style={{ '--acc': '#5a8dff' } as CSSProperties}>
          <div className="spb-bg" aria-hidden="true"></div>
          <div className="kn-wave-b" aria-hidden="true"></div>
          <div className="spb-photo">
            <img src="/assets/img/ceo-photo.png" alt="키노트 연사" />
          </div>
          <div className="spb-inner">
            <div className="eyebrow spb-kn-eyebrow"><span>KEYNOTE</span></div>
            <h3 className="spb-title">AX: Transforming into <br className="br-mob" />an<br className="br-pc" /> AI-Native Company</h3>
            <div className="spb-meta">
              <div className="spb-company">LG AI연구원</div>
              <div className="spb-kn-name-row">
                <div className="spb-name">이홍락 <span>CSAI</span></div>
                <div className="spb-kn-btns">
                  <button className="spb-kn-profile-btn" type="button">
                    연사 소개
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="spb-kn-preview-btn" type="button">
                    미리보기
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap">
          {/* 트랙 탭 바 */}
          <nav className="sp-track-nav" id="sp-track-nav" aria-label="트랙 바로가기">
            <div className="sp-track-nav-inner">
              {TRACK_DEFS.map((t) => (
                <button
                  key={t.id}
                  className="sp-track-btn"
                  style={{ '--t-acc': t.acc } as CSSProperties}
                  onClick={() => scrollToTrack(t.id)}
                >
                  {t.label}<br />
                  <span style={{ fontSize: 10, fontWeight: 500, opacity: 0.65, letterSpacing: '0.02em' }}>{t.cat}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* 트랙별 연사 */}
          <div className="sp-list">
            {TRACK_DEFS.map((t) => (
              <div
                key={t.id}
                className="trz"
                id={`sp-trz-${t.id}`}
                ref={(el) => { trkZoneRefs.current[t.id] = el }}
                style={{ '--acc': t.acc, padding: t.id === 'a' ? '80px 0px 0px' : undefined } as CSSProperties}
              >
                <div className="trz-head srise">
                  <div className="trz-eyebrow">
                    <span className="trz-eyebrow-track">{t.label}</span>
                    <span className="trz-eyebrow-cat">{t.cat}</span>
                  </div>
                </div>
                <div className="trz-row">
                  {t.speakers.map((sp) => <SpeakerCard key={sp.no} sp={sp} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Program & Speakers 이동 버튼 */}
          <div className="sp-more-wrap">
            <a href="#" onClick={(e) => { e.preventDefault(); onSwitchPage('program') }} className="sp-more-btn">
              Program &amp; Speakers 전체 보기
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ⑤⑥ Insight Preview + Archive */}
      <div className="insight-archive-wrap">

        {/* ⑤ Insight Preview */}
        <section className="s" id="insight" style={{ padding: '60px 0px 60px' }}>
          <div className="wrap">
            <div className="eyebrow"><span>Insight Preview</span><span className="idx"></span></div>
            <h2 className="s-h" style={{ textAlign: 'center', padding: 0, fontWeight: 700, marginLeft: 'auto', marginRight: 'auto' }}>영상으로 먼저 만나보세요</h2>
            <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>포럼의 핵심만 담은 트랙별 하이라이트, 지금 바로 미리보기로 확인하세요.</p>

            <div className="iv-wrap">
              <button className="iv-arr iv-arr-prev" aria-label="이전" onClick={() => scrollCarousel('prev')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="iv-viewport" id="iv-viewport">
                <div className="iv-track" id="iv-track" ref={ivTrackRef}>
                  {VIDEOS.map((v) => (
                    <div key={v.ytid} className="iv-slide">
                      <a
                        className="iv-card"
                        href="#"
                        onClick={(e) => { e.preventDefault(); setYtModal(v.ytid) }}
                      >
                        <div className="iv-thumb">
                          <img src={`https://img.youtube.com/vi/${v.ytid}/mqdefault.jpg`} alt="" loading="lazy" />
                          <div className="iv-play">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                        <p className="iv-title">{v.title}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <button className="iv-arr iv-arr-next" aria-label="다음" onClick={() => scrollCarousel('next')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* 유튜브 모달 */}
            {ytModal && (
              <div className="iv-modal" aria-modal="true" role="dialog" style={{ display: 'flex' }}>
                <div className="iv-modal-bg" onClick={() => setYtModal(null)}></div>
                <div className="iv-modal-box">
                  <button className="iv-modal-close" aria-label="닫기" onClick={() => setYtModal(null)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div className="iv-modal-player">
                    <iframe
                      src={`https://www.youtube.com/embed/${ytModal}?autoplay=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ⑥ Forum Archive */}
        <section className="s" id="archive" style={{ padding: '60px 0px 60px' }}>
          <div className="wrap" style={{ textAlign: 'left' }}>
            <div className="eyebrow"><span>Forum Archive</span><span className="idx"></span></div>
            <h2 className="s-h" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>지난 포럼 다시보기</h2>
            <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>FORESIGHT KOREA의 누적된 인사이트를 살펴보세요.</p>
            <div className="arc-grid">
              <a href="/foresight-korea/2025/home" className="arc">
                <div className="arc-yr" style={{ fontFamily: 'Pretendard' }}>2025</div>
                <div className="arc-info">
                  <div className="arc-t">FORESIGHT KOREA 2025</div>
                  <div className="arc-d" style={{ fontSize: 14 }}>2024.10.16</div>
                </div>
                <div className="arc-link">→</div>
              </a>
              <a href="https://ceo.hunet.co.kr/foresight-korea/2026/home" className="arc" target="_blank" rel="noreferrer">
                <div className="arc-yr" style={{ fontFamily: 'Pretendard' }}>2026</div>
                <div className="arc-info">
                  <div className="arc-t">FORESIGHT KOREA 2026</div>
                  <div className="arc-d" style={{ fontSize: 14 }}>2025.09.30</div>
                </div>
                <div className="arc-link">→</div>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

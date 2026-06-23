import { useState, useEffect } from 'react';

export default function ProgramPage() {
  const [tab, setTab] = useState<'speakers' | 'timetable'>('speakers');

  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.srise:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) el.classList.add('in');
      });
    };
    check();
    const timer = setInterval(check, 300);
    window.addEventListener('scroll', check, { passive: true });
    return () => { clearInterval(timer); window.removeEventListener('scroll', check); };
  }, []);

  return (
    <div id="page-program" className="page">

      <div className="subtop">
        <div className="subtop-row">
          <div className="subtop-left">
            <img src="assets/img/logo-w-h.png" alt="FORESIGHT KOREA 2027" className="subtop-logoimg" />
          </div>
          <div className="subtop-right">
            <div className="subtop-textblock">
              <p className="subtop-main-ttl">2027년을 미리본다</p>
              <p className="subtop-sub-ttl">AX&thinsp;·&thinsp;Transforming into an AI-Native Company</p>
            </div>
          </div>
        </div>
      </div>

      <section id="pg-section" className="pgsec">
        <div className="wrap">
          <header className="pgsec-head">
            <h2 className="pgsec-title">Program & Speakers</h2>
            <p className="pgsec-notice">※ 포사이트 코리아 2027 참석자 전용 다시보기 영상 제공 페이지입니다.</p>
          </header>
          <div className="pg-tab-bar" style={{ display: 'flex', gap: '24px', marginBottom: '0', borderBottom: '1px solid var(--line)', paddingBottom: '0' }}>
            <button
              id="pg-tab-speakers"
              onClick={() => setTab('speakers')}
              style={{
                fontFamily: 'var(--ko)',
                fontSize: '18px',
                fontWeight: 700,
                color: tab === 'speakers' ? 'var(--fg-100)' : 'var(--fg-45)',
                paddingBottom: '12px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                borderBottom: tab === 'speakers' ? '3px solid var(--fg-100)' : '3px solid transparent',
                marginBottom: '-1px',
              }}
            >연사소개</button>
            <button
              id="pg-tab-timetable"
              onClick={() => setTab('timetable')}
              style={{
                fontFamily: 'var(--ko)',
                fontSize: '18px',
                fontWeight: 700,
                color: tab === 'timetable' ? 'var(--fg-100)' : 'var(--fg-45)',
                paddingBottom: '12px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                borderBottom: tab === 'timetable' ? '3px solid var(--fg-100)' : '3px solid transparent',
                marginBottom: '-1px',
              }}
            >타임테이블</button>
          </div>

          {tab === 'speakers' && (
            <div id="pg-panel-speakers">
              <div className="pg-sp-layout">
                <aside className="pg-sidebar" id="pg-sidebar">
                  <nav className="pg-sb-nav">
                    <a href="#pg-kn" className="pg-sb-item pg-sb-kn" data-section="pg-kn">KEYNOTE</a>
                    <div className="pg-sb-sep"></div>
                    <a href="#pg-trk-a" className="pg-sb-item" data-section="pg-trk-a">TRACK A<span>거시환경</span></a>
                    <a href="#pg-trk-b" className="pg-sb-item" data-section="pg-trk-b">TRACK B<span>경영전략·혁신</span></a>
                    <a href="#pg-trk-c" className="pg-sb-item" data-section="pg-trk-c">TRACK C<span>AX · Tech</span></a>
                    <a href="#pg-trk-d" className="pg-sb-item" data-section="pg-trk-d">TRACK D<span>마케팅</span></a>
                    <a href="#pg-trk-e" className="pg-sb-item" data-section="pg-trk-e">TRACK E<span>조직인사·리더십</span></a>
                  </nav>
                </aside>
                <div className="pg-sp-main">

                  <section id="pg-kn" className="pg-kn-hero-sec">
                    <div className="pg-kn-intro">
                      <p className="pg-kn-intro-eyebrow">Keynote</p>
                      <h3 className="pg-kn-intro-title">AX: Transforming into an AI-Native Company</h3>
                      <div className="pg-trk-btn-group" style={{ marginTop: '12px' }}>
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>Keynote 교안받기</a>
                      </div>
                      <p className="pg-kn-intro-desc">지난 3년간 한국 기업의 AI 도입은 빠르게 확산되었다. 그러나 파일럿은 늘었어도 전사 전략은 그대로이고, 도구는 도입했어도 의사결정 구조는 과거의 문법을 따른다. 진짜 과제는 'AI를 더 쓰는 것'이 아니라 'AI를 전제로 회사를 다시 설계하는 것'이다. AX(AI Transformation)는 사업 포트폴리오, 고객 가치, 조직 운영, 인재 기준, 의사결정 권한까지 회사의 운영체제(OS)를 다시 짜는 작업이다. AI Native Company는 AI를 도구로 소비하지 않는다. 제품을 다시 설계하고, 고객 접점을 다시 정의하며, 조직의 일하는 방식과 리더십을 다시 만든다. AI 시대의 결과는 K자로 갈린다. 먼저 움직인 소수만이 위쪽 곡선에 올라탄다. 이번 휴넷CEO 포럼은 'AX: Transforming into an AI-Native Company'를 화두로, 한국 경영진이 자기 회사의 OS를 다시 쓰기 위한 좌표와 실행 언어를 함께 잡는 자리다.</p>
                    </div>
                    <div className="pg-kn-hero-card">
                      <div className="pg-kn-hero-photo">
                        <img src="assets/img/ceo-photo.png" alt="김세직" />
                      </div>
                      <div className="pg-kn-hero-body">
                        <p className="pg-kn-hero-title">피크코리아, 정점에 선 대한민국</p>
                        <div className="pg-kn-hero-foot">
                          <div className="pg-kn-hero-speaker">
                            <span className="pg-kn-hero-org">서울대학교 경제학부</span>
                            <strong className="pg-kn-hero-name">김세직 교수</strong>
                          </div>
                          <a href="#" className="sc-vod-btn" style={{ alignSelf: 'flex-end' }}><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4.5L11 8 6 11.5V4.5Z" fill="currentColor"/><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/></svg>다시보기</a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="pg-trk-a" className="pg-trk-sec" style={{ '--acc': '#3cc6ff' } as React.CSSProperties}>
                    <div className="pg-trk-intro">
                      <p className="pg-trk-intro-eyebrow">TRACK A — 거시환경</p>
                      <h3 className="pg-trk-intro-title">2027 전략 수립의 외부 좌표: 경제·정세·정책 리스크를 읽는 법</h3>
                      <div className="pg-trk-btn-group">
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>TRACK A 교안받기</a>
                      </div>
                      <p className="pg-trk-intro-desc">AI 전환은 기술 선택만으로 완성되지 않는다. 금리, 환율, 공급망, 지정학, 산업 정책의 변화가 기업의 투자 여력과 성장 경로를 동시에 흔든다. TRACK A는 2027년 사업계획의 전제가 될 글로벌 경제와 국제정세의 핵심 변수를 진단한다. 경영진은 불확실성을 막연한 위험으로 남겨두지 않고, 투자·시장·공급망 의사결정에 반영할 수 있는 전략 가정으로 전환하는 법을 확인한다.</p>
                    </div>
                    <div className="trz-row">
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img.png" alt="김효상" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">A-1</div><div className="sc-title"><span className="sc-vid-ic" title="영상 강연"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/><path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/></svg></span>대전환의 분기점: 글로벌 경제 전망 2027</div><div className="sc-foot"><div className="sc-co">대외경제정책연구원</div><div className="sc-name">김효상 팀장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-1.png" alt="강명수" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">A-2</div><div className="sc-title">트럼프대통령이 촉발한 신보호무역주의와 한국의 대응 전략</div><div className="sc-foot"><div className="sc-co">삼일PwC</div><div className="sc-name">강명수 센터장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-2.png" alt="강준영" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">A-3</div><div className="sc-title">중국 대외정책 변화와 한국기업의 전략</div><div className="sc-foot"><div className="sc-co">한국외국어대학교</div><div className="sc-name">강준영 교수</div></div></article>
                      <article className="sc is-tbd"><div className="sc-photo"><img src="assets/img/man.svg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center', transform: 'scale(1.2) translateY(25%)', transformOrigin: 'bottom center', opacity: 0.4 }} /></div><div className="sc-no">A-4</div><div className="sc-title">피크코리아 현재와 미래: 한국 경제 전망 2027</div><div className="sc-foot"><div className="sc-co" aria-hidden="true">&nbsp;</div><div className="sc-name">TBD</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-4.png" alt="조동철" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">A-5</div><div className="sc-title">한국경제 장기전망과 구조개혁 과제</div><div className="sc-foot"><div className="sc-co">KDI(한국개발연구원)</div><div className="sc-name">조동철 원장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-5.png" alt="김동규" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">A-6</div><div className="sc-title">강대국 경쟁의 틈새에서 부상하는 지역 강국들: 새로운 세력 균형 읽기</div><div className="sc-foot"><div className="sc-co">PADO</div><div className="sc-name">김동규 편집장</div></div></article>
                    </div>
                  </section>

                  <section id="pg-trk-b" className="pg-trk-sec" style={{ '--acc': '#4aa6ff' } as React.CSSProperties}>
                    <div className="pg-trk-intro">
                      <p className="pg-trk-intro-eyebrow">TRACK B — 경영전략·혁신</p>
                      <h3 className="pg-trk-intro-title">AI Native Company의 전략 공식: 사업 모델과 성장 포트폴리오를 다시 짜다</h3>
                      <div className="pg-trk-btn-group">
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>TRACK B 교안받기</a>
                      </div>
                      <p className="pg-trk-intro-desc">'AI를 활용하자'는 선언만으로는 전략이 되지 않는다. 중요한 질문은 어떤 사업을 키우고, 어떤 방식을 버리며, 어디에 자본과 인재를 재배치할 것인가이다. TRACK B는 AI를 전제로 사업 포트폴리오, 제품·서비스 라인업, 고객 가치, 의사결정 구조를 다시 설계하는 전략 프레임을 다룬다. 경영진은 자사 사업을 AI Native 관점에서 재해석하고, 2027년 전략 회의에서 바로 논의할 수 있는 성장 선택지를 가져간다.</p>
                    </div>
                    <div className="trz-row">
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-6.png" alt="강정묵" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-1</div><div className="sc-title"><span className="sc-vid-ic" title="영상 강연"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/><path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/></svg></span>격변기 사업전략의 새로운 프레임워크</div><div className="sc-foot"><div className="sc-co">PwC</div><div className="sc-name">강정묵 파트너</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-7.png" alt="원정준" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-2</div><div className="sc-title">경제 불황기의 리밸런싱과 포트폴리오 혁신</div><div className="sc-foot"><div className="sc-co">KPMG</div><div className="sc-name">원정준 부대표</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-8.png" alt="노상규" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-3</div><div className="sc-title">Internet of Teslas: 테슬라의 오가닉 비즈니스 전략에 대한 이해</div><div className="sc-foot"><div className="sc-co">서울대학교</div><div className="sc-name">노상규 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-9.png" alt="신현한" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-4</div><div className="sc-title">피크코리아를 극복하는 지배구조와 이사회 중심 경영</div><div className="sc-foot"><div className="sc-co">연세대학교</div><div className="sc-name">신현한 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-10.png" alt="최창범" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-5</div><div className="sc-title">새로운 질서 속, CEO의 고민(속마음)은?</div><div className="sc-foot"><div className="sc-co">PwC</div><div className="sc-name">최창범 전무</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-11.png" alt="손재권" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">B-6</div><div className="sc-title">혁신을 미리 보다: 실리콘벨리 發 기업혁신의 2027</div><div className="sc-foot"><div className="sc-co">더밀크</div><div className="sc-name">손재권 대표</div></div></article>
                    </div>
                  </section>

                  <section id="pg-trk-c" className="pg-trk-sec" style={{ '--acc': '#5a8dff' } as React.CSSProperties}>
                    <div className="pg-trk-intro">
                      <p className="pg-trk-intro-eyebrow">TRACK C — AX · Tech</p>
                      <h3 className="pg-trk-intro-title">AX의 기술 백본: AI Agent, 데이터, 플랫폼이 경영의 OS를 바꾼다</h3>
                      <div className="pg-trk-btn-group">
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>TRACK C 교안받기</a>
                      </div>
                      <p className="pg-trk-intro-desc">AI Agent, 데이터 인프라, 산업별 AI 플랫폼은 기업 운영의 기본 단위를 바꾸고 있다. 기술은 더 이상 IT 부서의 실행 과제가 아니라, 사업 모델과 조직 설계를 결정하는 경영 변수다. TRACK C는 AI 모델의 진화, Agent 기반 업무 방식, 데이터·보안·플랫폼 전략, 글로벌 기술 패권의 흐름을 경영진의 언어로 해석한다. 경영진은 무엇을 도입하고, 무엇을 보류하며, 어떤 기술 역량을 내부에 축적해야 하는지 판단하는 기준을 얻는다.</p>
                    </div>
                    <div className="trz-row">
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-12.png" alt="윤성훈" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-1</div><div className="sc-title"><span className="sc-vid-ic" title="영상 강연"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/><path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/></svg></span>AI에 의한 고객여정의 마지막 진화, 위임하는 종의 탄생</div><div className="sc-foot"><div className="sc-co">커니(Kearney)</div><div className="sc-name">윤성훈 파트너</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-13.png" alt="황지영" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-2</div><div className="sc-title">에이전틱 AI 커머스 시대, 고객경험을 어떻게 향상시킬 것인가?</div><div className="sc-foot"><div className="sc-co">노스캐롤라이나대학교</div><div className="sc-name">황지영 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-14.png" alt="김용섭" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-3</div><div className="sc-title">소비자 마음의 지도: 대한민국 소비 키워드 2027</div><div className="sc-foot"><div className="sc-co">날카로운상상력연구소</div><div className="sc-name">김용섭 소장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-15.png" alt="전영수" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-4</div><div className="sc-title">인구 구조 변화가 불러 온 마케팅의 위기, 그리고 기회</div><div className="sc-foot"><div className="sc-co">한양대학교</div><div className="sc-name">전영수 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-16.png" alt="정연승" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-5</div><div className="sc-title">최근 유통트렌드와 성공기업 사례를 통한 인사이트 전략</div><div className="sc-foot"><div className="sc-co">단국대학교</div><div className="sc-name">정연승 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-17.png" alt="정희선" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">C-6</div><div className="sc-title">일본에서 배우는 저성장, 고령화 시대의 마케팅 전략</div><div className="sc-foot"><div className="sc-co">일본 유자베이스</div><div className="sc-name">정희선 애널리스트</div></div></article>
                    </div>
                  </section>

                  <section id="pg-trk-d" className="pg-trk-sec" style={{ '--acc': '#6f7bf0' } as React.CSSProperties}>
                    <div className="pg-trk-intro">
                      <p className="pg-trk-intro-eyebrow">TRACK D — 마케팅</p>
                      <h3 className="pg-trk-intro-title">AI가 고객 접점을 재정의한다: 마케팅과 세일즈 OS의 전환</h3>
                      <div className="pg-trk-btn-group">
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>TRACK D 교안받기</a>
                      </div>
                      <p className="pg-trk-intro-desc">AI는 고객을 이해하고, 콘텐츠를 만들고, 채널을 운영하고, 세일즈 기회를 포착하는 방식을 다시 정의하고 있다. 동시에 고객은 더 빠른 응답, 더 정교한 개인화, 더 일관된 경험을 당연한 기준으로 받아들이기 시작했다. TRACK D는 AI 기반 타겟팅, 콘텐츠·크리에이티브 자동화, 고객경험 혁신, B2B 세일즈 전환을 하나의 마케팅 OS 관점에서 다룬다. 경영진과 마케팅 리더는 고객 접점을 비용 센터가 아니라 성장 엔진으로 바꾸는 실행 방향을 확인한다.</p>
                    </div>
                    <div className="trz-row">
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-18.png" alt="박진석" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-1</div><div className="sc-title"><span className="sc-vid-ic" title="영상 강연"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/><path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/></svg></span>연공서열 파괴, 원점 사고로 다시 만드는 미래 조직</div><div className="sc-foot"><div className="sc-co">콘페리 코리아</div><div className="sc-name">박진석 대표</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-19.png" alt="송기홍" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-2</div><div className="sc-title">전통적 채용의 종말, 인재 리밸런싱</div><div className="sc-foot"><div className="sc-co">리멤버</div><div className="sc-name">송기홍 대표</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-20.png" alt="JR Keller" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-3</div><div className="sc-title">조직·인재관리의 새로운 지형 — 글로벌 트렌드 중심으로</div><div className="sc-foot"><div className="sc-co">코넬대학교</div><div className="sc-name">JR Keller 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-21.png" alt="한광모" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-4</div><div className="sc-title">AI Powered HR: AI는 HR을 어떻게 바꾸고 있는가?</div><div className="sc-foot"><div className="sc-co">SAP코리아</div><div className="sc-name">한광모 본부장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-22.png" alt="이중학" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-5</div><div className="sc-title">인재의 재정의: 하이브리드 리소스 시대의 대응 전략</div><div className="sc-foot"><div className="sc-co">동국대학교</div><div className="sc-name">이중학 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-23.png" alt="이승훈" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">D-6</div><div className="sc-title">대전환 시대의 새로운 리더십 방정식</div><div className="sc-foot"><div className="sc-co">링글</div><div className="sc-name">이승훈 대표</div></div></article>
                    </div>
                  </section>

                  <section id="pg-trk-e" className="pg-trk-sec" style={{ '--acc': '#8b5cf6' } as React.CSSProperties}>
                    <div className="pg-trk-intro">
                      <p className="pg-trk-intro-eyebrow">TRACK E — 조직인사·리더십</p>
                      <h3 className="pg-trk-intro-title">AI Native 조직을 만드는 법: 속도, 인재, 평가, 리더십의 재설계</h3>
                      <div className="pg-trk-btn-group">
                        <a href="#" className="pg-trk-btn"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3.5 3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>TRACK E 교안받기</a>
                      </div>
                      <p className="pg-trk-intro-desc">AI Native Company의 경쟁력은 도구 도입률이 아니라 조직의 속도에서 갈린다. 외부 변화를 감지하는 속도, 계획을 세우는 속도, 전사에 공유하는 속도, 실행해 성과를 만드는 속도를 높이지 못하면 AI는 성과로 연결되지 않는다. TRACK E는 직무 재설계, 인재 확보와 재교육, 평가·보상 체계, Human-AI 협업, 리더십의 역할 변화를 다룬다. 사람을 대체하는 조직이 아니라, 사람이 더 높은 가치의 일에 집중하도록 일의 구조를 다시 설계하는 방법을 제시한다.</p>
                    </div>
                    <div className="trz-row">
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-24.png" alt="정찬욱" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-1</div><div className="sc-title"><span className="sc-vid-ic" title="영상 강연"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/><path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/></svg></span>테크 트렌드 2027: AI 전쟁을 미리보다</div><div className="sc-foot"><div className="sc-co">딜로이트 컨설팅</div><div className="sc-name">정찬욱 전무</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-25.png" alt="강정수" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-2</div><div className="sc-title">2027, consumer AI가 온다</div><div className="sc-foot"><div className="sc-co">블루닷 AI연구센터</div><div className="sc-name">강정수 센터장</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-26.png" alt="백서인" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-3</div><div className="sc-title">테크 드래곤의 비상: 차이나 테크의 부상과 우리의 대응 방안</div><div className="sc-foot"><div className="sc-co">한양대학교</div><div className="sc-name">백서인 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-27.png" alt="한기용" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-4</div><div className="sc-title">AI가 바꾸는 기업 경영의 미래</div><div className="sc-foot"><div className="sc-co">산호세주립대</div><div className="sc-name">한기용 교수</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-28.png" alt="이동근" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-5</div><div className="sc-title">AX의 실패요인과 지속가능한 AI 가치창출 체계</div><div className="sc-foot"><div className="sc-co">KPMG</div><div className="sc-name">이동근 전무</div></div></article>
                      <article className="sc"><div className="sc-photo"><img src="assets/img/speakers/img-29.png" alt="오성미" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} /></div><div className="sc-no">E-6</div><div className="sc-title">AI가 만드는 조직의 미래와 일하는 방식</div><div className="sc-foot"><div className="sc-co">마이크로소프트</div><div className="sc-name">오성미 총괄팀장</div></div></article>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          )}

          {tab === 'timetable' && (
            <div id="pg-panel-timetable">
              <div className="pgtl">

                <div className="pgtl-row pgtl-row--kn">
                  <div className="pgtl-time">09:00~09:50</div>
                  <div className="pgtl-body">
                    <div className="pgtl-card pgtl-kn pgtl-kn--with-photo">
                      <div className="pgtl-kn-content">
                        <span className="pgtl-badge pgtl-badge-kn">KEYNOTE</span>
                        <p className="pgtl-ctitle">AX: Transforming into an AI-Native Company</p>
                        <div className="pgtl-spk"><span className="pgtl-org">LG AI연구원</span><span className="pgtl-name">이홍락 CSAI</span></div>
                      </div>
                      <div className="pgtl-kn-photo">
                        <img src="assets/img/ceo-photo.png" alt="이홍락 CSAI" className="pgtl-kn-man" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr" id="pg-track-sessions">
                  <div className="pgtl-time">10:10~11:00</div>
                  <div className="pgtl-body">
                    <div className="pgtl-track-notice">
                      <p className="pgtl-tn-title">각 TRACK 프로그램 진행</p>
                      <ul className="pgtl-tn-list">
                        <li>각 프로그램 전후 20분의 Break Time이 제공됩니다.</li>
                        <li>12:10 ~ 13:30 까지 점심시간이 제공됩니다.</li>
                      </ul>
                    </div>
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">2027 사업계획의 첫 번째 전제: 성장·물가·교역의 새 질서</p><span className="pgtl-c5-spk">대외경제정책연구원 · 윤상하 실장</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">연간 계획의 종말: AI Adaptive Planning으로 전략을 다시 짜다</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">스틸칼라의 등장: 피지컬 AI가 산업 현장을 바꾸는 방식</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">AI 네이티브 소비자의 탄생: 2027 고객은 어떻게 선택하는가</p><span className="pgtl-c5-spk">트렌드코리아컴퍼니 · 전미영 박사</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">글로벌 빅테크가 다시 짠 일의 구조: AI Native 직무 재설계</p><span className="pgtl-c5-spk">동국대학교 · 이중학 교수</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr">
                  <div className="pgtl-time">11:20~12:10</div>
                  <div className="pgtl-body">
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">모두가 타깃이 되는 세계: 2027 지정학 리스크와 한국 기업의 선택</p><span className="pgtl-c5-spk">중앙대학교 · 이승주 교수</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">AI Native 도약의 첫 조건: 성장을 막는 레거시를 버리는 법</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">테크 드래곤의 비상: 중국 AI 굴기가 바꾸는 경쟁의 판</p><span className="pgtl-c5-spk">한양대학교 · 백서인 교수</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">검색 이후의 브랜드 전략: AI가 바꾼 구매 여정의 새 규칙</p><span className="pgtl-c5-spk">Kearney · 윤성훈 파트너</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">프롬프트가 업무 능력이 된 시대: 임직원 AI 리스킬링 전략</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row">
                  <div className="pgtl-time">12:10~13:30</div>
                  <div className="pgtl-body">
                    <div className="pgtl-card pgtl-special"><span className="pgtl-ctitle">점심시간 · 네트워킹 런치</span></div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr">
                  <div className="pgtl-time">13:30~14:20</div>
                  <div className="pgtl-body">
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">에너지·물류 초크포인트: 원가와 공급망을 흔드는 다음 충격</p><span className="pgtl-c5-spk">삼일PwC · 강명수 국제통상솔루션센터장</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">Dual AX 전략: 사업 모델과 실행 역량을 동시에 바꾸다</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">AI 투자의 성패: 거품과 워크슬롭을 넘어 ROI를 만드는 법</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">AI 시대의 미디어 투자 전략: 채널 믹스와 성과 극대화의 새 공식</p><span className="pgtl-c5-spk">한국종합예술원 · 이승무 교수</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">프롬프트 리더십: 구성원의 AI 잠재력을 깨우는 리더의 역할</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr">
                  <div className="pgtl-time">14:40~15:30</div>
                  <div className="pgtl-body">
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">환율·금리·자본비용: 2027 재무 전략의 리스크 지도</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">[AX사례] 제품을 넘어 생태계로: 플랫폼 기업은 어떻게 비즈니스를 재정의했나</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">[AX사례] 전사 AI 도입의 현실: 성공 조건과 실패 패턴</p><span className="pgtl-c5-spk">KPMG · 이동근 AI센터장</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">[AX사례] 퍼포먼스 마케팅의 재설계: AI 측정·최적화와 인간의 판단</p><span className="pgtl-c5-spk">고려대학교 · 송수진 교수</span></div>
                      <div className="pgtl-c5" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">[AX사례] AI Native HR: 채용부터 평가까지 인재 의사결정을 바꾸다</p><span className="pgtl-c5-spk">SAP · 한광모 본부장</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr">
                  <div className="pgtl-time">15:50~16:40</div>
                  <div className="pgtl-body">
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">K자형 양극화의 한국 경제: 2027 성장 기회와 방어 전략</p><span className="pgtl-c5-spk">현대경제연구원 · 주원 실장</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">[AX사례] 실행 속도의 혁명: 하이퍼 스냅스 조직은 어떻게 움직이는가</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">자율 경제 에이전트(AEA): AI가 결정하는 시대의 통제와 책임</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">AI 네이티브 마케팅 조직: 사람과 에이전트는 어떻게 협업하는가</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">[AX사례] 전사 AI 내재화의 조건: 임원진은 어떻게 변화를 밀어붙였나</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row pgtl-row--tr">
                  <div className="pgtl-time">17:00~17:50</div>
                  <div className="pgtl-body">
                    <div className="pgtl-cards5">
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#3cc6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK A</span><p className="pgtl-c5-title">불확실성을 숫자로 바꾸는 시나리오 경영: 예산과 실행계획의 기술</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#4aa6ff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK B</span><p className="pgtl-c5-title">실리콘밸리의 극단적 AX: '1인 유니콘'이 던지는 성장의 질문</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#5a8dff' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK C</span><p className="pgtl-c5-title">통제인가 자율인가: 새도우 AI를 성과로 바꾸는 조직 설계</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#6f7bf0' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK D</span><p className="pgtl-c5-title">[AX사례] 고객 경험의 AX: AI는 접점을 어떻게 바꾸는가</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                      <div className="pgtl-c5 pgtl-c5-nd" style={{ '--tc': '#8b5cf6' } as React.CSSProperties}><span className="pgtl-c5-trk">TRACK E</span><p className="pgtl-c5-title">[AX사례] 연공서열과 AI 속도의 충돌: 한국형 조직의 현실적 전환법</p><span className="pgtl-c5-spk">섭외 진행 중</span></div>
                    </div>
                  </div>
                </div>

                <div className="pgtl-row">
                  <div className="pgtl-time">17:50~18:00</div>
                  <div className="pgtl-body">
                    <div className="pgtl-card pgtl-special"><span className="pgtl-badge pgtl-badge-sp">클로징</span><span className="pgtl-ctitle">클로징 세레머니 · 수료증 배부</span></div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

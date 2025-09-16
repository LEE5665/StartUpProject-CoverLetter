import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>
          안녕하세요, <span className="accent">이정재</span>입니다.
        </h1>
        <p className="subtitle">
          프론트엔드 · 사용자 경험 · 사이드 프로젝트를 사랑하는 개발자.
        </p>

        <div className="cta">
          <a className="btn primary" href="/projects">프로젝트 보기</a>
          <a className="btn" href="/contact">연락하기</a>
          <button
            className="btn"
            type="button"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? "소개 닫기" : "자세히 소개 보기"}
          </button>
        </div>

        {/* 항상 DOM에 존재 → max-height 트랜지션으로 부드럽게 열고 닫기 */}
        <div className={`intro-wrapper ${open ? "open" : ""}`}>
          <div className="intro-long">
            <h2>자세한 자기소개</h2>
            <p>
              React·Next.js 기반의 웹 프론트엔드를 중심으로
              사용자 경험(UX)을 중시한 개발을 하고 있습니다.<br/><br/>
              새로운 기술을 실험하고 사이드 프로젝트를 통해 빠르게
              아이디어를 실현하는 것을 즐기며,
              협업과 코드 품질, 디자인·개발 간 소통에도 큰 관심이 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-photo" aria-hidden="true">
        <div className="photo-placeholder">사진</div>
      </div>
    </section>
  );
}

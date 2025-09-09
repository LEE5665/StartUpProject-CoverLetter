export default function Home() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>안녕하세요, <span className="accent">Your Name</span>입니다.</h1>
        <p className="subtitle">프론트엔드 · 사용자 경험 · 사이드 프로젝트를 사랑하는 개발자.</p>
        <div className="cta">
          <a className="btn primary" href="/projects">프로젝트 보기</a>
          <a className="btn" href="/contact">연락하기</a>
        </div>
      </div>
      <div className="hero-photo" aria-hidden="true">
        <div className="photo-placeholder">사진</div>
      </div>
    </section>
  );
}
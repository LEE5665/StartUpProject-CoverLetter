export default function Projects() {
  return (
    <section className="section container">
      <h2>프로젝트</h2>
      <div className="grid">
        <article className="card">
          <h3>프로젝트 A</h3>
          <p>무슨 문제를 해결했고 무엇을 배웠는지 간단 설명.</p>
          <div className="card-actions">
            <a className="link" href="#" target="_blank" rel="noreferrer">데모</a>
            <a className="link" href="#" target="_blank" rel="noreferrer">코드</a>
          </div>
        </article>
        <article className="card">
          <h3>프로젝트 B</h3>
          <p>사용 기술, 주요 기능, 본인 기여도 요약.</p>
          <div className="card-actions">
            <a className="link" href="#" target="_blank" rel="noreferrer">데모</a>
            <a className="link" href="#" target="_blank" rel="noreferrer">코드</a>
          </div>
        </article>
        <article className="card">
          <h3>프로젝트 C</h3>
          <p>실사용자 피드백, 성능 개선 수치 등 임팩트 강조.</p>
          <div className="card-actions">
            <a className="link" href="#" target="_blank" rel="noreferrer">데모</a>
            <a className="link" href="#" target="_blank" rel="noreferrer">코드</a>
          </div>
        </article>
      </div>
    </section>
  );
}

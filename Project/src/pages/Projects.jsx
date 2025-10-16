import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-container">
      {/* 🔹웹 프로젝트 */}
      <section className="projects-section">
        <h2>웹 프로젝트</h2>
        <div className="projects-grid">
          {/* 프로젝트 A */}
          <article className="projects-card">
            <h3>암기·학습 퀴즈 사이트</h3>
            <p>
              Next.js와 MariaDB 기반의 퀴즈 학습 웹앱. 로그인, 폴더별 퀴즈 생성/공유,
              다크모드 지원, Docker + Nginx 배포 환경 구성.
            </p>
            <div className="projects-tags">
              <span className="projects-tag">Next.js</span>
              <span className="projects-tag">MariaDB</span>
              <span className="projects-tag">Docker</span>
              <span className="projects-tag">Nginx</span>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/NextjsMemorizeSite/"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>

          {/* 프로젝트 B */}
          <article className="projects-card">
            <h3>개발자 커뮤니티 사이트</h3>
            <p>
              Next.js 기반의 개발자 커뮤니티 웹앱. 회원가입/로그인, 게시글 작성,
              이미지 업로드, Todo 리스트, 태그, 다크모드 구현.
            </p>
            <div className="projects-tags">
              <span className="projects-tag">Next.js</span>
              <span className="projects-tag">MariaDB</span>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/NextJsProject"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 🔹게임 프로젝트 */}
      <section className="projects-section">
        <h2>게임 프로젝트</h2>
        <div className="projects-grid">
          {/* 호러 게임 */}
          <article className="projects-card">
            <h3>3D 멀티 공포게임</h3>
            <p>
              Unreal Engine 5 + C++ 기반의 1인칭 멀티 공포 게임.
              업그레이드, 인벤토리, 병원·로비 맵, 몬스터 AI(Behavior Tree),
              멀티플레이 방 검색/입장/옵션, 스팀 연동, 음성 채팅, 저장 기능,
              상점, 체력·스태미너 시스템 등 포함.
            </p>
            <div className="projects-tags">
              <span className="projects-tag">Unreal Engine 5</span>
              <span className="projects-tag">C++</span>
              <span className="projects-tag">Blender</span>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/HorrorGameProject"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>

          {/* Enhance the Sword */}
          <article className="projects-card">
            <h3>2D 검 강화하기</h3>
            <p>
              Unity(C#) 기반 2D 클릭 강화 게임. 클릭으로 돈을 벌어 검을 강화하며,
              자동화 시스템, 강화 확률 조정 아이템, 인벤토리·슬롯 시스템, 상점,
              강화 실패 방어 기능 등을 구현.
            </p>
            <div className="projects-tags">
              <span className="projects-tag">Unity</span>
              <span className="projects-tag">C#</span>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/Enhance-the-sword"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 🔹그 외 프로젝트 */}
      <section className="projects-section">
        <h2>프로그램 프로젝트</h2>
        <div className="projects-grid">
          {/* Java Swing 일정 관리 앱 */}
          <article className="projects-card">
            <h3>자바 스윙 일정 관리 앱</h3>
            <p>
              Swing 기반 데스크탑 앱으로 일정 관리, Todo 기능, 메모장,
              회원가입/로그인, 다크모드를 지원.
            </p>
            <div className="projects-tags">
              <span className="projects-tag">Java Swing</span>
              <span className="projects-tag">SQLite</span>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/JavaProgramingProject"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

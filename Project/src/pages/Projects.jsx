import "./Projects.css";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";
import project7 from "/project7.png";
import project8 from "/project8.png";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="page-intro">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>배움을 결과물로<span className="accent-dot">.</span></h1>
        <p className="intro-description">웹 서비스, 게임, 데스크톱 앱까지. 직접 고민하고 구현한 프로젝트를 소개합니다.</p>
        <div className="project-index"><span>01 웹 서비스</span><span>02 게임</span><span>03 프로그램</span></div>
      </div>
      
      <section className="projects-section">
        <h2>웹 프로젝트</h2>
        <div className="projects-grid">

          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project1} alt="티켓 예매 사이트 미리보기" />
            </div>
            <div className="projects-content">
              <h3>티켓 예매 사이트</h3>
              <p>
                Next.js와 Spring Boot 기반의 공연 티켓 예매 웹서비스. 공연 검색과 회차·좌석 선택,
                토스페이먼츠 테스트 결제, 예매 내역 조회 구현. Redis·Redisson 분산 락과
                JPA 낙관적 락으로 중복 예매를 방지하고, 좌석 5분 선점과 만료 자동 해제 지원.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Next.js</span>
                <span className="projects-tag">TypeScript</span>
                <span className="projects-tag">Spring Boot</span>
                <span className="projects-tag">MariaDB</span>
                <span className="projects-tag">Redis</span>
                <span className="projects-tag">Redisson</span>
                <span className="projects-tag">Docker</span>
              </div>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/Ticketing-Site"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>

          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project2} alt="개발자 블로그 미리보기" />
            </div>
            <div className="projects-content">
              <h3>개발자 블로그</h3>
              <p>
                Next.js와 PostgreSQL 기반의 개발 기록 공유 플랫폼. Tiptap 글 편집기,
                임시저장, 태그, 댓글·좋아요, 친구 간 1:1 채팅과 Redis·SSE 기반 실시간 알림 구현.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Next.js</span>
                <span className="projects-tag">TypeScript</span>
                <span className="projects-tag">PostgreSQL</span>
                <span className="projects-tag">Redis</span>
                <span className="projects-tag">Docker</span>
              </div>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/Developer-Blog"
                target="_blank"
                rel="noreferrer"
              >
                GIT
              </a>
            </div>
          </article>
          
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project3} alt="암기 학습 사이트 미리보기" />
            </div>
            <div className="projects-content">
              <h3>암기·학습 퀴즈 사이트</h3>
              <p>
                Next.js와 MariaDB 기반의 퀴즈 학습 웹앱. 로그인, 폴더별 퀴즈 생성/공유,
                다크모드 지원, Docker + Nginx 배포 환경 구성.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Next.js</span>
                <span className="projects-tag">MariaDB</span>
                <span className="projects-tag">Docker</span>
                <span className="projects-tag">Nginx</span>
              </div>
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

          
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project4} alt="개발자 커뮤니티 미리보기" />
            </div>
            <div className="projects-content">
              <h3>개발자 커뮤니티 사이트</h3>
              <p>
                Next.js 기반의 개발자 커뮤니티 웹앱. 회원가입/로그인, 게시글 작성,
                이미지 업로드, Todo 리스트, 태그, 다크모드 구현.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Next.js</span>
                <span className="projects-tag">MariaDB</span>
              </div>
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

      
      <section className="projects-section">
        <h2>게임 프로젝트</h2>
        <div className="projects-grid">
          
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project5} alt="호러게임 미리보기" />
            </div>
            <div className="projects-content">
              <h3>3D 멀티 공포게임</h3>
              <p>
                Unreal Engine 5 + C++ 기반의 1인칭 멀티 공포 게임.
                업그레이드, 인벤토리, 병원·로비 맵, 몬스터 AI(Behavior Tree),
                멀티플레이 방 검색/입장, 스팀 연동, 음성 채팅 등 구현.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Unreal Engine 5</span>
                <span className="projects-tag">C++</span>
                <span className="projects-tag">Blender</span>
              </div>
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

          
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project6} alt="2D 검 강화하기 미리보기" />
            </div>
            <div className="projects-content">
              <h3>2D 검 강화하기</h3>
              <p>
                Unity(C#) 기반 2D 클릭 강화 게임. 클릭으로 돈을 벌어 검을 강화하며,
                자동화 시스템, 강화 확률 조정 아이템, 인벤토리·슬롯 시스템 구현.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 전체
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Unity</span>
                <span className="projects-tag">C#</span>
              </div>
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

      
      <section className="projects-section">
        <h2>프로그램 프로젝트</h2>
        <div className="projects-grid">
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project7} alt="Java Swing 일정 관리 앱 미리보기" />
            </div>
            <div className="projects-content">
              <h3>자바 스윙 일정 관리 앱</h3>
              <p>
                Swing 기반 데스크탑 앱으로 일정 관리, Todo 기능, 메모장,
                회원가입/로그인, 다크모드를 지원.
              </p>
              <p className="projects-role">
                <strong>맡은 역할:</strong> 앱 설계 및 UI/DB 연동
              </p>
              <div className="projects-tags">
                <span className="projects-tag">Java Swing</span>
                <span className="projects-tag">SQLite</span>
              </div>
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
          <article className="projects-card">
            <div className="projects-thumb">
              <img src={project8} alt="병원 예약 및 업무 관리 프로그램 미리보기" />
            </div>
            <div className="projects-content">
              <h3>병원 예약 및 업무 관리 프로그램</h3>
              <p>
                WPF 데스크탑 클라이언트와 Spring Boot 서버 기반의 병원 업무 관리 프로그램.
                환자 등록, 예약·외래 접수, 진료 기록·처방, 검사·처치, 수납 관리와 역할별 권한 지원.
              </p>
              <div className="projects-tags">
                <span className="projects-tag">C#</span>
                <span className="projects-tag">WPF</span>
                <span className="projects-tag">MVVM</span>
                <span className="projects-tag">Spring Boot</span>
                <span className="projects-tag">PostgreSQL</span>
                <span className="projects-tag">Docker</span>
              </div>
            </div>
            <div className="projects-card-actions">
              <a
                className="projects-link"
                href="https://github.com/LEE5665/Hospital-Appointment"
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

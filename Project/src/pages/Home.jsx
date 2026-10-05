import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import profile from "/profile.png";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiPrinter, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Home.css";

import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";
import project7 from "/project7.png";
import project8 from "/project8.png";

export default function Home() {
  const [horizontalImage, setHorizontalImage] = useState(true);
  const [printing, setPrinting] = useState(false);

  const generatePDF = async () => {
    const pages = document.querySelectorAll(".pdf-page");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    await document.fonts.ready;

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
        windowWidth: 1200,
        onclone: (clonedDocument) => {
          clonedDocument.querySelectorAll(".pdf-page").forEach((page) => {
            page.classList.add("pdf-export");
          });
        },
      });
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const imgWidth = canvas.width * ratio;
      const imgHeight = canvas.height * ratio;
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", (pageWidth - imgWidth) / 2, 0, imgWidth, imgHeight);
    }

    return pdf;
  };

  const handlePrintPDF = async () => {
    if (printing) return;
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
      window.alert("인쇄 창을 열 수 없습니다. 팝업 차단을 해제한 뒤 다시 시도해 주세요.");
      return;
    }
    setPrinting(true);

    try {
      const pdf = await generatePDF();
      if (newWindow.closed) return;
      pdf.autoPrint();
      newWindow.location.replace(pdf.output("bloburl"));
    } catch (error) {
      newWindow.close();
      console.error("PDF 인쇄 실패:", error);
      window.alert("PDF를 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setPrinting(false);
    }
  };

  return (
    <div className="portfolio">
      <div className="page-intro">
        <p className="eyebrow">ABOUT ME</p>
        <h1>호기심으로 시작해,<br />코드로 완성합니다<span className="accent-dot">.</span></h1>
        <p className="intro-description">웹부터 게임까지, 직접 만들고 해결하며 성장하는 개발자 이정재입니다.</p>
        <Link className="text-link" to="/projects">프로젝트 둘러보기 <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
      <section className="pdf-page page1 container">
        <p className="eyebrow">01 / PROFILE</p>
        <div className="profile-area">
          <div className="profile-left">
            <p className="job-title">풀스택 & C++/C# 개발자</p>
            <h2 className="name">이정재</h2>

            <div className="info-table">
              <div className="info-row">
                <span>
                  <FiMail /> 이메일
                </span>
                <span>onitra3@gmail.com</span>
              </div>
              <div className="info-row">
                <span>
                  <FiPhone /> 연락처
                </span>
                <span>010-3256-5978</span>
              </div>
              <div className="info-row">
                <span>
                  <FiMapPin /> 주소
                </span>
                <span>인천광역시 연수구</span>
              </div>
              <div className="info-row">
                <span>
                  <FiGithub /> Git
                </span>
                <a
                  href="https://github.com/LEE5665"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  https://github.com/LEE5665
                </a>
              </div>
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-img-wrapper">
              <img
                id="profile-img"
                src={profile}
                alt="프로필 사진"
                onLoad={(event) => {
                  const { naturalWidth, naturalHeight } = event.currentTarget;
                  setHorizontalImage(naturalWidth >= naturalHeight);
                }}
                className={horizontalImage ? "horizontal" : "vertical"}
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>핵심역량</h2>
          <hr />
          <ul className="core-list">
            <li>React / Next.js 기반 웹 서비스 개발 및 유지보수</li>
            <li>재사용 가능한 컴포넌트 설계 및 디자인 시스템 구현</li>
            <li>언리얼 엔진(C++)과 유니티(C#)을 활용해 여러 언어 사용</li>
          </ul>
        </div>

        <div className="section">
          <h2>기술스택</h2>
          <hr />
          <div className="skill-row">
            <span>Next.js <strong className="level high">상</strong></span>
            <span>React <strong className="level mid">중</strong></span>
            <span>JavaScript <strong className="level mid">중</strong></span>
            <span>C++ <strong className="level mid">중</strong></span>
            <span>C# <strong className="level mid">중</strong></span>
            <span>Docker <strong className="level mid">중</strong></span>
          </div>
        </div>

        <div className="section">
          <h2>학력</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2021.03 ~ 2026.02</div>
            <div className="col center">인하공업전문대학</div>
            <div className="col right">컴퓨터정보과 | 학점 3.96 / 4.5</div>
          </div>
          <div className="grid-row">
            <div className="col left">2026.08 학사학위 취득</div>
            <div className="col center">학점은행제</div>
            <div className="col right">컴퓨터공학 | 학점 4.39 / 4.5</div>
          </div>
        </div>

        <div className="section">
          <h2>자격증</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2026.09.11</div>
            <div className="col center">정보처리기사</div>
            <div className="col right">한국산업인력공단</div>
          </div>
          <div className="grid-row">
            <div className="col left">2026.09.11</div>
            <div className="col center">사무자동화산업기사</div>
            <div className="col right">한국산업인력공단</div>
          </div>
          <div className="grid-row">
            <div className="col left">2025.10.07</div>
            <div className="col center">컴퓨터활용능력 2급</div>
            <div className="col right">대한상공회의소</div>
          </div>
          <div className="grid-row">
            <div className="col left">2019.07.25</div>
            <div className="col center">ITQ - A</div>
            <div className="col right">한국생산성본부</div>
          </div>
          <div className="grid-row">
            <div className="col left">2019.07.12</div>
            <div className="col center">GTQ - 1급</div>
            <div className="col right">한국생산성본부</div>
          </div>
        </div>

        <div className="section">
          <h2>병역</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2021.7 ~ 2023.1</div>
            <div className="col center">병장(만기전역)</div>
          </div>
        </div>
      </section>

      <section className="pdf-page page2 container">
        <p className="eyebrow">02 / MY STORY</p>
        <h2>자기소개서</h2>
        <hr />

        <h3>성장 배경</h3>
        <p>
          개발에 대한 관심은 중학생 시절 직접 게임 서버를 운영하며 필요한 기능을 구현해 본 경험에서 시작되었습니다.
          기존 기능을 사용하는 데 그치지 않고, “이 기능은 어떻게 동작할까?”라는 호기심으로 코드를 분석하고 자료를
          찾아보며 직접 기능을 추가했습니다. 이 과정에서 개발은 단순히 코드를 작성하는 일이 아니라, 아이디어를 실제로
          구현할 수 있는 도구라는 점에 매력을 느꼈습니다.
        </p>
        <p>
          이후 C#과 C++을 활용한 게임 프로젝트를 진행하면서 예상치 못한 문제들을 직접 디버깅하고,
          원인을 끝까지 파고들며 해결해 나가는 과정에서 개발의 진짜 재미를 느꼈습니다.
          필요하다면 문서를 찾아보고, 다양한 해결법을 실험하며 문제의 원인을 분석하는 습관이 자리 잡았습니다.
          이러한 경험은 현재까지 이어져, 새로운 기술을 배울 때에도 “이해하고 개선하는 자세”로 접근하게 만들었습니다.
          최근에는 React와 Next.js를 활용한 웹 프론트엔드 프로젝트를 진행하며,
          게임 개발을 통해 배운 논리적 사고를 웹 서비스 구조 설계에 접목시키고 있습니다.
        </p>

        <h3>학습 및 프로젝트 경험</h3>
        <p>
          다양한 프로젝트와 언어를 경험하며 기술의 폭을 넓혀왔습니다.
          C++ 기반의 프로그램 개발부터 React, Next.js를 활용한 웹 프론트엔드 프로젝트까지 수행하며
          효율적인 상태 관리와 컴포넌트 구조 설계, SSR과 CSR 환경의 차이를 깊이 이해하게 되었습니다.
          또한 백엔드에서는 Node.js와 Express를 이용해 간단한 API 서버를 구축하고,
          Docker와 Nginx를 활용하여 배포 환경을 구성하는 경험도 쌓았습니다.
        </p>

        <h3>협업 역할 경험</h3>
        <p>
          팀 프로젝트에서 리드 개발자로서 팀의 프로젝트 방향을 주도하며 협업과 리더십을 키웠습니다.
          요구사항 정리, 일정 조율, 기술 선택 등에서 팀원들과 소통하며 문제를 함께 해결했고,
          UI 설계, 데이터베이스 구조 정의, 핵심 기능 구현을 맡았습니다.
          이런 과정을 통해 개발뿐만 아니라 소통 능력과 책임감도 함께 발전시켰습니다.
        </p>

        <h3>지원 동기 및 포부</h3>
        <p>
          귀사의 개발 환경은 사용자 경험과 기술적 완성도를 함께 추구하는 곳이라고 생각합니다.
          프론트엔드와 백엔드를 모두 경험한 개발자로서, UI/UX 향상과 서비스 안정성을 모두 고려하는 코드를 작성하고 싶습니다.
          새로운 기술을 빠르게 습득하고 적용하는 것을 즐기며, 서비스의 품질을 개선하고 팀의 효율을 높이는 데 기여하고자 합니다.
          앞으로는 문제 해결 능력뿐 아니라 함께 성장할 수 있는 동료로서
          팀과 함께 더 나은 서비스를 만들어가는 것이 제 목표입니다.
        </p>
      </section>
      <section className="pdf-page page3 container">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2>프로젝트 요약</h2>
        <hr />
        <div className="proj-summary-link-box">
          전체 프로젝트 보기 :{" "}
          <a
            href="https://lee5665.github.io/StartUpProject-CoverLetter/projects"
            target="_blank"
            rel="noreferrer"
          >
            https://lee5665.github.io/StartUpProject-CoverLetter/projects
          </a>
        </div>
        <div className="proj-summary-grid">

          <div className="proj-item">
            <img src={project1} alt="티켓 예매 사이트" />
            <h4>티켓 예매 사이트</h4>
            <p>공연 검색·좌석 선택·토스 테스트 결제를 지원하고 Redis 분산 락으로 중복 예매를 방지하는 웹서비스</p>
          </div>

          <div className="proj-item">
            <img src={project2} alt="개발자 블로그" />
            <h4>개발자 블로그</h4>
            <p>글 편집·임시저장, 친구 간 채팅과 실시간 알림을 지원하는 개발 기록 공유 플랫폼</p>
          </div>

          <div className="proj-item">
            <img src={project3} alt="퀴즈 사이트" />
            <h4>암기 · 학습 퀴즈 사이트</h4>
            <p>Next.js + MariaDB 기반의 학습 퀴즈 웹 서비스</p>
          </div>

          <div className="proj-item">
            <img src={project4} alt="개발자 커뮤니티" />
            <h4>개발자 커뮤니티 사이트</h4>
            <p>회원가입, 게시글, 이미지 업로드 지원 커뮤니티 플랫폼</p>
          </div>

          <div className="proj-item">
            <img src={project5} alt="3D 공포게임" />
            <h4>3D 멀티 공포게임</h4>
            <p>언리얼 엔진 기반의 멀티플레이 공포 게임</p>
          </div>

          <div className="proj-item">
            <img src={project6} alt="2D 검 강화 게임" />
            <h4>2D 검 강화하기</h4>
            <p>Unity 기반의 2D 강화형 캐주얼 게임</p>
          </div>

          <div className="proj-item">
            <img src={project7} alt="Java Swing 일정 앱" />
            <h4>자바 스윙 일정 관리 앱</h4>
            <p>Swing 기반 일정 관리 + Todo + 다크모드 지원 앱</p>
          </div>

          <div className="proj-item">
            <img src={project8} alt="병원 예약 및 업무 관리 프로그램" />
            <h4>병원 예약 및 업무 관리 프로그램</h4>
            <p>WPF + Spring Boot + PostgreSQL 기반의 환자 등록·예약·접수·진료·수납 관리 프로그램</p>
          </div>
        </div>

      </section>
      <div className="fab-container">
        <button className="fab-main" onClick={handlePrintPDF} disabled={printing} aria-busy={printing}>
          <FiPrinter aria-hidden="true" />
          {printing ? "인쇄 중..." : "인쇄하기"}
        </button>
      </div>
    </div>
  );
}

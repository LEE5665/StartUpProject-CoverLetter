import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import profile from "/profile.png";
import { FiMail, FiPhone, FiMapPin, FiGithub } from "react-icons/fi";
import "./Home.css";

export default function Home() {
  const [processing, setProcessing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [horizontalImage, setHorizontalImage] = useState(true);

  useEffect(() => {
    const image = document.getElementById("profile-img");
    if (!image) return;

    const detectRatio = (img) => {
      const { naturalWidth, naturalHeight } = img;
      setHorizontalImage(naturalWidth >= naturalHeight);
    };

    if (image.complete) detectRatio(image);
    else image.onload = () => detectRatio(image);
  }, []);

  const generatePDF = async () => {
    document.querySelectorAll(".pdf-page").forEach((page) =>
      page.classList.add("pdf-export")
    );
    const pages = document.querySelectorAll(".pdf-page");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
    }

    document.querySelectorAll(".pdf-page").forEach((page) =>
      page.classList.remove("pdf-export")
    );

    return pdf;
  };

  const handleSavePDF = async () => {
    setShowMenu(false);
    setProcessing(true);
    const pdf = await generatePDF();
    pdf.save("이정재_이력서_포트폴리오.pdf");
    setProcessing(false);
  };

  const handlePrintPDF = async () => {
    setShowMenu(false);
    setProcessing(true);
    const pdf = await generatePDF();
    const pdfBlob = pdf.output("bloburl");
    const newWindow = window.open(pdfBlob);
    if (newWindow) newWindow.onload = () => newWindow.print();
    setProcessing(false);
  };

  return (
    <div className="portfolio">
      {}
      <section className="pdf-page page1 container">
        <div className="profile-area">
          <div className="profile-left">
            <p className="job-title">풀스택 & C++/C# 개발자</p>
            <h1 className="name">이정재</h1>

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
                className={horizontalImage ? "horizontal" : "vertical"}
              />
            </div>
          </div>
        </div>

        {}
        <div className="section">
          <h2>핵심역량</h2>
          <hr />
          <ul className="core-list">
            <li>React / Next.js 기반 웹 서비스 개발 및 유지보수</li>
            <li>재사용 가능한 컴포넌트 설계 및 디자인 시스템 구현</li>
            <li>언리얼 엔진(C++)과 유니티(C#)을 활용해 여러 언어 사용</li>
          </ul>
        </div>

        {}
        <div className="section">
          <h2>기술스택</h2>
          <hr />
          <div className="skill-row">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>C++</span>
            <span>C#</span>
            <span>Docker</span>
          </div>
        </div>

        {}
        <div className="section">
          <h2>학력</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2021. 2 ~ 2026. 2</div>
            <div className="col center">인하공업전문대학</div>
            <div className="col right">컴퓨터정보과(졸업 예정) | 학점 3.9 / 4.5</div>
          </div>
        </div>

        {}
        <div className="section">
          <h2>자격증</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2024.12.11</div>
            <div className="col center">정보처리산업기사</div>
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

        {}
        <div className="section">
          <h2>병역</h2>
          <hr />
          <div className="grid-row">
            <div className="col left">2021.7 ~ 2023.1</div>
            <div className="col center">병장(만기전역)</div>
          </div>
        </div>
      </section>

      {}
      <section className="pdf-page page2 container">
        <h2>자기소개서</h2>
        <hr />

        <h3>성장 배경</h3>
        <p>
          중학교 시절, 마인크래프트 서버를 운영하며 직접 플러그인을 제작해본 경험이 개발의 시작이었습니다.
          단순히 게임을 즐기는 것을 넘어, “이 기능은 어떻게 만들어질까?”라는 호기심으로 코드를 분석하고
          다양한 자료를 참고하며 기능을 추가해 나갔습니다. 이러한 경험을 통해 개발이 단순한 취미를 넘어,
          스스로 아이디어를 구현할 수 있는 창의적인 도구라는 사실을 깨달았습니다.
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

      {}
      <div className={`fab-container ${showMenu ? "open" : ""}`}>
        <button
          className="fab-main"
          onClick={() => setShowMenu((prev) => !prev)}
          disabled={processing}
        >
          {processing ? "..." : showMenu ? "닫기" : "PDF"}
        </button>

        <div className="fab-options">
          <button onClick={handleSavePDF}>저장</button>
          <button onClick={handlePrintPDF}>인쇄</button>
        </div>
      </div>
    </div>
  );
}

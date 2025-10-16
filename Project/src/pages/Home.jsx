import { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import profile from '/profile.png'

export default function Home() {
  const [open, setOpen] = useState(false);

  // 🧾 PDF 저장 함수
  const handleDownloadPDF = async () => {
    const element = document.querySelector(".hero");

    // 고해상도 캡처 (글씨 선명도 개선)
    const canvas = await html2canvas(element, {
      scale: 3,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    // A4 사이즈 PDF 설정
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // 📐 여백 설정 (왼쪽·오른쪽 15mm, 위쪽 20mm)
    const marginX = 15;
    const marginY = 20;
    const imgWidth = pageWidth - marginX * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // 이미지가 한 페이지보다 크면 여러 장으로 분할
    if (imgHeight > pageHeight - marginY * 2) {
      let remainingHeight = imgHeight;
      let position = 0;
      while (remainingHeight > 0) {
        pdf.addImage(
          imgData,
          "PNG",
          marginX,
          marginY - position * (pageHeight - marginY * 2),
          imgWidth,
          imgHeight
        );
        remainingHeight -= pageHeight - marginY * 2;
        if (remainingHeight > 0) pdf.addPage();
        position++;
      }
    } else {
      pdf.addImage(imgData, "PNG", marginX, marginY, imgWidth, imgHeight);
    }

    pdf.save("이정재_소개.pdf");
  };

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
          <Link className="btn primary" to="/projects">
            프로젝트 보기
          </Link>
          <Link className="btn" to="/contact">
            연락하기
          </Link>
          <button
            className="btn"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "소개 닫기" : "자세히 소개 보기"}
          </button>

          {/* 📄 PDF 저장 버튼 */}
          <button className="btn" type="button" onClick={handleDownloadPDF}>
            PDF로 저장하기
          </button>
        </div>

        <div className={`intro-wrapper ${open ? "open" : ""}`}>
          <div className="intro-long">
            <h2>자세한 자기소개</h2>
            <p>
              React·Next.js 기반의 웹 프론트엔드를 중심으로
              사용자 경험(UX)을 중시한 개발을 하고 있습니다.<br /><br />
              새로운 기술을 실험하고 사이드 프로젝트를 통해 빠르게
              아이디어를 실현하는 것을 즐기며,
              협업과 코드 품질, 디자인·개발 간 소통에도 큰 관심이 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-photo" aria-hidden="true">
        <div className="hero-photo" aria-hidden="true">
  <img
    src={profile}
    alt="프로필 사진"
    className="profile-photo"
  />
</div>
      </div>
    </section>
  );
}

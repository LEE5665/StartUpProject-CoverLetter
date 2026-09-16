import "./Contact.css";
import { FiMail, FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-container">
      <p className="eyebrow">LET’S CONNECT</p>
      <div className="contact-symbol" aria-hidden="true"><FiMail /></div>
      <h1 className="contact-title">좋은 시작은,<br />대화에서부터<span className="accent-dot">.</span></h1>
      <p className="contact-text">
        프로젝트 제안, 협업, 혹은 가벼운 인사도 환영합니다
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:onitra3@gmail.com" className="contact-link">
            <FiMail aria-hidden="true" /><span><small>이메일</small>onitra3@gmail.com</span><FiArrowUpRight aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LEE5665"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FiGithub aria-hidden="true" /><span><small>GitHub</small>LEE5665</span><FiArrowUpRight aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
}

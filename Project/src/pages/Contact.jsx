import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-container">
      <h2 className="contact-title">연락하기</h2>
      <p className="contact-text">
        프로젝트 제안, 협업, 혹은 가벼운 인사도 환영합니다
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:onitra3@gmail.com" className="contact-link">
            onitra3@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LEE5665"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

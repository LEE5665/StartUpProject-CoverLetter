import { Outlet, NavLink, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="site-header">
        <nav className="layout-container nav" aria-label="주 메뉴">
          <Link
            className="logo"
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="logo-mark">J.</span>
            <span>이정재<span className="logo-caption">DEVELOPER PORTFOLIO</span></span>
          </Link>
          <ul className="menu">
            <li><NavLink to="/" end>소개</NavLink></li>
            <li><NavLink to="/projects">프로젝트</NavLink></li>
            <li><NavLink to="/contact">연락</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <ScrollToTop />
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="layout-container">
          <span>이정재 <span className="footer-role">· Developer Portfolio</span></span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}

import { Outlet, NavLink } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <a className="logo" href="/">Home</a>
          <ul className="menu">
            <li><NavLink to="/" end>소개</NavLink></li>
            <li><NavLink to="/skills">기술</NavLink></li>
            <li><NavLink to="/projects">프로젝트</NavLink></li>
            <li><NavLink to="/contact">연락</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()}</div>
      </footer>
    </>
  );
}
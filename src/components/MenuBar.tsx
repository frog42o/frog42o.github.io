import { useEffect, useState, useRef } from "react";
import profileImage from "../assets/profile.png";
import CustomizeAI from "./CustomizeAI";

interface MenuBarProps {
  onSend: (message: string) => Promise<void>;
}

function MenuBar({onSend }: MenuBarProps) {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isAIBoxVisible, setIsAIBoxVisible] = useState(false);
  const [IsAIBoxFixed, setIsAIBoxFixed] = useState(false);
 
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const shouldBeFixed = scrollY > 1;
    setIsNavbarFixed(shouldBeFixed);
    setIsAIBoxFixed(shouldBeFixed);
  };
  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   const openAIBox = () => {
    setIsAIBoxVisible(prevState => !prevState);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isNavbarFixed ? "dontMove" : ""
        } `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={profileImage} width="60" height="60" />
          </a>
          <span className="ml-3">jason dong</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#aboutMe">
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#projects">
                  projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#customizeai" onClick={(e) => {
                    e.preventDefault(); 
                    openAIBox();
                  }}
                >
                customize page
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="../src/documents/DONG_JASON_RESUME.docx.pdf"
                  target="_blank"
                >
                  info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isAIBoxVisible && 
        <div className={`ai-box ${IsAIBoxFixed ? "freezeAIBox" : ""}`}>
          <CustomizeAI onSend={onSend}/>
        </div>}
    </>
  );
}
export default MenuBar;

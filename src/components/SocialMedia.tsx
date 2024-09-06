import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a href="https://www.instagram.com/jsn_dong/" target="_blank">
        <img
          className="col-auto social-media-icon"
          src={insta}
          alt="Instagram"
          width="40px"
          height="40px"
        />
      </a>
      <a href="https://www.linkedin.com/in/jsndong03/" target="_blank">
        <img
          className="col-auto social-media-icon"
          src={linkedin}
          alt="LinkedIn"
          width="40px"
          height="40px"
        />
      </a>
      <a href="https://github.com/frog42o" target="_blank">
        <img
          className="col-auto social-media-icon"
          src={github}
          alt="GitHub"
          width="40px"
          height="40px"
        />
      </a>
    </div>
  );
}

export default SocialMedia;

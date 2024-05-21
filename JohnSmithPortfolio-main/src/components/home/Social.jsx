import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sai-nithin-malla/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/nithintanu"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://leetcode.com/u/hello_nithin/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faCode} size="xs" />{" "}
        {/* Adjust the size as needed */}
      </a>
    </div>
  );
};

export default Social;

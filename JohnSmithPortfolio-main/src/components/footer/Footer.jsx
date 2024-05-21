import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <h1 className="footer__title">Sai Nithin</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {/* <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/sai-nithin-malla/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://x.com/Hello_Nithin_07?t=9-_LOpnNTnl3Wgjw7cR5LQ&s=09"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sai Nithin Malla. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

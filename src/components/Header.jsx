import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景画像です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage}` }}></div>
            {/* 名前と肩書*/}
            <h1 className="title-text">Takahiro Aikou</h1>
            <h3 className="title-text">Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://www.linkedin.com/in/aikouheartmusen" target="blank">
                  <FaLinkedin color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/tasat31" target="blank">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

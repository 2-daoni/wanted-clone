import React from 'react';
import './css/GNB.css';

const GNB = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <div className="drop-menu">
            <img className="menuImg" src={process.env.PUBLIC_URL + 'images/icon-menu.png'} />
          </div>
          <img src="https://www.wantedlab.com/img/logo.png" alt="wanted logo" className="logoImg" />
        </div>
        <ul className="link">
          <li>
            <a href="#">채용</a>
          </li>
          <li>
            <a href="#">이벤트</a>
          </li>
          <li>
            <a href="#">직군별연봉</a>
          </li>
          <li>
            <a href="#">이력서</a>
          </li>
          <li>
            <a href="#">커뮤니티</a>
            <span className="NewText">New</span>
          </li>
          <li>
            <a href="#">프리랜서</a>
          </li>
          <li>
            <a href="#">AI합격예측</a>
            <span className="BetaText">Beta</span>
          </li>
        </ul>
        <ul className="etc">
          <li>
            <a href="#" className="search">
              <svg xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <path
                    id="qt2dnsql4a"
                    d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" href="#qt2dnsql4a"></use>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="bell">
              <svg xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <path
                    id="bpnpn3yn0a"
                    d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                    <mask id="1dencd96ob" fill="#fff">
                      <use href="#bpnpn3yn0a"></use>
                    </mask>
                    <use fillRule="nonzero" stroke="currentColor" strokeWidth=".3" href="#bpnpn3yn0a"></use>
                    <g fill="currentColor" mask="url(#1dencd96ob)">
                      <path d="M0 0H18V18H0z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="newBadge">N</span>
            </a>
          </li>
          <li>
            <div className="profileC">
              <a href="#" className="profileBox">
                <img src={process.env.PUBLIC_URL + 'images/profile_default.png'} className="profile"></img>
                <span className="profileN newBadge">N</span>
              </a>
            </div>
          </li>
        </ul>
        <button className="serviceBtn">
          <a href="#">기업 서비스</a>
        </button>
      </div>
    </div>
  );
};

export default GNB;

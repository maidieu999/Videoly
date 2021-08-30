import React, { Component } from "react";
import './style.css';
// import WOW from 'wowjs';

class BannerSection extends Component {
  // componentDidMount() {
  //   new WOW.WOW().init();
  // }
  render() {
    return (
      <React.Fragment>
        <div className="banner" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/banner.png")`}}>
          <div className="grid">
            <div className="banner__content">
              <h1 className="banner__title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                비디온리는 오직 당신의 브랜드만를 위해 템플릿을 만듭니다
              </h1>
              <p className="banner__text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.
              </p>
              <a href="index.html" className="btn btn__banner wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">시작하기</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BannerSection;

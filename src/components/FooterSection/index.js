import React, { Component } from "react";
import "./style.css";

class FooterSection extends Component {
  render() {
    const { listSocialIcon } = this.props;
    var socialElements = listSocialIcon.map((icon) => {
      return (
        <div className="social__item" key={icon.id}>
          <a href="index.html">
            <img src={`${process.env.PUBLIC_URL}/${icon.image}`} alt="" />
          </a>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className="footer">
          <div className="grid wide">
            <div className="row">
              <div className="l-6 m-6 c-12">
                <div
                  className="footer__text wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <h5>
                    이용약관&nbsp;&nbsp;&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;&nbsp;&nbsp;고객센터
                  </h5>
                  <p>
                    비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
                    356-00-00000 | 이메일 : test0101@vidionly.co.kr | FAX :
                    070-0000-0000 서울특별시 강남구 도산대로 8길 17 3층
                  </p>
                  <span>Copyright© VIDIONLY All rights reserved.</span>
                </div>
              </div>
              <div className="l-6 m-6 c-12">
                <div
                  className="social wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  {socialElements}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FooterSection;

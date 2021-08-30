import React, { Component } from "react";
import "./style.css";

class HowSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="how"> 
          <div className="grid wide">
            <div className="row how-row">
              <div className="l-6 m-6 c-12">
                <div className="left-block">
                  <div className="left-block-img how__left-block-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/how/how_01.png`}
                      alt="what_about_us"
                    />
                  </div>
                </div>
              </div>
              <div className="l-6 m-6 c-12">
                <div className="right-block work__header section__header how__right-block wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  <div className="right-block-content how__right-block-content">
                    <h5>How do I make a video</h5>
                    <h2>영상제작은 어떻게하나요?</h2>
                    <p>
                      오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하. 오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하.
                    </p>
                    <a href="index.html" className="btn btn-how">
                      시작하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </React.Fragment>
    );
  }
}

export default HowSection;

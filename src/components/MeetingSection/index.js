import React, { Component } from "react";
import "./style.css";

class MeetingSection extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="meeting" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/meeting/meeting_01.png")`}}>
          <div className="grid">
            <div className="row">
              <div className="banner__content section__header">
                <h2 className="meeting__title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  퀄리티있는 브랜딩, 비디온리 하세요
                </h2>
                <p className="meeting__text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.
                </p>
                <a href="index.html" className="btn btn__meeting wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                  시작하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MeetingSection;

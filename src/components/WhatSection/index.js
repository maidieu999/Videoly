import React, { Component } from "react";
import "./style.css";

class WhatSection extends Component {

  render() {
    return (
      <React.Fragment>
        <section className="what">
          <div className="grid wide">
            <div className="row">
              <div className="l-6 m-6 c-12">
                <div className="left-block what__left-block wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  <div className="left-block-img what__left-block-img">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/what/what_01.png`}
                      alt="what_about_us"
                    />
                  </div>
                </div>
              </div>
              <div className="l-6 m-6 c-12">
                <div className="right-block work__header section__header what__right-block wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  <div className="right-block-content">
                    <h5>What is the videonly</h5>
                    <h2>비디온리는 무엇인가요?</h2>
                    <p>
                      세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그
                      중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는.{" "}
                      <br />
                      세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그
                      중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는
                    </p>
                    <a href="index.html" className="btn btn__what">
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

export default WhatSection;

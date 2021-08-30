import React, { Component } from "react";
import "./style.css";

class ChatSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="meeting"
          style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/chat/chat_01.png")`}}
        >
          <div className="grid">
            <div className="row">
              <div className="banner__content section__header">
                <h2 className="meeting__title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  팀원들과 함께 공유하며 작업하세요
                </h2>
                <p className="meeting__text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  작업량이 많을 때, 마감으로 정신없을 때 바쁠 때 주고받는 파일이
                  말썽이라면? 비디온리 하세요!
                </p>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatSection;

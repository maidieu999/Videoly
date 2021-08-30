import React, { Component } from "react";
import "./style.css";

class WorkSection extends Component {
  render() {
    const { workList } = this.props;
    var workListElement = workList.map((workItem) => {
      return (
        <div
          className="lg-4 c-12 md-4 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1.6s"
        >
          <div className="work__block">
            <div className="block__img">
              <img src={`${process.env.PUBLIC_URL}/${workItem.image}`} alt="" />
            </div>
            <a href="index.html" className="block__content">
              <div className="block__text">
                <p>{workItem.title}</p>
                <h2>{workItem.description}</h2>
              </div>
              <div className="block__arrow">
                <a href="index.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/${workItem.arr}`}
                    alt=""
                  />
                </a>
              </div>
            </a>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className="work">
          <div className="grid wide">
            <div className="row">
              <div className="work__header section__header">
                <h5
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  Tutorial Guide
                </h5>
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  영상 만들기, 어렵지 않아요
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  나에게 맞는 템플릿, <br />
                  망설이지 말고 지금 직접 체험해보세요!
                </p>
              </div>
            </div>
            <div className="row justify-content-between ">
              {workListElement}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WorkSection;

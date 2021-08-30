import React, { Component } from "react";
import "./style.css";

class FeatureSection extends Component {
  render() {
    const { listFeature } = this.props;
    var featureElements = listFeature.map((feature, index) => {
      return (
        <div className="lg-3 md-6 c-12" key={feature.id}>
          <div
            className="feature__block wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.8s"
          >
            <div className="feature__img">
              <img src={`${process.env.PUBLIC_URL}/${feature.image}`} alt="" />
            </div>
            <div className="feature__content">
              <h6>{feature.name}</h6>
              <p>{feature.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="feature">
          <div className="grid wide">
            <div className="row">
              <div className="l-6 l-o-3 m-8 m-o-2 c-12">
                <div className="feature__header section__header">
                  <h2
                    className="wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    한 눈에 보는 템플릿 절차
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    비디온리가 아직 고민되시나요? 비디온리는 오직 당신만을 위한
                    템플릿을 통해 기다리고 있습니다
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-space-between">{featureElements}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FeatureSection;

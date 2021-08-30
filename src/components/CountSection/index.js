import React, { Component } from "react";
import "./style.css";


class CountSection extends Component {
  render() {
    const { listCountItems }= this.props;
    var countList = listCountItems.map((item) => {
      return (
        <div className="count__block c-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s" key={item.id}>
          <div className="count__img">
            <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt="" />
          </div>
          <span className="count__title">{item.title}</span>
          <div className="count__number">{item.number}</div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className="count">
          <div className="grid wide">
            <div className="row">
              <div className="count__header section__header wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                <h5>체험 가능한 템플릿</h5>
              </div>
            </div>
            <div className="row justify-content-between">{countList}</div>
            <div className="row">
              <div className="count__content wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                <p>나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</p>
                <a href="index.html" className="btn btn-count">
                  시작하기
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CountSection;

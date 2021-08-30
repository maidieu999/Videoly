import React, { Component } from "react";

import "./style.css";
// import $ from 'jquery';


import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


class ProductListSection extends Component {
    state = {
        responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 4
            }
        },
    }
    
  render() {
    const { productList } = this.props;
      var productListElement = productList.map(product => {
          return (
              <div className="product__item item" key={product.id}>
                  <a href="index.html" className="product__item-img">
                    <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" />
                  </a>
                  <div className="product__item-overlay">
                    <a href="index.html" className="product__item-name">
                      {product.name}
                    </a>
                    <span className="product__item-description">
                      {product.description}
                    </span>
                  </div>
                </div>
          )
      })
    return (
      <React.Fragment>
        <section className="product">
          <div className="grid wide">
            <div className="product__list-header">
              <div className="row justify-space-between product__list-header-wrap">
                <h5 className="product__slide-title">기업들의 템플릿 제작</h5>
                <div className="product__slide-more">
                  <a href="index.html">More &gt;</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="owl-carousel product__slides">
              <OwlCarousel  
                className="owl-theme"  
                loop    
                margin={4}
                autoplay
                responsive={this.state.responsive}
                    >
                    { productListElement}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ProductListSection;

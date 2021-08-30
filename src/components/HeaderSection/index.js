import React, { Component } from 'react';
import './style.css';

class HeaderSection extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
      }
    
      handleScroll(event) {
        var scrollComponent = this;
        scrollComponent.toggleClassActive();
      }

      componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, true);
        // new WOW.WOW().init();
      }
    
      componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll, true);
      }
    
      toggleClassActive() {
        const headerElement = document.querySelector('.header');
        // document.body.scrollTop
        if (window.scrollY > 30) {
            headerElement.classList.add('active');
        } else {
            headerElement.classList.remove('active');
        }
      }
    
    render() {
        return (
            <React.Fragment>
                <div className="header wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="grid wide">
                        <div className="row">
                            <div className="l-6 m-6 c-6 align-item-center">
                                <div className="header__logo" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="img-responsive" alt="logo" />
                                </div>
                            </div>
                            <div className="l-6 m-6 c-6">
                                <div className="header__menu">
                                    <a href="index.html" className="header_btn btn-login">LOGIN</a>
                                    <a href="index.html" className="header_btn btn-join">JOIN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderSection;
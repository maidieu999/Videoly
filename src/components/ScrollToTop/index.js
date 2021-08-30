import React, { Component } from "react";
import './style.css';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      is_visible: false,
    };
  }

  handleScroll(event) {
    var scrollComponent = this;
    scrollComponent.toggleVisibility();
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  toggleVisibility() {
    if (window.scrollY > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-top__btn">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            {/* <i className='bx bxs-chevron-up-square bx-fade-up' ></i> */}
            <i className='bx bxs-chevron-up-square' ></i>
          </div>
        )}
      </div>
    );
  }
}

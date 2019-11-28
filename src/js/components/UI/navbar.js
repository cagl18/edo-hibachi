import React, { Component } from 'react';

class Navbar extends Component {
  state = { hamBtn: false };
  toogleHamBtn = () => {
    this.setState({ hamBtn: !this.state.hamBtn });
  };
  render() {
    return (
      <div>
        <div className='header__nav'>
          <div className='nav'>
            <ul className='nav__menu'>
              <li className='nav__item'>
                <a className='nav__link' href='#menu'>
                  Menu
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#specialties'>
                  Specialties
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#reviews'>
                  Reviews
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  href='https://www.doordash.com/store/edo-hibachi-columbia-399441'
                >
                  Order Now
                </a>
              </li>
            </ul>
            <div className='nav__contact-box'>
              <p className='nav__contact_details'>
                Open Daily, check
                <a href='#hours' className='nav__hours-link'>
                  <i className='far fa-clock'></i>hours
                </a>
                for details
              </p>
              <div className='nav__telephone'>
                <i className='fas fa-phone-alt'></i>
                <a className='btn-phone' href='tel:+18034621500'>
                  (803) 462-1500
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End of header nav / Desktop Navi   */}

        {/* End of Nav box  */}

        {/* Mobile Navigation  */}

        <div className='mobile_navi'>
          <input
            id='navi-toggle'
            type='checkbox'
            className='mobile_navi__checkbox'
            onChange={this.toogleHamBtn}
            checked={this.state.hamBtn}
          />

          <label htmlFor='navi-toggle' className='mobile_navi__button'>
            <span className='mobile_navi__icon'>&nbsp;</span>
          </label>
          <div className='mobile_navi__background'>&nbsp;</div>
          <nav className='mobile_navi__nav'>
            <ul className='mobile_navi__list'>
              <li className='mobile_navi__item'>
                <a
                  className='mobile_navi__link'
                  href='#menu'
                  onClick={this.toogleHamBtn}
                >
                  Menu
                </a>
              </li>
              <li className='mobile_navi__item'>
                <a
                  className='mobile_navi__link'
                  href='#specialties'
                  onClick={this.toogleHamBtn}
                >
                  Specialties
                </a>
              </li>
              <li className='mobile_navi__item'>
                <a
                  className='mobile_navi__link'
                  href='#reviews'
                  onClick={this.toogleHamBtn}
                >
                  Reviews
                </a>
              </li>
              <li className='mobile_navi__item'>
                <a
                  className='mobile_navi__link'
                  href='https://www.doordash.com/store/edo-hibachi-columbia-399441'
                  onClick={this.toogleHamBtn}
                >
                  Order Now
                </a>
              </li>
              <li className='mobile_navi__item'>
                <a
                  href='#hours'
                  className='mobile_navi__link'
                  onClick={this.toogleHamBtn}
                >
                  <i className='far fa-clock'></i> hours
                </a>
              </li>
              <li className='mobile_navi__item'>
                <a
                  className='mobile_navi__link btn-phone'
                  href='tel:+18034621500'
                >
                  <i
                    className='fas fa-phone-alt'
                    style={{ fontSize: '2.5rem' }}
                  ></i>
                  (803) 462-1500
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* end of Mobile Navigation  */}
      </div>
    );
  }
}

export default Navbar;

import React from 'react';

const footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='logo-box'>
          <a href='.' className='logo'>
            <span className='logo__box--name1'>Edo</span>
            <span className='logo__box--name2'>Hibachi</span>
          </a>
        </div>
      </div>
      <div className='footer-box'>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='footer__category'>
              <h4 className='footer__title heading-quaternary u-center-text'>
                <div>Visit Us</div>
                <div className='heading-divider'></div>
              </h4>
              <div className='footer__content'>
                <a
                  className='footer__content--link'
                  href='https://www.google.com/maps/place/Edo+Hibachi/@34.114682,-80.8877367,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8abcfbc7598f9:0xafd34f417799d961!8m2!3d34.114682!4d-80.885548'
                >
                  <p>10120 Two Notch Rd</p>
                  <p>Ste 1B </p>
                  <p>Columbia, SC 29223</p>
                </a>
                <i className='icon fas fa-map-marker-alt'></i>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div id='hours' className='footer__category'>
              <h4 className='footer__title heading-quaternary u-center-text'>
                <div>Opening Times</div>
                <div className='heading-divider' style={{ width: '26%' }}></div>
              </h4>
              <div className='footer__content'>
                <a href='/#' className='footer__content--link'>
                  <p>Mon-Thurs: 11:00 am - 9:30 pm</p>
                  <p>Fri-Sat: 11:00 am - 10:00 pm</p>
                  <p>Sun: 11:30 am - 9:30 pm</p>
                </a>
                <i className='icon far fa-clock'></i>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='footer__category'>
              <h4 className='footer__title heading-quaternary u-center-text'>
                <div>Contact Us</div>
                <div className='heading-divider'></div>
              </h4>
              <div className='footer__content' style={{ paddingLeft: '2rem' }}>
                <a href='tel:8034621500' className='footer__content--link'>
                  <p>(803) 462-1500</p>
                </a>
                <i
                  className='fas fa-phone-alt'
                  style={{ fontSize: '2.3rem' }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__copyright u-center-text'>
          <div className='row'>
            <p>
              &copy; 2019 Edo Hibachi. All rights reserved. Developed & Designed
              by
              <a
                target='_blank'
                className='developer'
                href='http://www.carlosgonzalez.pro'
                rel='noopener noreferrer'
              >
                Carlos Gonzalez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;

import React from 'react';
import Navbar from './UI/navbar';
import Scroller from './UI/scroller';

const header = props => {
  return (
    <header className='header'>
      <div className='header__nav-box'>
        <a href='.' className='logo'>
          <div className='logo__box'>
            <span className='logo__box--name1'>Edo</span>
            <span className='logo__box--name2'>Hibachi</span>
          </div>
        </a>
        <Navbar />
        <div className='row'>
          <div className='header__content'>
            <h1 className='heading-primary'>
              7 Years Making Good Quality Hibachi Dishes
            </h1>
            <p className='paragraph u-margin-bottom-big'>
              Delicious food, consistency and afforable price, are the reasons
              why our customers will return for more
            </p>
            <a
              className='btn btn__order-online'
              href='https://www.doordash.com/store/edo-hibachi-columbia-399441'
            >
              Order Online
            </a>
          </div>
          {/* End of header Content  */}

          <Scroller />
        </div>
        {/* End of header  */}
      </div>
    </header>
  );
};

export default header;

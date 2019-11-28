import React from 'react';

const specialty = () => {
  return (
    <section
      id='specialties'
      className='section-specialties u-padding-bottom-big js--wp-1'
    >
      <h2 className='heading-secondary heading--color-tertiary u-center-text u-margin-bottom-medium u-padding-top-medium'>
        Specialties
      </h2>
      <div className='section-specialties--box'>
        <div className='row'>
          <div className='col-1-of-3'>
            <a href='#appetizers' className='tile'>
              <div className='tile__bg tile__bg--default'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_gyoza.png')}
                  alt='Specialty Dish Gyoza'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>GYOZA</h3>
                  <p className='tile__dish-price'>$4.55</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-1  */}
          </div>
          <div className='col-1-of-3'>
            <a href='#bowls' className='tile'>
              <div className='tile__bg tile__bg--secondary'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_Hibachi-Shrimp.png')}
                  alt='Specialty Dish Shrimp bowl'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>Shrimp Bowl</h3>
                  <p className='tile__dish-price'>$8.55</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-2  */}
          </div>

          <div className='col-1-of-3'>
            <a href='#entrees' className='tile'>
              <div className='tile__bg tile__bg--default'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_Salt-and-Pepper-Chicken.png')}
                  alt='Specialty Dish Salt & Pepper Chicken'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>Salt & Pepper Chicken</h3>
                  <p className='tile__dish-price'>$9.25</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-3  */}
          </div>

          <div className='col-1-of-3'>
            <a href='#rolls' className='tile'>
              <div className='tile__bg tile__bg--primary-light'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_godzilla-roll.png')}
                  alt='Specialty Dish Gozrilla Roll'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>Godzilla Roll</h3>
                  <p className='tile__dish-price'>$8.25</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-4 */}
          </div>
          <div className='col-1-of-3'>
            <a href='#entrees' className='tile'>
              <div className='tile__bg tile__bg--default'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_Hibachi-Vegetable.png')}
                  alt='Specialty Dish Hibachi Vegetable'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>Hibachi Vegetable</h3>
                  <p className='tile__dish-price'>$7.95</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-5  */}
          </div>
          <div className='col-1-of-3'>
            <a href='#bowls' className='tile'>
              <div className='tile__bg tile__bg--tertiary'>
                <img
                  className='tile__picture'
                  src={require('../../img/specialty_Steak-bowl.png')}
                  alt='Specialty Dish Steak bowl'
                />
                <div className='tile__details'>
                  <h3 className='tile__dish-name'>Steak Bowl</h3>
                  <p className='tile__dish-price'>$9.55</p>
                </div>
              </div>
            </a>
            {/* End of tile - dish-6  */}
          </div>
        </div>
      </div>
    </section>
    // {/* End of Specialities Section  */}
  );
};

export default specialty;

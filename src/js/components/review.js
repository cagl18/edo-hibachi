import React, { Component } from 'react';
import yelpAxios from '../../api/yelp';
import StarRating from 'react-star-ratings';

class review extends Component {
  state = {
    reviews: [
      {
        id: '1',
        rating: 4.5,
        text: `Love this place. Food is prepared quickly. My favorite is the
          Hibachi steak and shrimp, cooked to pefection. Very reasonably
          priced.`,
        time_created: '2019-05-19 15:01:59',
        url:
          'https://www.yelp.com/biz/edo-hibachi-columbia?adjust_creative=C_1t60K5pVpbdLh0trecEg&hrid=HmOAToxt4uHk3YyLKgkiTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=C_1t60K5pVpbdLh0trecEg',
        user: {
          id: '',
          image_url: '',
          name: 'Wendell K.',
          profile_url:
            'https://www.yelp.com/user_details?userid=RpbYgMmy50gwbsTbqrlUiw'
        }
      }
    ]
  };
  async componentDidMount() {
    const edoHibachiBussId = 'FkBCWlyvDy3OLThMlO7zXA';
    const res = await this.getReviews(edoHibachiBussId);
    this.setState({ reviews: res.data.reviews });
  }
  getReviews = async bussId => {
    const response = await yelpAxios.get(`/businesses/${bussId}/reviews`, {
      sort_by: 'rating'
    });
    return response;
  };

  render() {
    const reviews = this.state.reviews.map(r => (
      <div key={r.id} className='col-1-of-3'>
        <div className='review-box'>
          <div className='review'>
            <div className='review__rating'>
              <StarRating
                rating={r.rating}
                starRatedColor={`#f4d03f`}
                // changeRating={r.rating}
                // disabled={true}
                size={this.state.rating}
                // editing={false}
                totalStars={5}
                name='rating'
                value={r.rating}
                step={0.5}
                starEmptyColor={`#e6e6e6`}
                starDimension={'3rem'}

                // onRatingClick={function}
              />
              {` ( ${r.rating}/5)`}
            </div>

            <blockquote className='review__comment truncate-overflow developer'>
              <a href={r.url} target='_blank' rel='noopener noreferrer'>
                {r.text}
              </a>
            </blockquote>

            <cite className='review__customer'>
              <img
                className='review__customer--img'
                src={
                  r.user.image_url
                    ? r.user.image_url
                    : require('../../img/placeholder.png')
                }
                alt={`${r.user.name} - Customer`}
              />
              <p className='review__customer--name'>
                {r.user.name} &nbsp; - &nbsp;
                {new Date(r.time_created).toLocaleDateString('en-US')}
              </p>
            </cite>
          </div>
        </div>
      </div>
    ));
    return (
      <section id='reviews' className='section-reviews'>
        <div className='row'>
          <h2 className='heading-secondary heading--color-tertiary-dark u-center-text u-margin-bottom-medium'>
            Customer's reviews
          </h2>

          {reviews}
        </div>
      </section>
    );
  }
}

export default review;

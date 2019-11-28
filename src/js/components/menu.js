import React from 'react';

const menu = () =>{
    return (
        <section id="menu" className="menu u-padding-top-medium">
                <div className="row">

                    <h2 className="heading-secondary heading--color-tertiary u-center-text u-margin-bottom-small">
                        <div>Menu</div>
                        <img className="curly-divider" src={require('../../img/divider.png')} alt="Heading Divider"/>
                    </h2>

                    <hr className="horizontal-ruler u-margin-bottom-medium"/>
                    <div className="menu-section--box">
                        <div className="col-1-of-2">
                            <div id="appetizers" className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Appetizers</h3>
                                    </div>
                                     {/* <p className="menu-section__subtitle">&nbsp;</p>  */}
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Harumaki(2)</span>
                                            <span className="menu-section__item--price">2.95</span>
                                            {/* <span className="menu-section__item--price">2.95</span> */}
                                            <p className="menu-section__item--description">Japanese Spring Roll</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Edamame</span>
                                            <span className="menu-section__item--price">3.25</span>
                                            <p className="menu-section__item--description">Steamed Soy Bean</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Crab Rangoon (6)</span>
                                            <span className="menu-section__item--price">3.95</span>
                                            {/* <span className="menu-section__item--price">5.95</span> */}
                                            <p className="menu-section__item--description">Fried Cheese Wonton</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Gyoza (6)</span>
                                            <span className="menu-section__item--price">3.95</span>
                                            {/* <span className="menu-section__item--price">6.95</span> */}
                                            <p className="menu-section__item--description">Fried Dumplings</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Chicken Wing (6) (Plain)</span>
                                            <span className="menu-section__item--price">4.75</span>
                                            {/* <span className="menu-section__item--price">6.95</span> */}
                                            <p className="menu-section__item--description">with Fried Rice $5.95 / with Shrimp Fried Rice $7.95</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                             {/* End of Appetizers menu section  */}
                        </div>
                        <div className="col-1-of-2">
                            <div className="menu-section menu-section--w-sizes">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Soup & Salad</h3>
                                        <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span>
                                    </div>
                                    <p className="menu-section__subtitle">Salad choice of dressing: ginger, ranch or white sauce</p>
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Miso Soup</span>
                                            <span className="menu-section__item--price">1.65</span>
                                            <span className="menu-section__item--price">3.75</span>
                                            <p className="menu-section__item--description">&nbsp;</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">House Salad</span>
                                            <span className="menu-section__item--price">1.95</span>
                                            <p className="menu-section__item--description">Served with ginger dressing</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Grill Chicken Salad</span>
                                            <span className="menu-section__item--price">4.95</span>
                                            <span className="menu-section__item--price">6.95</span>
                                            <p className="menu-section__item--description">&nbsp;</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Grill Shrimp Salad</span>
                                            <span className="menu-section__item--price">5.95</span>
                                            <span className="menu-section__item--price">7.95</span>
                                            <p className="menu-section__item--description">&nbsp;</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-small">
                                            <span className="menu-section__item--name">Seaweed Salad</span>
                                            <span className="menu-section__item--price">3.75</span>
                                            {/* <span className="menu-section__item--price">6.95</span> */}
                                            {/* <p className="menu-section__item--description">&nbsp;</p> */}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                             {/* End of Soup and Salad menu section  */}
                        </div>
                        <div className="col-1-of-2">
                            <div id="rolls" className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Sushi Roll</h3>
                                        {/* <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span> */}
                                    </div>
                                    {/* <p className="menu-section__item--description">&nbsp;</p> */}
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Godzilla Roll <i className="fas fa-pepper-hot"></i></span>
                                            <span className="menu-section__item--price">7.25</span>
                                            {/* <span className="menu-section__item--price">2.95</span> */}
                                            <p className="menu-section__item--description">Deep fried spicy crab meat, avocado with chef special sauce</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">California Roll</span>
                                            <span className="menu-section__item--price">3.95</span>
                                            <p className="menu-section__item--description">Crab and avocado.</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                             {/* End of Sushi Roll menu section  */}
                        </div>
                        <div className="col-1-of-2">
                            <div id="bowls" className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Value Bowls</h3>
                                         {/* <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span>  */}
                                    </div>
                                    <p className="menu-section__item--description menu-section__item--sub-heading">Served with fried or steamed rice. Add Soup or Salad $1.50</p>
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Chicken Bowl</span>
                                            <span className="menu-section__item--price">6.25</span>
                                            {/* <span className="menu-section__item--price">2.95</span> */}
                                            {/* <p className="menu-section__item--description">Deep fried spicy crab meat, avocado with chef special sauce</p> */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Shrimp Bowl</span>
                                            <span className="menu-section__item--price">7.25</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Steak Bowl</span>
                                            <span className="menu-section__item--price">8.25</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            {/* End of Value Bowls menu section  */}
                        </div>
                        <div className="col-1-of-2">
                            <div id="entrees" className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Entrees</h3>
                                        {/* <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span>  */}
                                    </div>
                                    <p className="menu-section__item--description menu-section__item--sub-heading">Served with fried or steamed rice, mixed vegetables and shrimp sauce. Add Soup or Salad $1.50</p>
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Vegetable</span>
                                            <span className="menu-section__item--price">6.55</span>
                                             {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Teriyaki Chicken (White Meat)</span>
                                            <span className="menu-section__item--price">6.95</span>
                                            {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce</p> */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Salt & Pepper Chicken</span>
                                            <span className="menu-section__item--price">6.95</span>
                                            <p className="menu-section__item--description">Grilled white meat chicken without teriyaki sauce</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Shrimp</span>
                                            <span className="menu-section__item--price">8.25</span>
                                             {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Steak</span>
                                            <span className="menu-section__item--price">9.15</span>
                                            {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Steak & Shrimp</span>
                                            <span className="menu-section__item--price">9.75</span>
                                             {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Chicken & Shrimp</span>
                                            <span className="menu-section__item--price">8.25</span>
                                             {/* <p className="menu-section__item--description">Served with fried or steamed rice, mixed vegetables and shrimp sauce.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Chicken & Steak</span>
                                            <span className="menu-section__item--price">9.45</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Chicken & Jumbo Shrimp</span>
                                            <span className="menu-section__item--price">9.75</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Teriyaki Steak & Shrimp</span>
                                            <span className="menu-section__item--price">9.75</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Steak & Jumbo Shrimp</span>
                                            <span className="menu-section__item--price">10.75</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi/Teriyaki Jumbo Shrimp</span>
                                            <span className="menu-section__item--price">10.55</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p> */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Shrimp Tempura</span>
                                            <span className="menu-section__item--price">7.55</span>
                                            <p className="menu-section__item--description">Deep Fried Shrimp with Fried Rice & Sweet Carrot</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Steak, Shrimp & Chicken</span>
                                            <span className="menu-section__item--price">11.95</span>
                                             {/* <p className="menu-section__item--description">Deep Fried Shrimp with Fried Rice & Sweet Carrot</p>  */}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                             {/* End of Entrees menu section  */}
                        </div>
                        <div className="col-1-of-2">
                            <div className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Combo Meals</h3>
                                        {/* <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span> */}
                                    </div>
                                    <p className="menu-section__item--description menu-section__item--sub-heading">Served with fried or steamed rice & mixed vegetables. Include house salad & medium drink</p>
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Chicken Combo</span>
                                            <span className="menu-section__item--price">9.75</span>
                                            {/* <span className="menu-section__item--price">2.95</span>  */}
                                             {/* <p className="menu-section__item--description">Deep fried spicy crab meat, avocado with chef special sauce</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Shrimp Combo</span>
                                            <span className="menu-section__item--price">10.25</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Steak Combo</span>
                                            <span className="menu-section__item--price">11.25</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            {/* End of Combo Meals menu section */}
                        </div>
                        <div className="col-1-of-2">
                            <div className="menu-section">
                                <div className="menu-section__group-header">
                                    <div className="menu-section__heading">
                                        <h3 className="heading-tertiary heading--color-primary menu-section__title">Side Items</h3>
                                         {/* <span className="menu-section__size-label-box">
                                            <span className="menu-section__size-label"><p>S</p></span>
                                            <span className="menu-section__size-label"><p>L</p></span>
                                        </span>  */}
                                    </div>
                                    {/* <p className="menu-section__item--description">&nbsp;</p>  */}
                                </div>
                                <div className="menu-section__details">
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Shrimp Sauce</span>
                                            <span className="menu-section__item--price">0.25</span>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Steamed Rice</span>
                                            <span className="menu-section__item--price">1.95</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p> */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Fried Rice</span>
                                            <span className="menu-section__item--price">1.95</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Onions & Zucchini</span>
                                            <span className="menu-section__item--price">2.15</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Broccoli</span>
                                            <span className="menu-section__item--price">2.15</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Mixed Vegetables</span>
                                            <span className="menu-section__item--price">3.25</span>
                                             {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Teriyaki Chicken</span>
                                            <span className="menu-section__item--price">3.95</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Shrimp</span>
                                            <span className="menu-section__item--price">4.95</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Hibachi Steak</span>
                                            <span className="menu-section__item--price">5.95</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Sweet Carrot</span>
                                            <span className="menu-section__item--price">2.15</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Soft Drinks</span>
                                            <span className="menu-section__item--price">1.75</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item u-padding-bottom-tiny">
                                            <span className="menu-section__item--name">Kid's Drink</span>
                                            <span className="menu-section__item--price">0.99</span>
                                            {/* <p className="menu-section__item--description">Crab and avocado.</p>  */}
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Kid's Chicken</span>
                                            <span className="menu-section__item--price">5.75</span>
                                            <p className="menu-section__item--description">Served with fried or steamed Rice & Sweet Carrot</p>
                                        </h4>
                                    </div>
                                    <div className="menu-section__item-box">
                                        <h4 className="heading-quaternary menu-section__item">
                                            <span className="menu-section__item--name">Kid's Shrimp</span>
                                            <span className="menu-section__item--price">6.25</span>
                                            <p className="menu-section__item--description">Served with fried or steamed Rice & Sweet Carrot</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                             {/* End of Side Items menu section  */}
                        </div>
                    </div>
                </div>
            </section>
            // {/* End of Menu Section  */}
    );
}
export default menu
import React from 'react'

function Shop() {
  return (
    <div>
      {/*====== App Content ======*/}
      <div className="app-content">

        {/*====== Section 1 ======*/}
        <div className="u-s-p-y-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="shop-w-master">
                  <h1 className="shop-w-master__heading u-s-m-b-30"><i className="fas fa-filter u-s-m-r-8"></i>

                    <span>FILTERS</span></h1>
                  <div className="shop-w-master__sidebar sidebar--bg-snow">
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">CATEGORY</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-category" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-category">
                          <ul className="shop-w__category-list gl-scroll">

                            <li>

                              <a href="#">Food & Supplies</a>

                              <span className="category-list__text u-s-m-l-6">(0)</span></li>
                            <li>

                              <a href="#">Furniture & Decor</a>

                              <span className="category-list__text u-s-m-l-6">(0)</span></li>
                            <li>

                              <a href="#">Sports & Game</a>

                              <span className="category-list__text u-s-m-l-6">(0)</span></li>
                            <li>

                              <a href="#">Beauty & Health</a>

                              <span className="category-list__text u-s-m-l-6">(0)</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">RATING</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-rating" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-rating">
                          <ul className="shop-w__list gl-scroll">
                            <li>
                              <div className="rating__check">

                                <input type="checkbox" />
                                <div className="rating__check-star-wrap"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                              </div>

                              <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                              <div className="rating__check">

                                <input type="checkbox" />
                                <div className="rating__check-star-wrap"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                  <span>& Up</span></div>
                              </div>

                              <span className="shop-w__total-text">(8)</span>
                            </li>
                            <li>
                              <div className="rating__check">

                                <input type="checkbox" />
                                <div className="rating__check-star-wrap"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                                  <span>& Up</span></div>
                              </div>

                              <span className="shop-w__total-text">(10)</span>
                            </li>
                            <li>
                              <div className="rating__check">

                                <input type="checkbox" />
                                <div className="rating__check-star-wrap"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                                  <span>& Up</span></div>
                              </div>

                              <span className="shop-w__total-text">(12)</span>
                            </li>
                            <li>
                              <div className="rating__check">

                                <input type="checkbox" />
                                <div className="rating__check-star-wrap"><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                                  <span>& Up</span></div>
                              </div>

                              <span className="shop-w__total-text">(1)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">SHIPPING</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-shipping" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-shipping">
                          <ul className="shop-w__list gl-scroll">
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="free-shipping" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="free-shipping">Free Shipping</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">PRICE</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-price" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-price">
                          <form className="shop-w__form-p">
                            <div className="shop-w__form-p-wrap">
                              <div>

                                <label for="price-min"></label>

                                <input className="input-text input-text--primary-style" type="text" id="price-min" placeholder="Min" /></div>
                              <div>

                                <label for="price-max"></label>

                                <input className="input-text input-text--primary-style" type="text" id="price-max" placeholder="Max" /></div>
                              <div>

                                <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" type="submit"></button></div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">MANUFACTURER</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-manufacturer" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-manufacturer">
                          <ul className="shop-w__list-2">
                            <li>
                              <div className="list__content">

                                <input type="checkbox" checked />

                                <span>Calvin Klein</span></div>

                              <span className="shop-w__total-text">(23)</span>
                            </li>
                            <li>
                              <div className="list__content">

                                <input type="checkbox" />

                                <span>Diesel</span></div>

                              <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                              <div className="list__content">

                                <input type="checkbox" />

                                <span>Polo</span></div>

                              <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                              <div className="list__content">

                                <input type="checkbox" />

                                <span>Tommy Hilfiger</span></div>

                              <span className="shop-w__total-text">(9)</span>
                            </li>
                            <li>
                              <div className="list__content">

                                <input type="checkbox" />

                                <span>Ndoge</span></div>

                              <span className="shop-w__total-text">(3)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">COLOR</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-color" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-color">
                          <ul className="shop-w__list gl-scroll">
                            <li>
                              <div className="color__check">

                                <input type="checkbox" id="jet" />

                                <label className="color__check-label" for="jet" style={{ backgroundColor: "#333333" }}></label></div>

                              <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                              <div className="color__check">

                                <input type="checkbox" id="folly" />

                                <label className="color__check-label" for="folly" style={{ backgroundColor: "#FF0055" }}></label></div>

                              <span className="shop-w__total-text">(4)</span>
                            </li>
                            <li>
                              <div className="color__check">

                                <input type="checkbox" id="yellow" />

                                <label className="color__check-label" for="yellow" style={{ backgroundColor: "#FFFF00" }}></label></div>

                              <span className="shop-w__total-text">(6)</span>
                            </li>
                            <li>
                              <div className="color__check">

                                <input type="checkbox" id="granite-gray" />

                                <label className="color__check-label" for="granite-gray" style={{ backgroundColor: "#605F5E" }}></label></div>

                              <span className="shop-w__total-text">(8)</span>
                            </li>
                            <li>
                              <div className="color__check">

                                <input type="checkbox" id="space-cadet" />

                                <label className="color__check-label" for="space-cadet" style={{ backgroundColor: "#1D3461" }}></label></div>

                              <span className="shop-w__total-text">(10)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">SIZE</h1>

                          <span className="fas fa-minus collapsed shop-w__toggle" data-target="#s-size" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse" id="s-size">
                          <ul className="shop-w__list gl-scroll">
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="xs" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="xs">XS</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="small" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="small">Small</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(4)</span>
                            </li>
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="medium" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="medium">Medium</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(6)</span>
                            </li>
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="large" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="large">Large</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(8)</span>
                            </li>
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="xl" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="xl">XL</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(10)</span>
                            </li>
                            <li>

                              {/*====== Check Box ======*/}
                              <div className="check-box">

                                <input type="checkbox" id="xxl" />
                                <div className="check-box__state check-box__state--primary">

                                  <label className="check-box__label" for="xxl">XXL</label></div>
                              </div>
                              {/*====== End - Check Box ======*/}

                              <span className="shop-w__total-text">(12)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="shop-p">
                  <div className="shop-p__toolbar u-s-m-b-30">
                    <div className="shop-p__meta-wrap u-s-m-b-60">

                      <span className="shop-p__meta-text-1">FOUND 18 RESULTS</span>
                      <div className="shop-p__meta-text-2">

                        <span>Related Searches:</span>

                        <a className="gl-tag btn--e-brand-shadow" href="#">men's clothing</a>

                        <a className="gl-tag btn--e-brand-shadow" href="#">mobiles & tablets</a>

                        <a className="gl-tag btn--e-brand-shadow" href="#">books & audible</a></div>
                    </div>
                    <div className="shop-p__tool-style">
                      <div className="tool-style__group u-s-m-b-8">

                        <span className="js-shop-grid-target is-active">Grid</span>

                        <span className="js-shop-list-target">List</span></div>
                      <form>
                        <div className="tool-style__form-wrap">
                          <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2">
                            <option>Show: 8</option>
                            <option selected>Show: 12</option>
                            <option>Show: 16</option>
                            <option>Show: 28</option>
                          </select></div>
                          <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2">
                            <option selected>Sort By: Newest Items</option>
                            <option>Sort By: Latest Items</option>
                            <option>Sort By: Best Selling</option>
                            <option>Sort By: Best Rating</option>
                            <option>Sort By: Lowest Price</option>
                            <option>Sort By: Highest Price</option>
                          </select></div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="shop-p__collection">
                    <div className="row is-grid-active">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/men/product6.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Men Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Fashion B Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/women/product5.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Women Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Dress A Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/women/product6.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Women Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Dress B Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/women/product7.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Women Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Dress C Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/men/product9.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Men Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Fashion E Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/men/product10.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Men Clothing</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">New Fashion F Nice Elegant</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product2.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Red Wireless Headphone</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00</div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product3.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Yellow Wireless Headphone</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00

                              <span className="product-m__discount">$22.00</span></div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product4.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Hover Skateboard Scooter</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00

                              <span className="product-m__discount">$22.00</span></div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product5.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Hover Red Skateboard Scooter</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00

                              <span className="product-m__discount">$22.00</span></div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product6.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Canon DSLR Camera 4k</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00

                              <span className="product-m__discount">$22.00</span></div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-m">
                          <div className="product-m__thumb">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                              <img className="aspect__img" src="images/product/electronic/product7.jpg" alt="" /></a>
                            <div className="product-m__quick-look">

                              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                            <div className="product-m__add-cart">

                              <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                          </div>
                          <div className="product-m__content">
                            <div className="product-m__category">

                              <a href="shop-side-version-2.html">Electronics</a></div>
                            <div className="product-m__name">

                              <a href="product-detail.html">Nikon DSLR Camera 4k</a></div>
                            <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                              <span className="product-m__review">(23)</span></div>
                            <div className="product-m__price">$125.00

                              <span className="product-m__discount">$22.00</span></div>
                            <div className="product-m__hover">
                              <div className="product-m__preview-description">

                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                              <div className="product-m__wishlist">

                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-p-y-60">

                    {/*====== Pagination ======*/}
                    <ul className="shop-p__pagination">
                      <li className="is-active">

                        <a href="shop-grid-left.html">1</a></li>
                      <li>

                        <a href="shop-grid-left.html">2</a></li>
                      <li>

                        <a href="shop-grid-left.html">3</a></li>
                      <li>

                        <a href="shop-grid-left.html">4</a></li>
                      <li>

                        <a className="fas fa-angle-right" href="shop-grid-left.html"></a></li>
                    </ul>
                    {/*====== End - Pagination ======*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Section 1 ======*/}
      </div>
      {/*====== End - App Content ======*/}
    </div>
  )
}

export default Shop

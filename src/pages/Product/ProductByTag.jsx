import React from 'react'

const ProductByTag = () => {
    return (
        <>
            {/*====== App Content ======*/}
            <div className="app-content">
                {/*====== Section 1 ======*/}
                <div className="u-s-p-y-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shop-p">
                                    <div className="shop-p__toolbar u-s-m-b-30">
                                        <div className="shop-p__meta-wrap u-s-m-b-60">
                                            <span className="shop-p__meta-text-1">FOUND 18 RESULTS</span>
                                            <div className="shop-p__meta-text-2">
                                                <span>Related Searches:</span>
                                                <a className="gl-tag btn--e-brand-shadow" href="#">men's clothing</a>
                                                <a className="gl-tag btn--e-brand-shadow" href="#">mobiles &amp; tablets</a>
                                                <a className="gl-tag btn--e-brand-shadow" href="#">books &amp; audible</a></div>
                                        </div>
                                        <div className="shop-p__tool-style">
                                            <div className="tool-style__group u-s-m-b-8">
                                                <span className="js-shop-filter-target" data-side="#side-filter">Filters</span>
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
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/men/product6.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Men Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Fashion B Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/women/product5.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Women Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Dress A Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/women/product6.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Women Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Dress B Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/women/product7.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Women Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Dress C Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/men/product9.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Men Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Fashion E Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/men/product10.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Men Clothing</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">New Fashion F Nice Elegant</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product2.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Red Wireless Headphone</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00</div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product3.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Yellow Wireless Headphone</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00
                                                            <span className="product-m__discount">$22.00</span></div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product4.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Hover Skateboard Scooter</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00
                                                            <span className="product-m__discount">$22.00</span></div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product5.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Hover Red Skateboard Scooter</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00
                                                            <span className="product-m__discount">$22.00</span></div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product6.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Canon DSLR Camera 4k</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00
                                                            <span className="product-m__discount">$22.00</span></div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-m">
                                                    <div className="product-m__thumb">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="images/product/electronic/product7.jpg" alt /></a>
                                                        <div className="product-m__quick-look">
                                                            <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                                                        <div className="product-m__add-cart">
                                                            <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                                                    </div>
                                                    <div className="product-m__content">
                                                        <div className="product-m__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></div>
                                                        <div className="product-m__name">
                                                            <a href="product-detail.html">Nikon DSLR Camera 4k</a></div>
                                                        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                            <span className="product-m__review">(23)</span></div>
                                                        <div className="product-m__price">$125.00
                                                            <span className="product-m__discount">$22.00</span></div>
                                                        <div className="product-m__hover">
                                                            <div className="product-m__preview-description">
                                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                                            <div className="product-m__wishlist">
                                                                <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
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
                                                <a href="shop-grid-full.html">1</a></li>
                                            <li>
                                                <a href="shop-grid-full.html">2</a></li>
                                            <li>
                                                <a href="shop-grid-full.html">3</a></li>
                                            <li>
                                                <a href="shop-grid-full.html">4</a></li>
                                            <li>
                                                <a className="fas fa-angle-right" href="shop-grid-full.html" /></li>
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

        </>
    )
}

export default ProductByTag

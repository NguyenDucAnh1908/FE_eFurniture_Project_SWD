import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { fetchallBrand } from '../services/BrandApi/BrandApi';
import { fetchallCategory } from '../services/CategoryApi/CategoryApi';
import { fetchallTagProduct } from '../services/TagProductApi/TagProductApi';
import { useCart } from 'react-use-cart';
import { wait } from '@testing-library/user-event/dist/utils';
import Pagination from '../components/Pagination/Pagination';

function Shop() {
  const { addItem } = useCart();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [tagProducts, setTagProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectTagProducts, setSelectTagProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0); // Khởi tạo totalProducts với giá trị ban đầu là 0

  useEffect(() => {
    getCategory();
    getbrand();
    gettagProduct();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrands, currentPage]);


  const fetchProducts = async (page, minPrice, maxPrice) => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/products', {
        params: {
          keyword: '',
          page: currentPage - 1,
          limit: 1,
          minPrice: minPrice,
          maxPrice: maxPrice,
          brandIds: selectedBrands.map(brand => brand.id).join(','),
          tagsProductIds: selectTagProducts.map(tagProduct => tagProduct.id).join(','),
          // categoryId: selectedCategory ? selectedCategory.id : ''
          categoryIds: selectedCategory.map(category => category.id).join(',')
        }
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setTotalProducts(response.data.totalProducts);
      console.log("Check product: ", response.data.products)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCategory = async () => {
    let resCate = await fetchallCategory();
    if (resCate) {
      setCategories(resCate)
    }
    //console.log("check category: ", resCate)
  };

  const getbrand = async () => {
    let resbrand = await fetchallBrand();
    if (resbrand) {
      setBrands(resbrand)
    }
    //console.log("check brand: ", resbrand)
  };

  const gettagProduct = async () => {
    let resTag = await fetchallTagProduct();
    if (resTag) {
      setTagProducts(resTag)
    }
    console.log("check tagProducts: ", resTag)
  };

  const handleBrandToggle = (brand) => {
    const isSelected = selectedBrands.includes(brand);
    if (isSelected) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  const handleCategoryToggle = (category) => {
    const isSelected = selectedCategory.includes(category);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((c) => c !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const handleProductTagToggle = (tagProduct) => {
    const isSelected = selectTagProducts.includes(tagProduct);
    if (isSelected) {
      setSelectTagProducts(selectTagProducts.filter((t) => t !== tagProduct));
    } else {
      setSelectTagProducts([...selectTagProducts, tagProduct]);
    }
  };

  const handleSubmitPriceFilter = (event) => {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
    const minPrice = document.getElementById('price-min').value;
    const maxPrice = document.getElementById('price-max').value;
    fetchProducts(1, minPrice, maxPrice);
  };

  const addToCart = (product) => {
    // Lấy danh sách sản phẩm đã lưu trong session, nếu không có thì khởi tạo một mảng rỗng
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    // Thêm sản phẩm mới vào danh sách
    cartItems.push(product);
    // Lưu danh sách sản phẩm vào session
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
    // Thông báo cho người dùng biết sản phẩm đã được thêm vào giỏ hàng
    alert('Product added to cart!');
    console.log("Check ad to cart: ", cartItems)
  };
 

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
                            {categories.map((category) => (
                              <li key={category.id}>
                                <div className="list__content">
                                  <input
                                    type="checkbox"
                                    checked={selectedCategory.includes(category)}
                                    onChange={() => handleCategoryToggle(category)}
                                  />
                                  <span>{category.name}</span>
                                </div>
                                {/* <span className="shop-w__total-text">(23)</span> */}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">CATEGORY</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-manufacturer" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-manufacturer">
                          <ul className="shop-w__list-2">
                            {categories.map((category) => (
                              <li key={category.id}>
                                <div className="list__content">
                                  <input
                                    type="checkbox"
                                    checked={selectedCategory.includes(category)}
                                    onChange={() => handleCategoryToggle(category)}
                                  />
                                  <span>{category.name}</span>
                                </div>
                                <span className="shop-w__total-text">(23)</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    {/* RATING */}
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
                    {/* TAGPRODUCT */}
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">TAG PRODUCT</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-shipping" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-shipping">
                          <ul className="shop-w__list gl-scroll">
                            {tagProducts.map((tagProduct) => (
                              <li key={tagProduct.id}>
                                <div className="list__content">
                                  <input
                                    type="checkbox"
                                    checked={selectTagProducts.includes(tagProduct)}
                                    onChange={() => handleProductTagToggle(tagProduct)}
                                  />
                                  <span>{tagProduct.name}</span>
                                </div>
                                {/* <span className="shop-w__total-text">(23)</span> */}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* PRICE */}
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">PRICE</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-price" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-price">
                          <form className="shop-w__form-p" onSubmit={handleSubmitPriceFilter}>
                            <div className="shop-w__form-p-wrap">
                              <div>

                                <label for="price-min"></label>

                                <input className="input-text input-text--primary-style" type="number" id="price-min" placeholder="Min" /></div>
                              <div>

                                <label for="price-max"></label>

                                <input className="input-text input-text--primary-style" type="number" id="price-max" placeholder="Max" /></div>
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
                          <h1 className="shop-w__h">BRAND</h1>

                          <span className="fas fa-minus shop-w__toggle" data-target="#s-manufacturer" data-toggle="collapse"></span>
                        </div>
                        <div className="shop-w__wrap collapse show" id="s-manufacturer">
                          <ul className="shop-w__list-2">
                            {brands.map((brand) => (
                              <li key={brand.id}>
                                <div className="list__content">
                                  <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandToggle(brand)}
                                  />
                                  <span>{brand.name}</span>
                                </div>
                                <span className="shop-w__total-text">(23)</span>
                              </li>
                            ))}
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

                      <span className="shop-p__meta-text-1">FOUND {totalProducts} RESULTS</span>
                      <div className="shop-p__meta-text-2">
                        <span>Related Searches:&nbsp;&nbsp;</span>
                        {/* {selectedCategory && (
                          <a className="gl-tag btn--e-brand-shadow" href="#">
                            {selectedCategory.name}
                            <i className="fas fa-trash" onClick={clearSelectedCategory} style={{ marginLeft: '5px' }}></i>
                          </a>
                        )} */}
                        {selectedCategory.map((category) => (
                          <a className="gl-tag btn--e-brand-shadow" key={category.id} href="#">
                            {category.name}
                            {/* <i className="fas fa-trash" onClick={clearSelectedBrand} style={{ marginLeft: '5px' }}></i> */}
                          </a>
                        ))}
                        {selectedBrands.map((brand) => (
                          <a className="gl-tag btn--e-brand-shadow" key={brand.id} href="#">
                            {brand.name}
                            {/* <i className="fas fa-trash" onClick={clearSelectedBrand} style={{ marginLeft: '5px' }}></i> */}
                          </a>
                        ))}

                        {selectTagProducts.map((tagProduct) => (
                          <a className="gl-tag btn--e-brand-shadow" key={tagProduct.id} href="#">
                            {tagProduct.name}
                            {/* <i className="fas fa-trash" onClick={clearSelectedBrand} style={{ marginLeft: '5px' }}></i> */}
                          </a>
                        ))}
                      </div>
                      {/* <div className="shop-p__meta-text-2">
                        <span>Related Searches: </span>
                        {selectedCategory && (
                          <>
                            <a className="gl-tag btn--e-brand-shadow" href="#">
                              {selectedCategory.name}
                            </a>
                            <i className="fas fa-trash" onClick={clearSelectedCategory}></i>
                          </>
                        )}
                      </div> */}

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
                      {/* Here product */}
                      {products.map((product) => (
                        <div  className="col-lg-4 col-md-6 col-sm-6">
                          <div key={product.id} className="product-m">
                            <div  className="product-m__thumb">

                              <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                <img className="aspect__img" src={product.thumbnail} alt="" /></a>
                              <div className="product-m__quick-look">

                                <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                              <div className="product-m__add-cart">

                                <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart" onClick={() => addItem(product)}>Add to Cart</a></div>
                            </div>
                            <div className="product-m__content">
                              <div className="product-m__category">

                                <a href="shop-side-version-2.html">{product.category_id.name}</a>
                              </div>
                              <div className="product-m__name">

                                <a href="product-detail.html">{product.name}</a></div>
                              <div className="product-m__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>

                                {/* <span className="product-m__review">(23)</span> */}
                              </div>
                              <div class="product-m__price">${product.price}

                                <span class="product-m__discount">${product.price_sale}</span>
                              </div>
                              <div className="product-m__hover">
                                <div className="product-m__preview-description">

                                  <span>{product.description}</span></div>
                                <div className="product-m__wishlist">

                                  <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="u-s-p-y-60">
                    <ul className="shop-p__pagination">
                      {[...Array(totalPages).keys()].map((index) => (
                        <li key={index} className={currentPage === index + 1 ? 'is-active' : ''}>
                          <a href="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                        </li>
                      ))}
                      <li>
                        <a className="fas fa-angle-right" href="#" onClick={() => handlePageChange(currentPage + 1)}></a>
                      </li>
                    </ul>
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

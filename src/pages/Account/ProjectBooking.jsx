import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProjectBooking = () => {
  const { bookingId } = useParams();
  const [projectBookings, setProjectBookings] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/booking/by-booking-id/${bookingId}`
        );
        setProjectBookings(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.response.data);
      }
    };

    fetchProjectBookings();
  }, []);

  return (
    <div>
      {/*====== App Content ======*/}
      <div className="app-content">
        {/*====== Section 1 ======*/}
        <div className="u-s-p-y-60">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="breadcrumb">
                <div className="breadcrumb__wrap">
                  <ul className="breadcrumb__list">
                    <li className="has-separator">
                      <a href="/">Home</a>
                    </li>
                    <li className="is-marked">
                      <a href="/my-order">My Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Section 1 ======*/}

        {/*====== Section 2 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="dash">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-12">
                    {/*====== Dashboard Features ======*/}
                    <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                      <div className="dash__pad-1">
                        <span className="dash__text u-s-m-b-16">
                          Hello, John Doe
                        </span>
                        <ul className="dash__f-list">
                          <li>
                            <a href="dashboard">Manage My Account</a>
                          </li>
                          <li>
                            <a href="/my-profile">My Profile</a>
                          </li>
                          <li>
                            <a href="/address-book">Address Book</a>
                          </li>
                          <li>
                            <a href="/track-order">Track Order</a>
                          </li>
                          <li>
                            <a href="/my-order">My Project Booking</a>
                          </li>
                          <li>
                            <a href="/payment-option">My Payment Options</a>
                          </li>
                          <li>
                            <a href="/cancellation">
                              My Returns & Cancellations
                            </a>
                          </li>
                          <li>
                            <a
                              className="dash-active"
                              yhref="/view-list-projectbooking"
                            >
                              Manage My ProjectBooking
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                      <div className="dash__pad-1">
                        <ul className="dash__w-list">
                          <li>
                            <div className="dash__w-wrap">
                              <span className="dash__w-icon dash__w-icon-style-1">
                                <i className="fas fa-cart-arrow-down"></i>
                              </span>

                              <span className="dash__w-text">4</span>

                              <span className="dash__w-name">
                                Orders Placed
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="dash__w-wrap">
                              <span className="dash__w-icon dash__w-icon-style-2">
                                <i className="fas fa-times"></i>
                              </span>

                              <span className="dash__w-text">0</span>

                              <span className="dash__w-name">
                                Cancel Orders
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="dash__w-wrap">
                              <span className="dash__w-icon dash__w-icon-style-3">
                                <i className="far fa-heart"></i>
                              </span>

                              <span className="dash__w-text">0</span>

                              <span className="dash__w-name">Wishlist</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*====== End - Dashboard Features ======*/}
                  </div>
                  <div className="col-lg-9 col-md-12">
                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                      <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">
                          My Project Booking
                        </h1>

                        <span className="dash__text u-s-m-b-30">
                          Here you can see all products that have been
                          delivered.
                        </span>
                        <form className="m-order u-s-m-b-30">
                          <div className="m-order__select-wrapper"></div>
                        </form>
                        <div className="m-order__list">
                          {/* <div>
                            {error && <div>Error: {error}</div>}
                            <h2>Project Bookings</h2>
                            <ul>
                              {projectBookings.map((booking) => (
                                <li key={booking.id}>
                                  {booking.projectName} - {booking.projectType}
                                </li>
                              ))}
                            </ul>
                          </div> */}
                          {/* <div className="m-order__get">
                                                        <div className="manage-o__header u-s-m-b-30">
                                                            <div className="dash-l-r">
                                                                <div>
                                                                    <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                                    <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                                </div>
                                                                <div>
                                                                    <div className="dash__link dash__link--brand">

                                                                        <a href="/manage-order">MANAGE</a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="manage-o__description">
                                                            <div className="description__container">
                                                                <div className="description__img-wrap">

                                                                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                                <div className="description-title">Yellow Wireless Headphone</div>
                                                            </div>
                                                            <div className="description__info-wrap">
                                                                <div>

                                                                    <span className="manage-o__badge badge--processing">Processing</span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Quantity:

                                                                        <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Total:

                                                                        <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-order__get">
                                                        <div className="manage-o__header u-s-m-b-30">
                                                            <div className="dash-l-r">
                                                                <div>
                                                                    <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                                    <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                                </div>
                                                                <div>
                                                                    <div className="dash__link dash__link--brand">

                                                                        <a href="/manage-order">MANAGE</a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="manage-o__description">
                                                            <div className="description__container">
                                                                <div className="description__img-wrap">

                                                                    <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></div>
                                                                <div className="description-title">New Dress D Nice Elegant</div>
                                                            </div>
                                                            <div className="description__info-wrap">
                                                                <div>

                                                                    <span className="manage-o__badge badge--shipped">Shipped</span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Quantity:

                                                                        <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Total:

                                                                        <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                          {/* <div className="m-order__get">
                                                        <div className="manage-o__header u-s-m-b-30">
                                                            <div className="dash-l-r">
                                                                <div>
                                                                    <div className="manage-o__text-2 u-c-secondary">Order #305423126</div>
                                                                    <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                                </div>
                                                                <div>
                                                                    <div className="dash__link dash__link--brand">

                                                                        <a href="/manage-order">MANAGE</a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="manage-o__description">
                                                            <div className="description__container">
                                                                <div className="description__img-wrap">

                                                                    <img className="u-img-fluid" src="images/product/men/product8.jpg" alt="" /></div>
                                                                <div className="description-title">New Fashion D Nice Elegant</div>
                                                            </div>
                                                            <div className="description__info-wrap">
                                                                <div>

                                                                    <span className="manage-o__badge badge--delivered">Delivered</span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Quantity:

                                                                        <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                                <div>

                                                                    <span className="manage-o__text-2 u-c-silver">Total:

                                                                        <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                          {error && <div>Error: {error}</div>}
                          <div
  key={projectBookings.id}
  className="project-booking-card"
  style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
  }}
>
  <div className="project-booking-header">
    <div className="order-info" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div className="order-number" style={{ fontWeight: 'bold', fontSize: '18px' }}>{`Order #${projectBookings.code}`}</div>
      <span className="status-badge" style={{ backgroundColor: 'green', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}>
          Delivered
        </span>
    </div>
  </div>
  <div className="project-booking-details" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
    <div className="project-booking-image" style={{ marginRight: '20px' }}>
      <img
        className="project-booking-image"
        src={`images/product/men/${projectBookings.projectType}.jpg`}
        alt=""
        style={{ maxWidth: '150px', borderRadius: '8px' }}
      />
    </div>
    <div className="project-booking-info">
      <div className="project-name" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>
        {projectBookings.projectName}
      </div>
      <div className="order-status" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       
        <div className="order-date" style={{ color: '#666' }}>{`Placed on ${projectBookings.timeLine}`}</div>
        
      </div>
      <div className="occupants-number" style={{ fontSize: '16px', color: '#666', marginBottom: '5px' }}>{`Quantity: ${projectBookings.occupantsNumber}`}</div>
      <div className="total-price" style={{ fontSize: '16px', color: '#666' }}>{`Total: $${projectBookings.projectPrice}`}</div>
      <div className="size" style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{`Size: ${projectBookings.size}`}</div>
      <div className="design-style" style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{`Design Style: ${projectBookings.designStyle}`}</div>
      <div className="color-schemes" style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{`Color Schemes: ${projectBookings.colorSchemes}`}</div>
      <div className="intend-use" style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{`Intended Use: ${projectBookings.intendUse}`}</div>
      <div className="occupants-number" style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{`Occupants Number: ${projectBookings.occupantsNumber}`}</div>
    </div>
  </div>
  <div className="manage-link" style={{ marginTop: '20px' }}>
    <a href="/manage-order" style={{ color: 'blue', textDecoration: 'underline' }}>MANAGE</a>
  </div>
</div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 2 ======*/}
      </div>
      {/*====== End - App Content ======*/}
    </div>
  );
};

export default ProjectBooking;

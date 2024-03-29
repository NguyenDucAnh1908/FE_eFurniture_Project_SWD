import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
                            <a className="dash-active" href="/booking">
                              My Booking Design
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
                          Here you can see your booking project.
                        </span>
                        <form className="m-order u-s-m-b-30">
                          <div className="m-order__select-wrapper"></div>
                        </form>
                        <div className="m-order__list">
                          {error && <div>{}</div>}
                          {projectBookings ? (
                            <div
                              key={projectBookings.id}
                              className="project-booking-card"
                              style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "20px",
                                margin: "10px 0",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                backgroundColor: "#f9f9f9",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div className="project-booking-header">
                                <div
                                  className="order-info"
                                  style={{
                                    marginBottom: "10px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div
                                    className="order-number"
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "25px",
                                    }}
                                  >{`Booking Project: #${projectBookings.code}`}</div>
                                  <span
                                    className="status-badge"
                                    style={{
                                      color: "#fff",
                                      padding: "5px 10px",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <button
                                      style={{
                                        backgroundColor: "blue",
                                        color: "white",
                                        fontSize: "18px",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <Link
                                        to={`/design/${projectBookings.id}`}
                                        style={{
                                          color: "white",
                                          textDecoration: "none",
                                        }}
                                      >
                                        MANAGE
                                      </Link>
                                    </button>
                                  </span>
                                </div>
                                <hr style={{ margin: "10px 0" }} />{" "}
                                {/* Add horizontal rule here */}
                              </div>

                              <div className="project-booking-details">
                                <div className="project-booking-image">
                                  <img
                                    className="project-booking-image"
                                    src={`images/product/men/${projectBookings.projectType}.jpg`}
                                    alt=""
                                    style={{
                                      maxWidth: "150px",
                                      borderRadius: "8px",
                                    }}
                                  />
                                </div>
                                <div
                                  className="project-booking-info"
                                  style={{ fontSize: "18px" }}
                                >
                                  <div className="project-name">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "30px",
                                      }}
                                    >
                                      {projectBookings.projectName}
                                    </span>
                                  </div>
                                  <div className="order-status">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      TimeLine:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >{`${projectBookings.timeLine}`}</span>
                                  </div>
                                  <div className="occupants-number">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      OccupantsNumber:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {projectBookings.occupantsNumber}
                                    </span>
                                  </div>

                                  <div className="design-style">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Design Style:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {projectBookings.designStyle}
                                    </span>
                                  </div>
                                  <div className="color-schemes">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Color Schemes:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {projectBookings.colorSchemes}
                                    </span>
                                  </div>
                                  <div className="intend-use">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Intended Use:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {projectBookings.intendUse}
                                    </span>
                                  </div>
                                  {/* <div className="occupants-number">
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Occupants Number:
                                  </span>{" "}
                                  <span
                                    style={{ color: "#666", fontSize: "20px" }}
                                  >
                                    {projectBookings.occupantsNumber}
                                  </span>
                                </div> */}
                                  <div className="size">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Size:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {projectBookings.size}
                                    </span>
                                  </div>
                                  <div className="total-price">
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Price:
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "#666",
                                        fontSize: "20px",
                                      }}
                                    >{`$${projectBookings.projectPrice}`}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{ marginTop: "20px", fontSize: "50px" }}
                            >
                              Empty
                            </div>
                          )}
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

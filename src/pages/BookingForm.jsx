import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    streetAddress: '',
    wardCode: '',
    districtCode: '',
    provinceCode: '',
    wardName: '',
    districtName: '',
    provinceName: '',
    status: '',
    note: '',
    userId: '1'
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
      headers: {
        'token': '05e9c956-d27f-11ee-9414-ce214539f696'
      }
    })
      .then(response => {
        const fetchedProvinces = response.data.data.map(province => ({
          id: province.ProvinceID,
          name: province.ProvinceName
        }));
        setProvinces(fetchedProvinces);
      })
      .catch(error => {
        console.error('Error fetching provinces:', error);
      });
  }, []);
  
  const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    const provinceName = e.target.options[e.target.selectedIndex].text;
    setFormData(prevState => ({
      ...prevState,
      provinceCode: provinceCode,
      provinceName: provinceName,
      districtCode: '',
      districtName: '',
      wardCode: '',
      wardName: ''
    }));

    axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceCode}`, {
      headers: {
        'token': '05e9c956-d27f-11ee-9414-ce214539f696'
      }
    })
      .then(response => {
        const fetchedDistricts = response.data.data.map(district => ({
          id: district.DistrictID,
          name: district.DistrictName
        }));
        setDistricts(fetchedDistricts);
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    const districtName = e.target.options[e.target.selectedIndex].text; // Lấy tên của quận/huyện
    setFormData(prevState => ({
      ...prevState,
      districtCode: districtCode,
      districtName: districtName,
      wardCode: '', // Reset ward when district changes
      wardName: ''  // Reset ward name when district changes
    }));
    axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtCode}`, {
      headers: {
        'token': '05e9c956-d27f-11ee-9414-ce214539f696'
      }
    })
      .then(response => {
        const fetchedWards = response.data.data.map(ward => ({
          id: ward.WardCode,
          name: ward.WardName
        }));
        setWards(fetchedWards);
      })
      .catch(error => {
        console.error('Error fetching wards:', error);
      });
  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    const wardName = e.target.options[e.target.selectedIndex].text; // Lấy tên của phường/xã
    setFormData(prevState => ({
      ...prevState,
      wardCode: wardCode,
      wardName: wardName
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/booking/register-booking', formData);

      console.log('Booking created:', response.data);

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        streetAddress: '',
        wardCode: '',
        districtCode: '',
        provinceCode: '',
        wardName: '',
        districtName: '',
        provinceName: '',
        status: '',
        note: '',
      });
    } catch (error) {
      console.error('Error creating booking:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/*====== Section 1 ======*/}
      <div class="u-s-p-y-60">

        {/*====== Section Content ======*/}
        <div class="section__content">
          <div class="container">
            <div class="breadcrumb">
              <div class="breadcrumb__wrap">
                <ul class="breadcrumb__list">
                  <li class="has-separator">

                    <a href="/">Home</a></li>
                  <li class="is-marked">

                    <a href="/booking-form">Booking</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== End - Section 1 ======*/}

      {/*====== Section 2 ======*/}
      <div class="u-s-p-b-60">
        <div class="section__content">
          <div class="dash">
            <div class="container">
              <div class="row"></div>
              <div class="col-lg-12 col-md-12">
                <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                  <div class="dash__pad-2">
                    <h1 class="dash__h1 u-s-m-b-14">Booking form</h1>

                    <span class="dash__text u-s-m-b-30">We need some information for contacting with you.</span>
                    <form class="dash-address-manipulation" onSubmit={handleSubmit}>
                      <div class="gl-inline">
                        <div class="u-s-m-b-30">

                          <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="address-fname"
                            name="firstName"
                            placeholder="John Doe"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="u-s-m-b-30">

                          <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="address-lname"
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />

                        </div>
                      </div>
                      <div class="gl-inline">
                        <div class="u-s-m-b-30">

                          <label className="gl-label" htmlFor="address-phone">PHONE *</label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="address-phone"
                            name="phoneNumber"
                            placeholder="(+0) 900901904"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                          />

                        </div>
                        <div class="u-s-m-b-30">

                          <label className="gl-label" htmlFor="note">NOTE *</label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="note"
                            name="note"
                            placeholder="abc.."
                            value={formData.note}
                            onChange={handleChange}
                          />

                        </div>
                        <div class="u-s-m-b-30">

                          <label className="gl-label" htmlFor="address-street">STREET ADDRESS *</label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="address-street"
                            name="streetAddress"
                            placeholder="4247 Ashford Drive Virginia"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            required
                          />

                        </div>
                      </div>
                      <div class="gl-inline">
                        <div class="u-s-m-b-30">

                          {/*====== Select Box ======*/}

                          <label className="gl-label" htmlFor="address-country">PROVINCE *</label>
                          <select
                            className="select-box select-box--primary-style"
                            id="provinceCode"
                            name="provinceCode"
                            value={formData.provinceCode}
                            onChange={handleProvinceChange}
                            required
                          >
                            <option value="">Select Province</option>
                            {provinces.map(province => (
                              <option key={province.id} value={province.id}>{province.name}</option>
                            ))}
                          </select>
                          {/* Hidden input to store province name */}
                          <input
                            type="hidden"
                            name="provinceName"
                            value={formData.provinceName}
                          />
                        </div>
                        <div class="u-s-m-b-30">

                          {/*====== Select Box ======*/}

                          <label class="gl-label" for="address-state">DISTRICT *</label>
                          <select
                            className="select-box select-box--primary-style"
                            id="districtCode"
                            name="districtCode"
                            value={formData.districtCode}
                            onChange={handleDistrictChange}
                            required
                          >
                            <option value="">Select District</option>
                            {districts.map(district => (
                              <option key={district.id} value={district.id}>{district.name}</option>
                            ))}
                          </select>
                          {/*====== End - Select Box ======*/}
                          <input
                            type="hidden"
                            name="districtName"
                            value={formData.districtName}
                          />
                        </div>
                      </div>
                      <div class="gl-inline">

                        <div class="u-s-m-b-30">

                          {/*====== Select Box ======*/}

                          <label class="gl-label" for="address-state">WARD *</label>

                          <select
                            className="select-box select-box--primary-style"
                            id="wardCode"
                            name="wardCode"
                            value={formData.wardCode}
                            onChange={handleWardChange}
                            required
                          >
                            <option value="">Select Ward</option>
                            {wards.map(ward => (
                              <option key={ward.id} value={ward.id}>{ward.name}</option>
                            ))}
                          </select>
                          {/*====== End - Select Box ======*/}
                          <input
                            type="hidden"
                            name="wardName"
                            value={formData.wardName}
                          />
                        </div>


                        <div class="u-s-m-b-30">

                          {/* <label class="gl-label" for="address-street"></label> */}
                          {/* <input class="input-text input-text--primary-style" type="text" id="address-postal" placeholder="20006" /> */}

                        </div>


                      </div>

                      <button class="btn btn--e-brand-b-2" type="submit">SAVE</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== End - Section 2 ======*/}
    </div>
  );
};

export default Booking;

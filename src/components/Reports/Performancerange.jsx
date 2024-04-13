import React, { useState } from 'react';
import Select from 'react-select';
import './perform.css';

function Performancerange() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = selectedOption => {
    setSelectedOptions(selectedOption);
  };
  return (
    <>
      <div className="container shadow1 bg-white p-3">
        <div className="row">
          <div className="col-1 text-secondary">Filter</div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Affiliate
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3 col-sm-10 col-lg-3 text-secondary">Offer
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Offer Goal
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
            Chose Offer before select Offer goals. Default value select individual
          </div>
        </div>
      </div>
      <div className="container btncont mt-2">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-4">
            <button type="button" class="btn" disabled data-bs-toggle="button">20:1:2020-20:1:2020</button>
            <button type="button" class="btn btn-info btn-sm m-3 p-2 text-white ">generate report</button>
          </div>
          <div className="col-lg-3  col-md-3 col-sm-4">
            <button type="button" class="btn btn-primary btn-sm m-3 p-2">Download a csv</button>
          </div>
        </div>
      </div>
      <div className="tableoverflow">
        <table class="table table-dark mt-3 ">
          <thead>
            <tr>
              <th scope="col">Affiliate ID</th>
              <th scope="col">Affiliate</th>
              <th scope="col">Offer ID</th>
              <th scope="col">Offer</th>
              <th scope="col">Clicks</th>
              <th scope="col">Conversions</th>
              <th scope="col">Payout</th>
              <th scope="col">Revenue</th>
              <th scope="col">Profit</th>
              <th scope="col">Goals</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}

export default Performancerange
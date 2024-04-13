import React, { useState } from 'react';
import Select from 'react-select';

function ConversionLog() {
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
      <div className="container shadow1">
        <p className="text-primary pt-1">filter</p><hr />

        <div className="row">
          <div className="col-md-4 col-sm-10 col-lg-4">affiliate
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4">offer
          <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
            </div>
          <div className="col-md-3 col-sm-10 col-lg-3">offergoal
          <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />
            </div>

        </div>
        <button type="button" class="btn btn-primary btn-sm m-3 p-2">Search</button>
      </div>
      <div className="tableoverflow">
        <table class="table table mt-3 table-striped">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Affiliate</th>
              <th scope="col">Offer</th>
              <th scope="col">Advertiser</th>
              <th scope="col">Event</th>
              <th scope="col">Status</th>
              <th scope="col">Conversion IP</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Revenue</th>
              <th scope="col">Payout</th>
              <th scope="col">Profit</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>Trackier_Rooter</td>
              <td>Default</td>
              <td>approved	</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>

              <td>0.00</td>
              <td>0.00</td>
              <td>----</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>Trackier_Rooter</td>
              <td>Default</td>
              <td>approved	</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>

              <td>0.00</td>
              <td>0.00</td>
              <td>----</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ConversionLog
import React, { useState } from 'react';
import Select from 'react-select';

import './dashboard.css';

function Dashboard() {
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
      <div className="row">
        <div className="col-md-3 col-sm-11 col-lg-3">
          <div className="container">
            <div className="row shadow1 m-1 mb-4 p-1 bg-white">
              <h6 className='text-primary'>Approve /Deny Task</h6>
              <hr />
              <div className="row ">
                <div className="col-5 p-1 mx-2">Affiliates:<span className="text-primary">19</span></div>
                <div className="col-5 p-1">OfferRequest:<span className="text-primary">67</span></div>

              </div>
              <div className="row ">
                <div className="col-5 p-1 mx-2">Advertisers:<span className="text-primary">1</span></div>

                <div className="col-5 p-1">Offers:<span className="text-primary">9</span></div>

              </div>

            </div>
            <div className="row shadow1 m-1 mb-4 p-2 bg-white">
              <h6 className='text-primary'>Quick links</h6><hr />

              <li className='text-primary'>Add Affiliate</li>
              <li className='text-primary'>Add Advertiser</li>
              <li className='text-primary'>Add Offer</li>
              <li className='text-primary'>Add Employee</li>

            </div>
            <div className="row shadow1 m-1 mb-3 p-2 bg-white">
              <h6 className='text-primary'>Featured offers</h6>
              <hr />
              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
              />            
                <button className='btn btn-sm btn-primary col-3 m-3'>save</button>
            </div>

          </div>
        </div>
        <div className="col-md-9 col-sm-11 col-lg-9">
          <div className="container shadow1 bg-white">
            <div className="row">
              <div className="col-7">
                <p className='text-primary p-2'>Quick overview</p>
              </div>
              <div className="col-5 mt-3 ">
                <button type="button" class="btn btn-sm " disabled data-bs-toggle="button">20:1:2020-20:1:2020</button>

                <button type="button" class="btn btn-primary btn-sm ">Generate report</button></div>
            </div><hr />
            <div className="row">
              <div className="col-4 text-center p-2"><h6 className='text-secondary'>Click</h6><h4>56576</h4></div>
              <div className="col-4 text-center p-2"><h6 className='text-secondary'>Covnversion</h6><h4>56576</h4></div>

              <div className="col-4 text-center p-2"><h6 className='text-secondary'>ppc</h6><h4>$56576</h4></div>

            </div>
            <div className="row">
              <div className="col-4 text-center p-2"><h6 className='text-secondary'>Revenue</h6><h4>$56576</h4></div>
              <div className="col-4 text-center p-2"><h6 className='text-secondary'>Payout</h6><h4>$56576</h4></div>

              <div className="col-4 text-center p-2"><h6 className='text-secondary'>Profit</h6><h4>$56576</h4></div>

            </div>
            <div className="row m-3">
              <h1 className='text-center p-6'>graph</h1>
              <h1 className='text-center p-6'>graph</h1>

              <h1 className='text-center p-6'>graph</h1>
              <h1 className='text-center p-6'>graph</h1>


              <h1 className='text-center p-6'>graph</h1>

            </div>
          </div>
        </div>

      </div>

      <div className="row m-2 mb-4 ">
        <div className="col-md-6 col-sm-11 col-lg-6 shadow1 p-3 ">
          <h6 className='text-primary'>Top Affiliates</h6><hr />
          <div className="tableoverflow">

            <table className="table table-striped">

              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Affiliate</th>
                  <th scope="col">Payout</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Profit</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-sm-11 col-lg-6 shadow1 p-3">
          <h6 className='text-primary'>Top offers</h6><hr />
          <div className="tableoverflow">

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Offer</th>
                  <th scope="col">Payout</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Profit</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row m-2 mb-2">
        <div className="col-md-6 col-sm-11 col-lg-6 shadow1 p-3">
          <h6 className='text-primary'>Top Advertisers</h6><hr />
          <div className="tableoverflow">

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Advertiser</th>
                  <th scope="col">Payout	</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Profit</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-sm-11 col-lg-6 shadow1 p-3">
          <h6 className='text-primary'>Top Countries</h6><hr />
          <div className="tableoverflow">

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Payout</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Demo Affiliate</td>
                  <td>3788.00 INR</td>
                  <td>6629.00 INR</td>
                  <td>2841.00 INR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
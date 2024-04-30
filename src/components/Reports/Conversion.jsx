import React, { useState } from 'react';
import Select from 'react-select';

function Conversion() {
  return (
    <>

      <div className="container shadow1 bg-white" >
        <h6 className='text-primary p-1'>Report Options</h6>
        <hr />
        <div className="row mb-4 ">
          <div className="col-md-1 col-lg-1 col-sm-10">Indecator</div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Affiliate ID
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Country
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Affiliate
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Category
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Advertiser ID
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Advertiser
              </label>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Offer ID
              </label>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Offer
              </label>
            </div>
          </div>
        </div>


        <div className="row mb-4">
          <div className="col-lg-1 col-md-1 col-sm-10">Indecator</div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Goal Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Session IP
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Sub ID 2
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Currency
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Conversion IP
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Sub ID 3
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  payout
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Device
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Sub ID 4
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Revenue
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Operating System
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Sub ID 5
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-10">
            <div className="row">
              <div
                className="form-check">
                <input
                  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label
                  className="form-check-label" for="flexCheckDefault">
                  profit
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Browser
                </label>
              </div>
            </div>

          </div>
          <div className="col-lg-1 col-md-1 col-sm-10">
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Transaction ID
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">

                  Sub ID 1
                </label>
              </div>
            </div>

          </div>
        </div>
        <div className="row m-2 mb-2">
          <div className="col-6 p-3">conversion Type</div>
          <div className="col-4 p-3">
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 ">
            <div className="row">
              <input type="date" name="" id="" className='col-lg-3 col-sm-10 m-1 form-control' />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 m-2">
            <div className="row">
              <button type="button" className="btn btn-primary btn-sm">Generate report</button>
            </div>
          </div>
          <div className="col-lg-2  col-md-2 col-sm-3">
          </div>
          <div className="col-lg-3  col-md-3 col-sm-4">
          </div>
        </div>
      </div>
      <div className="tableoverflow">
        <table class="table table mt-3">
          <thead className='table'>
            <tr>
              <th scope="col">AffiliateID</th>
              <th scope="col">Affiliate</th>
              <th scope="col">OfferID</th>
              <th scope="col">Offer</th>
              <th scope="col">GoalName</th>
              <th scope="col">	SessionIP</th>
              <th scope="col">ConversionIP</th>
              <th scope="col">TransactionID</th>
              <th scope="col">Currency</th>
              <th scope="col">Payout</th>
              <th scope="col">Revenue</th>
              <th scope="col">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18</td>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>	default</td>
              <td>42.110.202.250</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>
              <td>INR</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>	default</td>
              <td>42.110.202.250</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>
              <td>INR</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>	default</td>
              <td>42.110.202.250</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>
              <td>INR</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>	default</td>
              <td>42.110.202.250</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>
              <td>INR</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Abhijeet</td>
              <td>196</td>
              <td>My11circle CPA</td>
              <td>	default</td>
              <td>42.110.202.250</td>
              <td>35.240.15.55</td>
              <td>d148f4d868894a1a500f7217566483</td>
              <td>INR</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Conversion
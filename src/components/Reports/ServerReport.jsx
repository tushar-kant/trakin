import React, { useState } from 'react';
import Select from 'react-select';

function ServerReport() {
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
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '58px', // Adjust the minimum height as per your requirement
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '200px', // Adjust the maximum height of the dropdown menu
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '200px', // Adjust the maximum height of the menu list
    }),
  };
  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Campaign
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              styles={customStyles} // Apply custom styles

            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Affiliate
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              styles={customStyles} // Apply custom styles

            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Advertiser
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              styles={customStyles} // Apply custom styles

            />
          </div>
        </div>
      </div>
      <div className="container bg-white mt-2 p-2">
        <div class="row">
          <div class="col-md-6">
            <p class='text-start text-dark'>Report By</p>
          </div>
          <div className="col-md-3"></div>
          <div class="col-md-2 ">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Select All
              </label>
            </div>

          </div>
          <div className="col-md-1 text-danger">Reset filters</div>
        </div>
        <hr className='m-0 p-1' />
        <div className="row m-3">
          <div className="row m-3">

            <div className="row">
              <div className="form-check col-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Campaign Name
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  CampaignId
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Publisher
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  PublisherID
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Advertiser
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  AdvertiserID
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  clickID
                </label>
              </div>
              <div className="form-check col-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Postback received
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Error
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Reason
                </label>
              </div>
             
            </div>
          
            <div className="row">
              <div className="form-check col-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Time
                </label>
              </div>
              <div className="form-check col-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Note
                </label>
              </div>
             
              
             
            </div>

          </div>
        </div>
        <div className="row ">
          <div className="col-11"></div>
          <div className="col-1">  <button type="button" className='btn btn-primary btn-sm'>submit</button>
          </div>
        </div>

      </div>
      <div className="tableoverflow">
        <table class="table mt-3 ">
          <thead>
            <tr>
              <th scope="col">Offer ID</th>
              <th scope="col">Publisher ID</th>
              <th scope="col">Publisher</th>
              <th scope="col">ClickID</th>
              <th scope="col">Postback Received</th>
              <th scope="col">Advertiser Id</th>
              <th scope="col">Time</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00001-kinTree</td>
              <td>676876</td>
              <td>68677-Mapp</td>
              <td>167</td>
              <td>168</td>
              <td>686745</td>
              <td>9.00</td>

            </tr>
            <tr>
            <td>00001-kinTree</td>
              <td>676876</td>
              <td>68677-Mapp</td>
              <td>167</td>
              <td>168</td>
              <td>686745</td>
              <td>9.00</td>

            </tr>
            <tr>
              <td>00001-kinTree</td>
              <td>676876</td>
              <td>68677-Mapp</td>
              <td>167</td>
              <td>168</td>
              <td>686745</td>
              <td>9.00</td>

            </tr>
            <tr>
              <td>00001-kinTree</td>
              <td>676876</td>
              <td>68677-Mapp</td>
              <td>167</td>
              <td>168</td>
              <td>686745</td>
              <td>9.00</td>

            </tr>
            <tr>
              <td>00001-kinTree</td>
              <td>676876</td>
              <td>68677-Mapp</td>
              <td>167</td>
              <td>168</td>
              <td>686745</td>
              <td>9.00</td>

            </tr>
          </tbody>
        </table>
      </div></>
  )
}

export default ServerReport
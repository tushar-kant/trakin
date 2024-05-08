import React, { useState } from 'react';
import Select from 'react-select';

function ConversionReport() {
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
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Goal Name
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              styles={customStyles} // Apply custom styles

            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Goal
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              styles={customStyles} // Apply custom styles

            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">click Id
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
              <th scope="col">Affiliate ID</th>
              <th scope="col">Affiliate</th>
              <th scope="col">Click ID</th>
              <th scope="col">Response</th>
              <th scope="col">CODE device</th>
              <th scope="col">payout</th>
              <th scope="col">country</th>
              <th scope="col">Approved conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0001-kintree</td>
              <td>68567</td>
              <td>68768-mapp</td>
              <td>1,233</td>
              <td>122</td>
              <td>1</td>
              <td>123</td>
              <td>india</td>
              <td>244</td>

            </tr>
            <tr>
              <td>0001-kintree</td>
              <td>68567</td>
              <td>68768-mapp</td>
              <td>1,233</td>
              <td>122</td>
              <td>1</td>
              <td>123</td>
              <td>india</td>
              <td>244</td>
            </tr>
            <tr>
              <td>0001-kintree</td>
              <td>68567</td>
              <td>68768-mapp</td>
              <td>1,233</td>
              <td>122</td>
              <td>1</td>
              <td>123</td>
              <td>india</td>
              <td>244</td>
            </tr>
            <tr>
              <td>0001-kintree</td>
              <td>68567</td>
              <td>68768-mapp</td>
              <td>1,233</td>
              <td>122</td>
              <td>1</td>
              <td>123</td>
              <td>india</td>
              <td>244</td>
            </tr>
            <tr>
              <td>0001-kintree</td>
              <td>68567</td>
              <td>68768-mapp</td>
              <td>1,233</td>
              <td>122</td>
              <td>1</td>
              <td>123</td>
              <td>india</td>
              <td>244</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ConversionReport
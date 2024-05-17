import React, { useState } from 'react';
import Select from 'react-select';

function PostbackReport() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];
  const optionCam = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
  ];
  const optionsAff = [
    { value: 'X', label: 'X' },
    { value: 'Y', label: 'Y' },
    { value: 'Z', label: 'Z' },
  ];
  const optionsAdv = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const data = [
    { "Campaign Name": "A","Campaign ID":"1", "Affiliate": "X","Affiliate ID": "1", "Advertiser": "1","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "B","Campaign ID":"1", "Affiliate": "Y","Affiliate ID": "1", "Advertiser": "2","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "C","Campaign ID":"1", "Affiliate": "Z","Affiliate ID": "1", "Advertiser": "3","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "D","Campaign ID":"1", "Affiliate": "X","Affiliate ID": "1", "Advertiser": "4","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "A","Campaign ID":"1", "Affiliate": "Y","Affiliate ID": "1", "Advertiser": "2","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "B","Campaign ID":"1", "Affiliate": "X","Affiliate ID": "1", "Advertiser": "1","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "C","Campaign ID":"1", "Affiliate": "Z","Affiliate ID": "1", "Advertiser": "3","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "D","Campaign ID":"1", "Affiliate": "Y","Affiliate ID": "1", "Advertiser": "4","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "A","Campaign ID":"1", "Affiliate": "Z","Affiliate ID": "1", "Advertiser": "1","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "B","Campaign ID":"1", "Affiliate": "Y","Affiliate ID": "1", "Advertiser": "2","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "C","Campaign ID":"1", "Affiliate": "X","Affiliate ID": "1", "Advertiser": "3","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "D","Campaign ID":"1", "Affiliate": "Z","Affiliate ID": "1", "Advertiser": "4","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },
    { "Campaign Name": "A","Campaign ID":"1", "Affiliate": "Y","Affiliate ID": "1", "Advertiser": "2","Advertiser ID": "1","Click Date": "12/12/2021", "Month": "Dec", "Year": "2021", "Aff Sub 2": "sub2", "Aff Sub 3": "sub3", "Aff Sub 4": "sub4", "Aff Sub 5": "sub5","Click Time": "12:00", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1","Revenue": "100", "Payout": "50", "Profit/Margin": "50", "Goal ID": "1", "Goal Name": "goal1", "Postback IP": "1","Postback url": "url1" },


  

  ];
  const optionsCheckBox = [
    { value: 'Campaign Name', label: 'Campaign Name' },
    { value: 'Campaign ID', label: 'Campaign ID' },
    { value: 'Affiliate', label: 'Affiliate' },
    { value: 'Affiliate ID', label: 'Affiliate ID' },
    { value: 'Advertiser', label: 'Advertiser' },
    { value: 'Advertiser ID', label: 'Advertiser ID' },
    { value: 'Click Date', label: 'Click Date' },
    { value: 'Month', label: 'Month' },
    { value: 'Year', label: 'Year' },
    { value: 'Aff Sub 2', label: 'Aff Sub 2' },
    { value: 'Aff Sub 3', label: 'Aff Sub 3' },
    { value: 'Aff Sub 4', label: 'Aff Sub 4' },
    { value: 'Aff Sub 5', label: 'Aff Sub 5' },
    { value: 'Click Time', label: 'Click Time' },
    { value: 'Pending Conversion', label: 'Pending Conversion' },
    { value: 'Rejected Conversion', label: 'Rejected Conversion' },
    { value: 'Gross Conversion', label: 'Gross Conversion' },
    { value: 'Unique Clicks', label: 'Unique Clicks' },
    { value: 'Gross Clicks', label: 'Gross Clicks' },
    { value: 'Revenue', label: 'Revenue' },
    { value: 'Payout', label: 'Payout' },
    { value: 'Profit/Margin', label: 'Profit/Margin' },

    { value: 'Goal ID', label: 'Goal ID' },
    { value: 'Goal Name', label: 'Goal Name' },
    { value: 'Postback IP', label: 'Postback IP' },

    { value: 'Postback url', label: 'Postback url' },

  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCamOptions, setSelectedCamOptions] = useState([]);
  const [selectedAffOptions, setSelectedAffOptions] = useState([]);
  const [selectedAdvOptions, setSelectedAdvOptions] = useState([]);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleChange = selectedOption => {
    setSelectedOptions(selectedOption);
  };
  const handleCheckboxChange = (option) => {
    setSelectedCheckboxes(prevSelected => {
      const isOptionSelected = prevSelected.some(item => item.value === option.value);
      if (isOptionSelected) {
        return prevSelected.filter(item => item.value !== option.value);
      } else {
        return [...prevSelected, option];
      }
    });
  };
  const handleSelectAllChange = () => {
    if (selectedCheckboxes.length === optionsCheckBox.length) {
      // If all checkboxes are already selected, deselect all
      setSelectedCheckboxes([]);
    } else {
      // If not all are selected, select all
      setSelectedCheckboxes(optionsCheckBox);
    }
  };
  const resetFilters = () => {
    // Reset selected options
    setSelectedOptions([]);
    setSelectedCamOptions([]);
    setSelectedAffOptions([]);
    setSelectedAdvOptions([]);

    // Reset selected checkboxes
    setSelectedCheckboxes([]);
  };


  const filterData = () => {
    let filteredData = [...data];

    // Filter data based on selected options (Campaign, Affiliate, and Advertiser)
    if (selectedCamOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedCamOptions.some(option => row['Campaign Name'] === option.label));
    }
    if (selectedAffOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedAffOptions.some(option => row['Affiliate'] === option.label));
    }
    if (selectedAdvOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedAdvOptions.some(option => row['Advertiser'] === option.label));
    }

    // Apply checkbox filters
    if (selectedCheckboxes.length === 0) return filteredData;

    return filteredData.map(row => {
      const filteredRow = {};
      selectedCheckboxes.forEach(option => {
        filteredRow[option.value] = row[option.value];
      });
      return filteredRow;
    });
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
              options={optionCam}
              value={selectedCamOptions}
              onChange={setSelectedCamOptions}
              styles={customStyles}
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Affiliate
            <Select
              isMulti
              options={optionsAff}
              value={selectedAffOptions}
              onChange={setSelectedAffOptions}
              styles={customStyles}
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Advertiser
            <Select
              isMulti
              options={optionsAdv}
              value={selectedAdvOptions}
              onChange={setSelectedAdvOptions}
              styles={customStyles}
            />
          </div>
        </div>
      </div>
      <div className="container bg-white mt-2 p-2">
        <div class="row">
          <div class="col-md-6">
            <p class='text-start text-dark'>Report By</p>
          </div>
          <div className="col-md-2"></div>
          <div class="col-md-2 ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="selectAllCheckbox"
                checked={selectedCheckboxes.length === optionsCheckBox.length}
                onChange={handleSelectAllChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Select All
              </label>
            </div>

          </div>
          <div className="col-md-2 text-danger" onClick={resetFilters}><i class="bi bi-arrow-counterclockwise"></i>Reset filters</div>
        </div>
        <hr className='m-0 p-1' />
        <div className="row m-3">
          <div className="row">
            {optionsCheckBox.map((option, index) => (
              <div key={index} className="form-check col-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""

                  id={option.value}
                  checked={selectedCheckboxes.some(item => item.value === option.value)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label className="form-check-label" htmlFor={option.value}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>


        </div>
        {/* <div className="row ">
                        <div className="col-11"></div>
                        <div className="col-1">  <button type="button" className='btn btn-primary btn-sm'>submit</button>
                        </div>
                    </div> */}

      </div>
      <div className="tableoverflow">

        <table className="table mt-3">
          <thead>
            <tr >
              {selectedCheckboxes.map((option, index) => (
                <th key={index} scope="col">{option.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterData(data).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {selectedCheckboxes.map((option, colIndex) => (
                  <td key={colIndex}>{row[option.value]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PostbackReport
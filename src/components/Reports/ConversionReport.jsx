import React, { useState } from 'react';
import Select from 'react-select';

function ConversionReport() {
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
const optionsGoalName = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
];

const optionsGoal = [
    { value: 'X', label: 'X' },
    { value: 'Y', label: 'Y' },
    { value: 'Z', label: 'Z' },
];

const optionsClickId = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];

const data = [
  { "Campaign Name": "A", "Affiliate": "X", "Advertiser": "1","Goal":"X", "Goal Name": "A","Click Id":"1", "Offer Name": "Offer 1", "Offer ID": "1", "Affiliate ID": "1", "Advertiser ID": "1", "Click IP": "1", "Server IP": "1", "Aff Sub 2": "1", "Aff Sub 3": "1", "Aff Sub 4": "1", "Aff Sub 5": "1", "Response Code": "1", "Status": "1", "Device": "1", "Region": "1", "City": "1", "Click to con time": "1", "Browser": "1", "Install to Event Time": "1", "Payout": "1", "Revenue": "1", "Profit": "1", "Postback Trigger Time": "1", "Reason": "1", "Language": "1", "Os Version": "1", "Os Name": "1", "User Agent": "1", "Checkbox to Trigger the Campaign": "1", "Approved": "1", "Decline": "1", "Reject": "1", "Pending": "1", "Country": "1" },
  { "Campaign Name": "B", "Affiliate": "Y", "Advertiser": "2","Goal":"Y", "Goal Name": "B","Click Id":"2", "Offer Name": "Offer 2", "Offer ID": "2", "Affiliate ID": "2", "Advertiser ID": "2", "Click IP": "2", "Server IP": "2", "Aff Sub 2": "2", "Aff Sub 3": "2", "Aff Sub 4": "2", "Aff Sub 5": "2", "Response Code": "2", "Status": "2", "Device": "2", "Region": "2", "City": "2", "Click to con time": "2", "Browser": "2", "Install to Event Time": "2", "Payout": "2", "Revenue": "2", "Profit": "2", "Postback Trigger Time": "2", "Reason": "2", "Language": "2", "Os Version": "2", "Os Name": "2", "User Agent": "2", "Checkbox to Trigger the Campaign": "2", "Approved": "2", "Decline": "2", "Reject": "2", "Pending": "2", "Country": "2" },
  { "Campaign Name": "C", "Affiliate": "Z", "Advertiser": "3","Goal":"Z", "Goal Name": "C","Click Id":"3", "Offer Name": "Offer 3", "Offer ID": "3", "Affiliate ID": "3", "Advertiser ID": "3", "Click IP": "3", "Server IP": "3", "Aff Sub 2": "3", "Aff Sub 3": "3", "Aff Sub 4": "3", "Aff Sub 5": "3", "Response Code": "3", "Status": "3", "Device": "3", "Region": "3", "City": "3", "Click to con time": "3", "Browser": "3", "Install to Event Time": "3", "Payout": "3", "Revenue": "3", "Profit": "3", "Postback Trigger Time": "3", "Reason": "3", "Language": "3", "Os Version": "3", "Os Name": "3", "User Agent": "3", "Checkbox to Trigger the Campaign": "3", "Approved": "3", "Decline": "3", "Reject": "3", "Pending": "3", "Country": "3" },
  { "Campaign Name": "D", "Affiliate": "X", "Advertiser": "4","Goal":"X", "Goal Name": "D","Click Id":"4", "Offer Name": "Offer 4", "Offer ID": "4", "Affiliate ID": "4", "Advertiser ID": "4", "Click IP": "4", "Server IP": "4", "Aff Sub 2": "4", "Aff Sub 3": "4", "Aff Sub 4": "4", "Aff Sub 5": "4", "Response Code": "4", "Status": "4", "Device": "4", "Region": "4", "City": "4", "Click to con time": "4", "Browser": "4", "Install to Event Time": "4", "Payout": "4", "Revenue": "4", "Profit": "4", "Postback Trigger Time": "4", "Reason": "4", "Language": "4", "Os Version": "4", "Os Name": "4", "User Agent": "4", "Checkbox to Trigger the Campaign": "4", "Approved": "4", "Decline": "4", "Reject": "4", "Pending": "4", "Country": "4" },
  




];
const optionsCheckBox = [
  { value: 'Offer Name', label: 'Offer Name' },
  { value: 'Offer ID', label: 'Offer ID' },
  { value: 'Affiliate', label: 'Affiliate' },
  { value: 'Affiliate ID', label: 'Affiliate ID' },
  { value: 'Advertiser', label: 'Advertiser' },
  { value: 'Advertiser ID', label: 'Advertiser ID' },
  { value: 'Click IP', label: 'Click IP' },
  { value: 'Server IP', label: 'Server IP' },
  { value: 'Goal Name', label: 'Goal Name' },
  { value: 'Aff Sub 2', label: 'Aff Sub 2' },
  { value: 'Aff Sub 3', label: 'Aff Sub 3' },
  { value: 'Aff Sub 4', label: 'Aff Sub 4' },
  { value: 'Aff Sub 5', label: 'Aff Sub 5' },
  { value: 'Response Code', label: 'Response Code' },
  { value: 'Status', label: 'Status' },
  { value: 'Click ID', label: 'Click ID' },
  { value: 'Device', label: 'Device' },
  { value: 'Region', label: 'Region' },
  { value: 'City', label: 'City' },
  { value: 'Click to con time', label: 'Click to con time' },
  { value: 'Browser', label: 'Browser' },
  { value: 'Install to Event Time', label: 'Install to Event Time' },
  { value: 'Payout', label: 'Payout' },
  { value: 'Revenue', label: 'Revenue' },
  { value: 'Profit', label: 'Profit' },
  { value: 'Postback Trigger Time', label: 'Postback Trigger Time' },
  { value: 'Reason', label: 'Reason' },
  { value: 'Language', label: 'Language' },
  { value: 'Os Version', label: 'Os Version' },
  { value: 'Os Name', label: 'Os Name' },
  { value: 'User Agent', label: 'User Agent' },
  { value: 'Checkbox to Trigger the Campaign', label: 'Checkbox to Trigger the Campaign' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Decline', label: 'Decline' },
  { value: 'Reject', label: 'Reject' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Country', label: 'Country' },


];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCamOptions, setSelectedCamOptions] = useState([]);
  const [selectedAffOptions, setSelectedAffOptions] = useState([]);
  const [selectedAdvOptions, setSelectedAdvOptions] = useState([]);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedGoalNameOptions, setSelectedGoalNameOptions] = useState([]);
const [selectedGoalOptions, setSelectedGoalOptions] = useState([]);
const [selectedClickIdOptions, setSelectedClickIdOptions] = useState([]);

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
  setSelectedGoalNameOptions([]);
  setSelectedGoalOptions([]);
  setSelectedClickIdOptions([]);

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

  // Filter data based on selected options (Goal Name, Goal, and Click Id)
  if (selectedGoalNameOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedGoalNameOptions.some(option => row['Goal Name'] === option.label));
  }
  if (selectedGoalOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedGoalOptions.some(option => row['Goal'] === option.label));
  }
  if (selectedClickIdOptions.length > 0) {
      filteredData = filteredData.filter(row => selectedClickIdOptions.some(option => row['Click Id'] === option.label));
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
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Goal Name
          <Select
                isMulti
                options={optionsGoalName}
                value={selectedGoalNameOptions}
                onChange={setSelectedGoalNameOptions}
                styles={customStyles} // Apply custom styles
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">Goal
          <Select
                isMulti
                options={optionsGoal}
                value={selectedGoalOptions}
                onChange={setSelectedGoalOptions}
                styles={customStyles} // Apply custom styles
            />
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 text-secondary">click Id
          <Select
                isMulti
                options={optionsClickId}
                value={selectedClickIdOptions}
                onChange={setSelectedClickIdOptions}
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

export default ConversionReport
import React, { useState } from 'react';
import Select from 'react-select';

function ServerReport() {
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
    { "Campaign Name": "A", "Campaign ID": "1", "Affiliate": "X", "Advertiser": "1", "Publisher": "X", "Publisher ID": "1","Advertiser ID": "1", "Click ID": "1", "Postback Received": "1", "Error": "1", "Reason": "1", "Time": "1", "Note": "1" },
    { "Campaign Name": "B", "Campaign ID": "2", "Affiliate": "Y", "Advertiser": "2", "Publisher": "Y", "Publisher ID": "2","Advertiser ID": "2", "Click ID": "2", "Postback Received": "2", "Error": "2", "Reason": "2", "Time": "2", "Note": "2" },
    { "Campaign Name": "C", "Campaign ID": "3", "Affiliate": "Z", "Advertiser": "3", "Publisher": "Z", "Publisher ID": "3","Advertiser ID": "3", "Click ID": "3", "Postback Received": "3", "Error": "3", "Reason": "3", "Time": "3", "Note": "3" },
    { "Campaign Name": "D", "Campaign ID": "4", "Affiliate": "X", "Advertiser": "4", "Publisher": "X", "Publisher ID": "4","Advertiser ID": "4", "Click ID": "4", "Postback Received": "4", "Error": "4", "Reason": "4", "Time": "4", "Note": "4" },
    { "Campaign Name": "A", "Campaign ID": "5", "Affiliate": "Y", "Advertiser": "1", "Publisher": "Y", "Publisher ID": "5","Advertiser ID": "1", "Click ID": "5", "Postback Received": "5", "Error": "5", "Reason": "5", "Time": "5", "Note": "5" },
    { "Campaign Name": "B", "Campaign ID": "6", "Affiliate": "Z", "Advertiser": "2", "Publisher": "Z", "Publisher ID": "6","Advertiser ID": "2", "Click ID": "6", "Postback Received": "6", "Error": "6", "Reason": "6", "Time": "6", "Note": "6" },
    { "Campaign Name": "C", "Campaign ID": "7", "Affiliate": "X", "Advertiser": "3", "Publisher": "X", "Publisher ID": "7","Advertiser ID": "3", "Click ID": "7", "Postback Received": "7", "Error": "7", "Reason": "7", "Time": "7", "Note": "7" },
    { "Campaign Name": "D", "Campaign ID": "8", "Affiliate": "Y", "Advertiser": "4", "Publisher": "Y", "Publisher ID": "8","Advertiser ID": "4", "Click ID": "8", "Postback Received": "8", "Error": "8", "Reason": "8", "Time": "8", "Note": "8" },
    { "Campaign Name": "A", "Campaign ID": "9", "Affiliate": "Z", "Advertiser": "1", "Publisher": "Z", "Publisher ID": "9","Advertiser ID": "1", "Click ID": "9", "Postback Received": "9", "Error": "9", "Reason": "9", "Time": "9", "Note": "9" },
    { "Campaign Name": "B", "Campaign ID": "10", "Affiliate": "X", "Advertiser": "2", "Publisher": "X", "Publisher ID": "10","Advertiser ID": "2", "Click ID": "10", "Postback Received": "10", "Error": "10", "Reason": "10", "Time": "10", "Note": "10" },
   
   



  ];
  const optionsCheckBox = [
    { value: 'Campaign Name', label: 'Campaign Name' },
    { value: 'Campaign ID', label: 'Campaign ID' },
    { value: 'Publisher', label: 'Publisher' },
    { value: 'Publisher ID', label: 'Publisher ID' },
    { value: 'Advertiser', label: 'Advertiser' },
    { value: 'Advertiser ID', label: 'Advertiser ID' },
    { value: 'Click ID', label: 'Click ID' },
    { value: 'Postback Received', label: 'Postback Received' },
    { value: 'Error', label: 'Error' },
    { value: 'Reason', label: 'Reason' },
    { value: 'Time', label: 'Time' },
    { value: 'Note', label: 'Note' },
 

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

export default ServerReport
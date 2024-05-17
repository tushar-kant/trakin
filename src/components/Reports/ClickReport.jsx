import React, { useState } from 'react';
import Select from 'react-select';

function ClickReport() {
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
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];
  const optionsCheckBox = [
    { value: 'Campaign Name', label: 'Campaign Name' },
    { value: 'Campaign ID', label: 'Campaign ID' },
    { value: 'Affiliate', label: 'Affiliate' },
    { value: 'Affiliate ID', label: 'Affiliate ID' },
    { value: 'Advertiser', label: 'Advertiser' },
    { value: 'Advertiser ID', label: 'Advertiser ID' },
    { value: 'Offer', label: 'Offer' },
    { value: 'Offer ID', label: 'Offer ID' },
    { value: 'Transaction ID', label: 'Transaction ID' },
    { value: 'Aff Sub', label: 'Aff Sub' },
    { value: 'Aff Sub 2', label: 'Aff Sub 2' },
    { value: 'Aff Sub 3', label: 'Aff Sub 3' },
    { value: 'Aff Sub 4', label: 'Aff Sub 4' },
    { value: 'Aff Sub 5', label: 'Aff Sub 5' },
    { value: 'User Agent', label: 'User Agent' },
    { value: 'Device Name', label: 'Device Name' },
    { value: 'Device Type', label: 'Device Type' },
    { value: 'Os Name', label: 'Os Name' },
    { value: 'Os Version', label: 'Os Version' },
    { value: 'Browser Name', label: 'Browser Name' },
    { value: 'Browser Version', label: 'Browser Version' },
    { value: 'Ip Address', label: 'Ip Address' },
    { value: 'Country', label: 'Country' },
    { value: 'State', label: 'State' },
    { value: 'City', label: 'City' },
    { value: 'lsp', label: 'lsp' },
    { value: 'http Refer', label: 'http Refer' },



  ];
  const data = [
    { "Campaign Name": "A", "Affiliate": "X", "Advertiser": "1", "Campaign ID": "1", "Affiliate ID": "1", "Advertiser ID": "1", "Offer": "Offer", "Offer ID": "1", "Transaction ID": "1", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "B", "Affiliate": "Y", "Advertiser": "2", "Campaign ID": "2", "Affiliate ID": "2", "Advertiser ID": "2", "Offer": "Offer", "Offer ID": "2", "Transaction ID": "2", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "C", "Affiliate": "Z", "Advertiser": "3", "Campaign ID": "3", "Affiliate ID": "3", "Advertiser ID": "3", "Offer": "Offer", "Offer ID": "3", "Transaction ID": "3", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "D", "Affiliate": "X", "Advertiser": "4", "Campaign ID": "4", "Affiliate ID": "4", "Advertiser ID": "4", "Offer": "Offer", "Offer ID": "4", "Transaction ID": "4", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "A", "Affiliate": "Y", "Advertiser": "1", "Campaign ID": "1", "Affiliate ID": "1", "Advertiser ID": "1", "Offer": "Offer", "Offer ID": "1", "Transaction ID": "1", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "B", "Affiliate": "Z", "Advertiser": "2", "Campaign ID": "2", "Affiliate ID": "2", "Advertiser ID": "2", "Offer": "Offer", "Offer ID": "2", "Transaction ID": "2", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },
    { "Campaign Name": "C", "Affiliate": "X", "Advertiser": "3", "Campaign ID": "3", "Affiliate ID": "3", "Advertiser ID": "3", "Offer": "Offer", "Offer ID": "3", "Transaction ID": "3", "Aff Sub": "Aff Sub", "Aff Sub 2": "Aff Sub 2", "Aff Sub 3": "Aff Sub 3", "Aff Sub 4": "Aff Sub 4", "Aff Sub 5": "Aff Sub 5", "User Agent": "User Agent", "Device Name": "Device Name", "Device Type": "Device Type", "Os Name": "Os Name", "Os Version": "Os Version", "Browser Name": "Browser Name", "Browser Version": "Browser Version", "Ip Address": "Ip Address", "Country": "Country", "State": "State", "City": "City", "lsp": "lsp", "http Refer": "http Refer" },

 



  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCamOptions, setSelectedCamOptions] = useState([]);
  const [selectedAffOptions, setSelectedAffOptions] = useState([]);
  const [selectedAdvOptions, setSelectedAdvOptions] = useState([]);


  // const handleChange = selectedOption => {
  //   setSelectedOptions(selectedOption);
  // };
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

  const handleChange = selectedOption => {
    setSelectedOptions(selectedOption);
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

export default ClickReport
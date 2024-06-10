import React, { useState } from 'react';
import Select from 'react-select';
// import './perform.css';
function CampaignReport() {
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
        { "Campaign Name": "A", "Campaign ID": "1", "Affiliate": "X", "Affiliate ID": "1", "Advertiser": "1", "Advertiser ID": "1", "Date": "1", "Month": "1", "Year": "1", "Hour": "1", "Aff Sub 2": "1", "Aff Sub 3": "1", "Aff Sub 4": "1", "Aff Sub 5": "1", "Approved Conversion": "1", "Pending Conversion": "1", "Rejected Conversion": "1", "Gross Conversion": "1", "Unique Clicks": "1", "Gross Clicks": "1", "Revenue": "1", "Payout": "1", "Profit/Margin": "1", "Goal ID": "1", "Goal Name": "1", "Non Zero Conversion": "1", "CR": "1" },
        { "Campaign Name": "B", "Campaign ID": "2", "Affiliate": "Y", "Affiliate ID": "2", "Advertiser": "2", "Advertiser ID": "2", "Date": "2", "Month": "2", "Year": "2", "Hour": "2", "Aff Sub 2": "2", "Aff Sub 3": "2", "Aff Sub 4": "2", "Aff Sub 5": "2", "Approved Conversion": "2", "Pending Conversion": "2", "Rejected Conversion": "2", "Gross Conversion": "2", "Unique Clicks": "2", "Gross Clicks": "2", "Revenue": "2", "Payout": "2", "Profit/Margin": "2", "Goal ID": "2", "Goal Name": "2", "Non Zero Conversion": "2", "CR": "2" },
        { "Campaign Name": "C", "Campaign ID": "3", "Affiliate": "Z", "Affiliate ID": "3", "Advertiser": "3", "Advertiser ID": "3", "Date": "3", "Month": "3", "Year": "3", "Hour": "3", "Aff Sub 2": "3", "Aff Sub 3": "3", "Aff Sub 4": "3", "Aff Sub 5": "3", "Approved Conversion": "3", "Pending Conversion": "3", "Rejected Conversion": "3", "Gross Conversion": "3", "Unique Clicks": "3", "Gross Clicks": "3", "Revenue": "3", "Payout": "3", "Profit/Margin": "3", "Goal ID": "3", "Goal Name": "3", "Non Zero Conversion": "3", "CR": "3" },
        { "Campaign Name": "D", "Campaign ID": "4", "Affiliate": "X", "Affiliate ID": "4", "Advertiser": "4", "Advertiser ID": "4", "Date": "4", "Month": "4", "Year": "4", "Hour": "4", "Aff Sub 2": "4", "Aff Sub 3": "4", "Aff Sub 4": "4", "Aff Sub 5": "4", "Approved Conversion": "4", "Pending Conversion": "4", "Rejected Conversion": "4", "Gross Conversion": "4", "Unique Clicks": "4", "Gross Clicks": "4", "Revenue": "4", "Payout": "4", "Profit/Margin": "4", "Goal ID": "4", "Goal Name": "4", "Non Zero Conversion": "4", "CR": "4" },
        { "Campaign Name": "A", "Campaign ID": "5", "Affiliate": "Y", "Affiliate ID": "5", "Advertiser": "1", "Advertiser ID": "5", "Date": "5", "Month": "5", "Year": "5", "Hour": "5", "Aff Sub 2": "5", "Aff Sub 3": "5", "Aff Sub 4": "5", "Aff Sub 5": "5", "Approved Conversion": "5", "Pending Conversion": "5", "Rejected Conversion": "5", "Gross Conversion": "5", "Unique Clicks": "5", "Gross Clicks": "5", "Revenue": "5", "Payout": "5", "Profit/Margin": "5", "Goal ID": "5", "Goal Name": "5", "Non Zero Conversion": "5", "CR": "5" },
     
    ];
    const optionsCheckBox = [
        { value: 'Campaign Name', label: 'Campaign Name' },
        { value: 'Campaign ID', label: 'Campaign ID' },
        { value: 'Affiliate', label: 'Affiliate' },
        { value: 'Affiliate ID', label: 'Affiliate ID' },
        { value: 'Advertiser', label: 'Advertiser' },
        { value: 'Advertiser ID', label: 'Advertiser ID' },
        { value: 'Date', label: 'Date'},
        { value: 'Month', label: 'Month'},
        { value: 'Year', label: 'Year'},
        { value: 'Hour', label: 'Hour'},
        { value: 'Aff Sub 2', label: 'Aff Sub 2' },
        { value: 'Aff Sub 3', label: 'Aff Sub 3' },
        { value: 'Aff Sub 4', label: 'Aff Sub 4' },
        { value: 'Aff Sub 5', label: 'Aff Sub 5' },
        { value: 'Approved Conversion', label: 'Approved Conversion' },
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
        { value: 'Non Zero Conversion', label: 'Non Zero Conversion' },
        { value: 'CR', label: 'CR' },
       

    ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCamOptions, setSelectedCamOptions] = useState([]);
    const [selectedAffOptions, setSelectedAffOptions] = useState([]);
    const [selectedAdvOptions, setSelectedAdvOptions] = useState([]);

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    // const handleCheckboxChange = (option) => {
    //     setSelectedCheckboxes(prevSelected => {
    //         if (prevSelected.includes(option)) {
    //             return prevSelected.filter(item => item !== option);
    //         } else {
    //             return [...prevSelected, option];
    //         }
    //     });
    // };
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
        </>
    )
}

export default CampaignReport
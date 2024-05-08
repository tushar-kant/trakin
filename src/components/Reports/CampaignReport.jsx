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
        { "Campaign Name": "A", "Affiliate": "Y", "Advertiser": "2", "Goal Name": "A", "Currency": 101, "payout": "X", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "B", "Affiliate": "X", "Advertiser": "1", "Goal Name": "B", "Currency": 102, "payout": "Y", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "C", "Affiliate": "Z", "Advertiser": "3", "Goal Name": "C", "Currency": 103, "payout": "Z", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "D", "Affiliate": "X", "Advertiser": "3", "Goal Name": "D", "Currency": 104, "payout": "X", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "A", "Affiliate": "Y", "Advertiser": "2", "Goal Name": "A", "Currency": 105, "payout": "Y", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "B", "Affiliate": "X", "Advertiser": "1", "Goal Name": "B", "Currency": 106, "payout": "Z", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "C", "Affiliate": "Z", "Advertiser": "3", "Goal Name": "C", "Currency": 107, "payout": "X", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "D", "Affiliate": "X", "Advertiser": "3", "Goal Name": "D", "Currency": 108, "payout": "Y", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },
        { "Campaign Name": "A", "Affiliate": "Y", "Advertiser": "2", "Goal Name": "A", "Currency": 109, "payout": "Z", "Revenue": "2024-05-10", "Profit": "1", "Transaction ID": "1", "Session IP": "1", "Conversion IP": "1", "Device": "1", "Operating System": "1", "Browser": "1", "sub ID 2": "1", "sub ID 3": "1", "sub ID 4": "1", "sub ID 5": "1", "sub ID 1": "1" },

    ];
    const optionsCheckBox = [
        { value: 'Goal Name', label: 'Goal Name' },
        { value: 'Currency', label: 'Currency' },
        { value: 'payout', label: 'payout' },
        { value: 'Revenue', label: 'Revenue' },
        { value: 'Profit', label: 'Profit' },
        { value: 'Transaction ID', label: 'Transaction ID' },
        { value: 'Session IP', label: 'Session IP' },
        { value: 'Conversion IP', label: 'Conversion IP' },
        { value: 'Device', label: 'Device' },
        { value: 'Operating System', label: 'Operating System' },
        { value: 'Browser', label: 'Browser' },
        { value: 'sub ID 2', label: 'sub ID 2' },
        { value: 'sub ID 3', label: 'sub ID 3' },
        { value: 'sub ID 4', label: 'sub ID 4' },
        { value: 'sub ID 5', label: 'sub ID 5' },
        { value: 'sub ID 1', label: 'sub ID 1' },

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
                            <tr>
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
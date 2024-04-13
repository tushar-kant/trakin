import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header'
import SideBar from './Sidebar/SideBar';
import Dashboard from './Dashboard/Dashboard';
import Report from './Dashboard/Report';
import './main.css';

import Performance from './Reports/Performance';
import Performancerange from './Reports/Performancerange';
import Conversion from './Reports/Conversion';
import Clicklog from './Reports/Clicklog';
import ConversionLog from './Reports/ConversionLog';


import Createoffer from './Offers/Createoffer';
import Manageoffer from './Offers/Manageoffer';
import Offerapplication from './Offers/Offerapplication';
import Offercategory from './Offers/Offercategory';



import Addaffiliate from './Affiliates/Addaffiliate';
import Manageaffiliate from './Affiliates/Manageaffiliate';
import Paymentaffiliate from './Affiliates/Paymentaffiliate';
import Postback from './Affiliates/Postback';



import Addadvertiser from './Advertiser/Addadvertiser';
import Manageadvertiser from './Advertiser/Manageadvertiser';



import Addemployee from './Employees/Addemployee';
import Manageemployee from './Employees/Manageemployee';


import Mailroom from './Mailroom/Mailroom';

import Companypreference from './Preference/Companypreference';
import Emailpreference from './Preference/Emailpreference';
import Paymentmethodspreference from './Preference/Paymentmethodspreference';
import Signupquestion from './Preference/Signupquestion';
import Profile from './Profile/Profile';


function Main() {
    return (
        <>
            <Header />
            <SideBar />
            
            <main id='main' className='main bgmain '>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/mail" element={<Mailroom />} />
                    <Route path="/report/*" element={<UserRoutes />} />
                    <Route path="/offer/*" element={<OfferRoutes />} />
                    <Route path="/affiliate/*" element={<AffiliateRoutes />} />
                    <Route path="/adv/*" element={<AdvRoutes />} />
                    <Route path="/emp/*" element={<EmpRoutes />} />
                    <Route path="/preference/*" element={<PreferenceRoutes />} />
                    <Route path="/profile" element={<Profile />} />

                </Routes>

            </main>
        </>
    )
}
function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Performance />} />
            <Route path="/performancerange" element={<Performancerange />} />
            <Route path="/conversion" element={<Conversion />} />
            <Route path="/conversionLog" element={<ConversionLog />} />
            <Route path="/clicklog" element={<Clicklog />} />




        </Routes>
    );
}
function OfferRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Createoffer />} />
            <Route path="/offermanage" element={<Manageoffer />} />
            <Route path="/offercategory" element={<Offercategory />} />
            <Route path="/offerapplication" element={<Offerapplication />} />


        </Routes>
    );
}
function AdvRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Addadvertiser />} />
            <Route path="/manage" element={<Manageadvertiser />} />
        </Routes>
    );
}
function PreferenceRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Companypreference />} />
            <Route path="/email" element={<Emailpreference />} />
            <Route path="/paymentmethod" element={<Paymentmethodspreference />} />

            <Route path="/signupquestion" element={<Signupquestion />} />



        </Routes>
    );
}
function EmpRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Addemployee />} />
            <Route path="/manage" element={<Manageemployee />} />
        </Routes>
    );
}
function AffiliateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Addaffiliate />} />
            <Route path="/manage" element={<Manageaffiliate />} />
            <Route path="/postback" element={<Postback />} />

            <Route path="/payment" element={<Paymentaffiliate />} />

        </Routes>
    );
}

export default Main
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Performancerange from './Performancerange';
import Conversion from './Conversion';
import Clicklog from './Clicklog';
import ConversionLog from './ConversionLog';
import CampaignReport from './CampaignReport';
import ConversionReport from './ConversionReport';
import ClickReport from './ClickReport';
import ServerReport from './ServerReport';
import PostbackReport from './PostbackReport';


function Performance() {
  const [key, setKey] = useState('tab1');

  return (
    <>

      <div>
        <Tabs
          id="controlled-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="custom-tabs"
        >
          <Tab eventKey="tab1" title="Campaign Report">
            <CampaignReport />
          </Tab>
          <Tab eventKey="tab2" title="Conversion Report">
            <ConversionReport />
          </Tab>
          <Tab eventKey="tab3" title="Click Report">
            <ClickReport />
          </Tab>
          <Tab eventKey="tab4" title="Server Report">
            <ServerReport />
          </Tab>
          <Tab eventKey="tab5" title="Postback Report">
            <PostbackReport />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Performance
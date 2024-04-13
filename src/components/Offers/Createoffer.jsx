import React from 'react'

function Createoffer() {
  return (
    <>
      <h4 className='m-2'>Create Offer</h4>
      <div className="container shadow1 bg-white m-2 mb-5">
        <p className='text-primary p-2'>Offer Details</p><hr />
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Advertiser</label>
          <div className="col-sm-11 col-lg-7 col-md-7 ">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Title</label>
          <div className="col-sm-11 col-lg-7 col-md-7 ">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Thumbnail</label>
          <input type="file" className='col-sm-11 col-lg-7 col-md-7' />
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Description</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <textarea className='form-control' rows="3" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Preview url</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Conversion tracking</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Tracking link</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Category</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Status</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Note</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <textarea className=' form-control' rows="3" />
          </div>
        </div>
      </div>

      <div className="container shadow1 bg-white m-2 mb-5">
        <p className='text-primary p-2'>Revenue and payout</p><hr />
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Offer Model</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Conversion Flow</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Currency</label>
          <div className="col-sm-11 col-lg-7 col-md-7">

            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Revenue</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'> payout</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>

      </div>

      <div className="container shadow1 bg-white m-2 mb-5">
        <p className='text-primary p-2'>Offer Capping</p><hr />
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Capping Interval</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Conversion Limit</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>


      </div>

      <div className="container shadow1 bg-white m-2 mb-5">
        <p className='text-primary p-2'>Targetting</p><hr />
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'> Country</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Device</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Browser</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>


      </div>


      <div className="container shadow1 bg-white m-2 ">
        <p className='text-primary p-2'>Restriction Settings</p><hr />
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'> Offer Permission/Visibility</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">
                Public</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Ask for Permission</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label" for="inlineRadio2">private</label>
            </div>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Featured</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Disable</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Enable</label>
            </div>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Same IP Conversion</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Block</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Allow</label>
            </div>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Conversion Approval</label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Manual</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Auto</label>
            </div>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Min. Conversion Time </label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Max. Conversion Time </label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="text" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Expire Date </label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <input type="date" className=' form-control' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Refer Redirect Rule </label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <label htmlFor="Advertiser" className='col-sm-11 col-lg-4 col-md-4'>Redirect Offer </label>
          <div className="col-sm-11 col-lg-7 col-md-7">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row m-1 p-1">
          <button type="button" class="btn btn-info btn-sm m-3 col-2">Create</button>
        </div>
      </div>
    </>
  )
}

export default Createoffer
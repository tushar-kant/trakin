import React from 'react'

function Addadvertiser() {
  return (
    <>
      <h3>Add advertiser</h3>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary'>Add advertiser</p><hr />
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">company</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Full name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Email </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Phone</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Skype</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Address 1</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Address 2</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">City</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Region</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Country</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Zip</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Whitelisting IPs</label>

          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <textarea type="text" class="form-control" rows="3" placeholder='Please enter text' />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">status</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addadvertiser
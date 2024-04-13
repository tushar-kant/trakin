import React from 'react'

function Companypreference() {
  return (
    <>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary p-1'>Customize your Application</p><hr />
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">App name</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5  col-sm-11 col-md-5">
            <label htmlFor="">App host</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Default time zone </label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Default inr</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">minimum payout </label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">referal commision</label>
            <input type="text" class="form-control" />
          </div>

        </div>

        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Global fallback URL</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        if country / device / browser mismatch then traffic will redirected to global fallback url
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Companypreference
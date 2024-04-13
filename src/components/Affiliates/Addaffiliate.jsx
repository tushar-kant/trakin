import React from 'react'

function Addaffiliate() {
  return (
    <>
      <h3>Add Affiliate</h3>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary p-1'>Add affiliate</p><hr />
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">company</label>
            <input type="text" class="form-control" placeholder='company' />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Full name</label>
            <input type="text" class="form-control" placeholder='name' />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5  col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Affiliate Token</label>
            <input type="text" class="form-control" placeholder='jBK4kp6Yv6KWt3n9JjjGBGFtDJcF9Ptg' />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Email </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Phone</label>
            <input type="text" class="form-control" /></div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Skype</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Address 1</label>
            <input type="text" class="form-control" placeholder='address1' />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Address 2</label>
            <input type="text" class="form-control" placeholder='address 2' />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">City</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Region</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Country</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">Zip</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="" className="form-label">status</label>
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

export default Addaffiliate
import React from 'react'

function Addemployee() {
  return (
    <>
      <h4>Add Employee</h4>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary'>Add employee</p><hr />
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Company Name</label>
            <input type="text" class="form-control" placeholder='company' />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Full Name</label>
            <input type="text" class="form-control" placeholder='name' />
          </div>

        </div>

        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Email </label>
            <input type="text" class="form-control" placeholder='Email' />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Phone</label> <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Skype</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Address Line 1</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Address Line 2</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">City</label> <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Region</label> <input type="text" class="form-control" />
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
            <label htmlFor="">status</label> <input type="text" class="form-control" />
          </div>
          <div className="col-lg-5 col-sm-11 col-md-5"> <label htmlFor="">Role</label>
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

export default Addemployee
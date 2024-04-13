import React from 'react'

function Emailpreference() {
  return (
    <>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary p-1'>Customize SMTP Mail Setting</p><hr />
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">SMTP Host</label> 
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5  col-sm-11 col-md-5">
            <label htmlFor="">SMTP Port</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Encryption </label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Usernname</label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Password </label>
            <input type="text" class="form-control" />
          </div>

        </div>
        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Sender name</label>
            <input type="text" class="form-control" />
          </div>

        </div>

        <div className="row m-1 p-1">
          <div className="col-lg-5 col-sm-11 col-md-5">
            <label htmlFor="">Sender Address</label>
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

export default Emailpreference
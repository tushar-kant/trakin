import React from 'react'

function Profile() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-5 col-sm-10 col-lg-5 shadow1 m-1 p-2">
            <p className='text-primary'>Signup Additional Question</p><hr />
            <div className="row">
              <div className="col-lg-7 col-sm-10 col-md-7">
                <p>Company:</p>
                <p>Name: Administration</p>
                <p>Email: partners@appjoy.co.in</p>
                <p>Phone: 11111111</p>
                <p>Skype: live:varunsharma3177</p>
                <p>Address 1: 1234  </p>
                <p>Address 2: 1234</p>
                <p>City: vred</p>
                <p>State: Uttar Pradesh</p>
                <p>Country:</p>
                <p>ZIP: 201306</p>
                <p>Created: 05-May-2023 - 03:34 PM</p>
                <p>Modified: 15-June-2023 - 10:39 PM</p>
                <p>Last Login: 10-April-2024 - 11:17 AM</p>
                <p>Signup IP:</p>


              </div>


              <div className="col-lg-3 col-sm-10 col-md-3">Change picture</div>

            </div>

          </div>
          <div className="col-md-5 col-sm-10 col-lg-5 shadow1 m-1 p-2">
            <p className='text-primary'>Change Password</p><hr />
            <div className="row m-1 p-1">
              <input type="text" className='col-sm-11 col-lg-7 col-md-7 form-control' placeholder='Current password' />
            </div>
            <div className="row m-1 p-1">
              <input type="text" className='col-sm-11 col-lg-7 col-md-7 form-control' placeholder='New password' />
            </div>
            <div className="row m-1 p-1">
              <input type="text" className='col-sm-11 col-lg-7 col-md-7 form-control' placeholder='New password confirm' />
            </div>
            <div className="row m-1 p-1">
              <button type="button" class="btn btn-primary btn-sm m-3 col-2">Update</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
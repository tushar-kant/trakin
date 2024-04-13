import React from 'react'

function Signupquestion() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-5 col-sm-10 col-lg-5 shadow1 m-1 p-2">
            <p className='text-primary'>Signup Additional Question</p><hr />
            <div className="row">
              <div className="col-lg-3 col-sm-10 col-md-3">ID</div>
              <div className="col-lg-3 col-sm-10 col-md-3">qustion</div>
              <div className="col-lg-3 col-sm-10 col-md-3">for</div>
              <div className="col-lg-3 col-sm-10 col-md-3">action</div>
            </div>

          </div>
          <div className="col-md-5 col-sm-10 col-lg-5 shadow1 m-1 p-2">
            <p className='text-primary'>Add new question</p><hr />
            <div className="row m-1 p-1">
              <label htmlFor="Advertiser" className='col-sm-11 col-lg-5 col-md-5'> Question</label>
              <input type="text" className='col-sm-11 col-lg-7 col-md-7' />
            </div>
            <div className="row m-1 p-1">
              <label htmlFor="Advertiser" className='col-sm-11 col-lg-5 col-md-5'> Question for</label>
              <input type="text" className='col-sm-11 col-lg-7 col-md-7' />
            </div>
            <div className="row m-1 p-1">
              <button type="button" class="btn btn-primary btn-sm m-3 col-2">Add question</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signupquestion
import React from 'react'

function Offerapplication() {
  return (
    <>
      <div className="container shadow1 m-1 p-1">
        <div className="row">
          <div className="col-9"><p className='text-primary p-1'>Offer Application</p></div>
          <div className="col-3">
            <button type="button" class="btn btn-primary mt-2">Add new</button>
          </div>
        </div><hr />
        <div className="row p-3">
          <div className="col-md-9 col-lg-9 col-sm-10">Show <input type="number" id='inputsearch' />entries</div>
          <div className="col-md-3 col-lg-3 col-sm-10">search <input type="text" /></div>
        </div>
        <div className="tableoverflow">
          <table className="table table-striped m-2">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Affiliate</th>
                <th scope="col">Offer</th>
                <th scope="col">Status</th>
                <th scope="col">Created</th>
                <th scope="col">ststus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Spotify CPR</td>
                <td>Pending</td>
                <td>18-Mar-2024 - 01:10 PM</td>
                <td>---</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Spotify CPR</td>
                <td>Pending</td>
                <td>18-Mar-2024 - 01:10 PM</td>
                <td>---</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Spotify CPR</td>
                <td>Pending</td>
                <td>18-Mar-2024 - 01:10 PM</td>
                <td>---</td>
              </tr>
            </tbody>

          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Offerapplication
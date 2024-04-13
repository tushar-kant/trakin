import React from 'react'

function Manageoffer() {
  return (
    <>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary p-1'>All  offers</p><hr />
        <div className="row p-3">
          <div className="col-md-9 col-lg-9 col-sm-10">Show <input type="number" id='inputsearch' />entries</div>
          <div className="col-md-3 col-lg-3 col-sm-10">search <input type="text" /></div>
        </div>
        <div className="tableoverflow">
          <table className="table table-striped m-2">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Preview</th>
                <th scope="col">Offer Name</th>
                <th scope="col">Advertiser</th>
                <th scope="col">status</th>
                <th scope="col">category</th>
                <th scope="col">Object</th>
                <th scope="col">Revenue</th>
                <th scope="col">payout</th>
                <th scope="col">Countries</th>
                <th scope="col">save</th>


              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>--</td>
                <td>12th Man_IN_CPD</td>
                <td>Affise_Rooter</td>
                <td>Active</td>
                <td>--</td>
                <td>Cpa</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>IN</td>
                <td>--</td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>--</td>
                <td>12th Man_IN_CPD</td>
                <td>Affise_Rooter</td>
                <td>Active</td>
                <td>--</td>
                <td>Cpa</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>IN</td>
                <td>--</td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>--</td>
                <td>12th Man_IN_CPD</td>
                <td>Affise_Rooter</td>
                <td>Active</td>
                <td>--</td>
                <td>Cpa</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>IN</td>
                <td>--</td>

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
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Manageoffer
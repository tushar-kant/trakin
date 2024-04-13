import React from 'react'

function Manageaffiliate() {
  return (
    <>
      <div className="container shadow1 m-1 p-1">
        <p className='text-primary'>Manage affiliates</p><hr />
        <div className="row p-3">
          <div className="col-md-9 col-lg-9 col-sm-10">Show <input type="number" id='inputsearch' />entries</div>
          <div className="col-md-3 col-lg-3 col-sm-10">search <input type="text" /></div>
        </div>

        <div className="tableoverflow">
          <table className="table table-striped m-2">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Manager</th>
                <th scope="col">Created</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>	gmpsjatin@gmail.com</td>
                <td>Active</td>
                <td>No manager</td>
                <td>04-Apr-2024 - 10:26 AM</td>
                <td>---</td>


              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>	gmpsjatin@gmail.com</td>
                <td>Active</td>
                <td>No manager</td>
                <td>04-Apr-2024 - 10:26 AM</td>
                <td>---</td>


              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>	gmpsjatin@gmail.com</td>
                <td>Active</td>
                <td>No manager</td>
                <td>04-Apr-2024 - 10:26 AM</td>
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
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Manageaffiliate
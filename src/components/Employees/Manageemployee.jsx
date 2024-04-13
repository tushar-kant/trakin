import React from 'react'

function Manageemployee() {
  return (

    <>
      <h3>Manage employee</h3>
      <div className="container shadow1 m-1 p-1">
        <div className="row">
          <div className="col-9">
            <p className='text-primary'>Manage  employee</p>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-primary mt-2">Add Employe</button>
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
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">status</th>
                <th scope="col">roll</th>
                <th scope="col">Created</th>
                <th scope="col">save</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>mobile@prodigiousonline.com</td>
                <td>Active</td>
                <td>Super Admin</td>
                <td>12-Feb-2024 - 02:31 PM</td>
                <td>---</td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>mobile@prodigiousonline.com</td>
                <td>Active</td>
                <td>Super Admin</td>
                <td>12-Feb-2024 - 02:31 PM</td>
                <td>---</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>

                <td>mobile@prodigiousonline.com</td>
                <td>Active</td>
                <td>Super Admin</td>
                <td>12-Feb-2024 - 02:31 PM</td>
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

export default Manageemployee
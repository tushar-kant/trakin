import React from 'react';
import profileimg from '../../images/Trackin-Logo.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Navavatar() {
    return (
        <>
        
            <div class="dropdown m-3 p-2 mt-4">
                <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className=' d-none d-lg-inline-block mx-2'>Admin</span><img src={profileimg} alt=" profile" height='25' width='25' className='rounded-circle' />
                    
                </button>
                <ul class="dropdown-menu">
                    {/* <li><a class="dropdown-item" href="#">prifile</a></li> */}
                    <li><Link to="/home/profile" className='nav-link'><a class="dropdown-item" href="#">Profile</a></Link>
                    </li>
                    <li><a class="dropdown-item" href="#">LogOut</a></li>
                </ul>
            </div>
            {/* <li className='nav-item dropdown pr-3'>
                <a href="#" className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle="dropdown">
                    <img src={profileimg} alt=" profile" height='25' width='25' className='rounded-circle' />
                </a>

                <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                    <li className='dropdown-header'>
                        <h6>admin</h6>

                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>
                    <li>
                        <a href="/" className='dropdown-item d-flex align-items-center'>
                            <i className='bi bi-person'></i>
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>

            </li> */}


        </>
    )
}

export default Navavatar
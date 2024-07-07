import Account from './Account'
import Curt from './Curt'
import Mune from './Mune'
import './Navbar.css'

export default function Navbar() {
  return (
<div>
     <nav className="navbar navbar-dark  fixed-top " style={{backgroundColor:'rgb(24,29,37)'}}>
      <div className="container">
      <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=' d-flex  align-items-center flex-grow-1'>
          <a className="navbar-brand text-capitalize fs-2 px-3 ms-auto" href="#">Cartzilla</a>
       <Mune/>
      <div className="input-group  w-50 px-1 " data-bs-theme="dark">
       <input type="text" className="form-control rounded-5 position-relative py-2  ms-2  bg-transparent" placeholder="Search For Product" aria-label="Username" aria-describedby="basic-addon1"/>
       <span className="input-group-text rounded-5 position-absolute border-0  bg-transparent" style={{right:'3px',top :'2px'}} id="basic-addon1"><i className="bi bi-search" style={{cursor:'pointer'}}></i></span>
       </div>
        <div className='d-flex fsew align-items-center  gap-lg-5 ms-5'>
        <i className="bi bi-moon fs-5"  style={{cursor:'pointer'}}></i>
        <Account/>
        <Curt/>
        </div>
        </div>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header" style={{background:'rgb(24,29,37)'}}>
            <h5 className="offcanvas-title " id="offcanvasDarkNavbarLabel"  >Browse Cartzilla</h5>
            <button type="button" className="btn-close btn-close-white border-0 shadow-none " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" style={{background:'rgb(24,29,37)'}}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="#">components</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</div>
  )
}

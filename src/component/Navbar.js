// import { BsFillCartFill } from 'react-icons/fa';
import "../component/navbar.css"
function Navbar() {
    return <>

    <div className="navbar justify-content-center">
    <form class="d-flex">
    <span> <i class="fa fa-2x me-2 text-white fa-shopping-cart" aria-hidden="true"></i></span>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    
    </div>
    <div className="fw-bold fs-1">
    <p className="mb-0 mt-2"> E-Commerce Website</p>
    </div>
    </>
}


export default Navbar;

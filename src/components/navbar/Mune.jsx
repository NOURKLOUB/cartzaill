

export default function Mune() {
  return (
    <div className="dropdown shing px-3 d-lg-block d-md-none">
    <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2   bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-list-stars fs-4"></i>Categories<i className="bi bi-arrow-down-short fs-4"></i></button>
    <div className="dropdown-menu  mt-1" style={{backgroundColor:'rgb(24,29,37)'}} data-bs-theme="dark">
    <ul>
    <li><a className="dropdown-item" href="#">Bakery & bread</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Shop all</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Bread</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Pastries</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Bakery cookies</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Cupcakes</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Buns & rolls</a></li>
    </ul>
    <ul>
    <li><a className="dropdown-item" href="#">Vegetables</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Shop all</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Leafy greens</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Root vegetables</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Allium vegetables</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Peppers and tomatoes</a></li>    
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Cruciferous</a></li>       
    </ul>
    <ul>
    <li><a className="dropdown-item" href="#">Fresh fruits</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Shop all</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Citrus fruits</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Berries</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Tropical fruits</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Stone fruits</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Exotic fruits</a></li>
    
    </ul>
    <ul>
    <li><a className="dropdown-item" href="#">Beverages</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Shop all</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Soft drinks</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Juices</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Sports & energy drinks</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Tea and coffee</a></li>
    <li className="cta"><a className="dropdown-item hover-underline-animation" href="#">Alcoholic beverages</a></li>
    </ul>
    </div>
  </div>
  )
}
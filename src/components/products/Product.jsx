import Categyre from './Categyre'
import './Product.css'
import {items} from '../CartMarket'
export default function Product() {
  return (
    <div className='container d-flex  gap-5'>
        <div style={{width:'500px'}}>
            <h3 className=' mb-4'>Categories</h3>
            <div className='sexed mb-3' />
          <Categyre imgtie="/public/Categories/01 (1).png" titlesing="Bakery & bread" pricing="230 products"/>
          <Categyre imgtie="/public/Categories/02.png" titlesing="Vegetables" pricing="180 products"/>
          <Categyre imgtie="/public/Categories/03.png" titlesing="Fresh fruits" pricing="205 products"/>
          <Categyre imgtie="/public/Categories/04.png" titlesing="Meet Italian dinner" pricing="309 products"/>
          <Categyre imgtie="/public/data/15.png" titlesing="Beverages" pricing="372 products"/>
          <Categyre imgtie="/public/Categories/06.png" titlesing="Meat products" pricing="124 products"/>
          <Categyre imgtie="/public/data/03 (1).png" titlesing="Sauces and ketchup" pricing="219 products"/>
        </div>
        <div className=' flex-grow-1 ms-5'>
             <div>
              <div className=' d-flex align-items-center  justify-content-between' style={{marginBottom:'0.7rem'}}>
                <h2>Popular products</h2>
                <div></div>
                <span style={{cursor:'pointer'}}>View all <i className="bi bi-chevron-right"></i></span>
              </div>
              <div className='sexed mb-3'/>
             </div>
          <div className=' d-flex align-items-center gap-3 flex-wrap'>
          {items.map((item)=>{
            return(
          <div key={item.id} class="card bg-transparent border-0 position-relative" style={{width:'14rem'}} data-bs-theme="dark">
          <i className="bi bi-heart  d-flex  justify-content-end me-4" style={{cursor:'pointer'}}/>
          <img src={item.imges} class="card-img-top ms-4" style={{width:'170px'}}  alt="data-1"/>
          <div class="card-body">
         <div className='d-flex align-items-center justify-content-between'>
           <h5 class="card-title fs-6">{item.price}</h5>
           <a href="#" class="btn  btn-outline-success py-1 px-2 mb-3 bg-transparent"><i className="bi bi-cart-check-fill text-success"></i></a>
         </div>
          <h6 class="card-title my-1" style={{fontWeight:'200'}}>{item.titles}</h6>
          <h6 class="card-title text-secondary py-2" style={{fontWeight:'200',fontSize:'12px'}}>{item.KG}</h6>
          </div>
          </div>     
            )
          })}
          </div>
        </div>
    </div>
  )
}





















import './Recipes.css'

export default function Recipes() {
  return (
    <div className='container'>
    <h1 className='mb-5'>Recipes</h1>
    <div className=' d-flex  gap-5'>
      <div style={{maxWidth:'500px'}}>
        <div className=' d-flex   align-items-center gap-3'>
            <img src="/public/Categories/01.jpg" className=' rounded' width={190} alt="brsd"  loading='lazy'/>
            <div className=''>
               <p>Garden salad with a mix of lettuce, cucumber and tomato</p>
               <div className=' d-flex gap-3'>
                 <span className=' text-secondary'><i className="bi bi-clock  me-1"></i> 30 min</span>
                 <span className=' text-secondary'><i className="bi bi-currency-bitcoin me-2"></i>Easy </span>
                 <span className=' text-secondary'><i className="bi bi-unity me-1"></i> 4 por</span>
               </div>
            </div>
        </div>
        <div className=' d-flex mt-5 align-items-center gap-3'>
            <img src="/public/Categories/02.jpg" className=' rounded' width={190} alt="brsd"  loading='lazy'/>
            <div className=''>
               <p>Garden salad with a mix of lettuce, cucumber and tomato</p>
               <div className=' d-flex gap-3'>
                 <span className=' text-secondary'><i className="bi bi-clock  me-1"></i> 30 min</span>
                 <span className=' text-secondary'><i className="bi bi-currency-bitcoin me-2"></i>Easy </span>
                 <span className=' text-secondary'><i className="bi bi-unity me-1"></i> 4 por</span>
               </div>
            </div>
        </div>
        <div className=' d-flex mt-5 align-items-center gap-3'>
            <img src="/public/Categories/03.jpg" className=' rounded' width={190} alt="brsd"  loading='lazy'/>
            <div className=''>
               <p>Garden salad with a mix of lettuce, cucumber and tomato</p>
               <div className=' d-flex gap-3'>
                 <span className=' text-secondary'><i className="bi bi-clock  me-1"></i> 30 min</span>
                 <span className=' text-secondary'><i className="bi bi-currency-bitcoin me-2"></i>Easy </span>
                 <span className=' text-secondary'><i className="bi bi-unity me-1"></i> 4 por</span>
               </div>
            </div>
        </div>
      </div>
      <div style={{marginRight:'-200px'}} className=' d-flex align-items-center gap-5 ios'>
      <img src="/public/Categories/book-cover.jpg"  width={300} height={380} loading='lazy' alt="swets"  style={{borderRadius:'12px'}}/>
      <div>
        <span  style={{fontSize:'14px'}} className=' text-bg-secondary-subtle bg-secondary rounded-5 px-1 '>Cookbook</span>
        <h4 className='mt-4'>The Best in Gastronomy</h4>
        <p>Author: Dana Chambers</p>
        <p style={{maxWidth:'340px'}} className=' text-secondary'>An exquisite cookbook that takes readers on a culinary journey around the world. With stunning photography and detailed instructions ...</p>
        <h2>$12.40</h2>

      </div>
      </div>
    </div>
    </div>
  )
}



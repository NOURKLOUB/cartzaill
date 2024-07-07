export default function Exotic(props) {
  return (
    <div >
        <div>
         <div className=' d-flex align-items-center gap-3 ca'>
        <img className='clor p-2  rounded-circle ' src={props.imeges} alt="scroll-1"  width={40}/>
        <h6 className="mt-2  hove-underline-animation" style={{cursor:'pointer',fontSize:'13px'}}>{props.title}</h6>
      </div>
        </div>
    </div>
  )
}

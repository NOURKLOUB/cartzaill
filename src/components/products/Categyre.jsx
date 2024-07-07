

export default function Categyre(props) {
  return (
    <div className=' d-flex align-items-center gap-4 w-100'>
    <img className='clor p-2  rounded-circle ' src={props.imgtie} width={50} loading='lazy' alt="Categories-1" />
    <div className='mt-3 ' style={{cursor:'pointer'}}>
        <p className='fs-6' style={{fontWeight:'100',fontSize:'10px'}}>{props.titlesing}</p>
        <p style={{fontSize:'12px',color:'rgb(106,112,123)'}}>{props.pricing}</p>
    </div>
</div>
  )
}

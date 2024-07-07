



export default function Adeng(props) {

  return (
    <div className="">
      <div className="fier ">
        <img
          src={props.meges}
          width={200}
          height={200}
          alt="mara"
          className="ms-5 mb-3 mt-3"
        />
        <h5 className="dexs px-3">Tea, Coffee & Drinks</h5>
        <h4 className="deaa px-3 ">Roast Ground Coffee</h4>
        <div className=" d-flex align-items-center justify-content-between px-3 py-2">
          <span>
            $13{" "}
            <span className="text-decoration-line-through  text-secondary">
              $18
            </span>
          </span>
          <div>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <small className="ms-1">4.5</small>
          </div>
        </div>
        <div className=" d-flex gap-2 mt-5">
          <div className="timers borders px-3 text-center me-1">
            <p className="mb-2 mt-2">123</p>
            <p>
              <small>Dayse</small>
            </p>
          </div>
          <div className="timers borders px-3 text-center me-1">
            <p className="mb-2 mt-2">42</p>
            <p>
              <small>Hours</small>
            </p>
          </div>
          <div className="timers borders px-3 text-center me-1">
            <p className="mb-2 mt-2">223</p>
            <p>
              <small>Mins</small>
            </p>
          </div>
          <div className="timers borders px-4 text-center me-1">
            <p className="mb-2 mt-2">44</p>
            <p>
              <small>Sec</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

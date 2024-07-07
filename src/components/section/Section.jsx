import Exotic from "./Exotic";
import "./Section.css";
export default function Section() {
  return (
    <section className="full container-fluid borders-top">
      <div className="container  overflow-auto  d-flex align-items-center justify-content-between mt-4 gap-5 mb-4">
        <Exotic imeges="/public/assets/th01.png" title="Vegetables" />
        <Exotic imeges="/public/assets/th02.png" title="Weekly sale" />
        <Exotic imeges="/public/assets/th03.png" title="Easter is coming" />
        <Exotic imeges="/public/assets/th04.png" title="Poultry meat" />
        <Exotic imeges="/public/assets/th05.png" title="Fresh fruits" />
        <Exotic imeges="/public/assets/th03.png" title="St. Patrick's day" />
        <Exotic imeges="/public/assets/th01.png" title="Exotic fruits" />
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active position-relative c-item "
            data-bs-interval="30000"
          >
            <img
              src="/public/01.jpg"
              className="d-block w-100 c-img"
              alt="branbder"
              loading="lazy"
            />
            <div
              className="carousel-caption position-absolute top-50 text-start  "
              style={{ marginTop: "-100px", marginLeft: "-52px" }}
            >
              <p className="mb-4">🥚 Organic products to your table</p>
              <h5 className=" fs-3 mb-4">
                Organic eggs from home-grown chicken
              </h5>
              <a className="btn btn-outline-light p-2 rounded-2">Shop now</a>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval="3000">
            <img
              src="/public/02.jpg"
              className="d-block w-100 c-img"
              alt="branbder"
              loading="lazy"
            />
            <div
              className="carousel-caption  top-50 text-start "
              style={{ marginTop: "-100px", marginLeft: "-52px" }}
            >
              <p className="mb-4">🥝 Only natural ingredients</p>
              <h5 className=" fs-3 mb-4">Enjoy refreshing summer drink</h5>
              <a className="btn btn-outline-light p-2 rounded-2">Shop now</a>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval="1000">
            <img
              src="/public/03.jpg"
              className="d-block w-100 c-img"
              alt="branbder"
              loading="lazy"
            />
            <div
              className="carousel-caption  top-50 text-start "
              style={{ marginTop: "-100px", marginLeft: "-52px" }}
            >
              <p className="mb-4">🔥 Free shipping - order over </p>
              <h5 className=" fs-3 mb-4">Healthy Food Available to Everyone</h5>
              <a className="btn btn-outline-light p-2 rounded-2">Shop now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5">
        <div className=" d-flex align-items-center justify-content-between gap-3 flex-wrap ">
          <div className="cart d-flex align-items-center ca">
          <div className=" px-4 py-5">
              <span>124 product</span>
              <h6 className=" mt-2 mb-2">only fresh fish to your table</h6>
              <p className="hove-underline-animation">Shop now <i className="bi bi-arrow-right-short"></i></p>
          </div>
            <div><img src="/public/01.png" alt="lockel" width={150} loading="lazy" /></div>
          </div>
          <div className="last d-flex align-items-center ca">
          <div className=" px-4 py-5">
              <span>124 product</span>
              <h6 className=" mt-2 mb-2">only fresh fish to your table</h6>
              <p className="hove-underline-animation">Shop now <i className="bi bi-arrow-right-short"></i></p>
          </div>
            <div><img src="/public/02.png" alt="lockel" width={150} loading="lazy" /></div>
          </div>
          <div className="first d-flex align-items-center ca">
          <div className=" px-4 py-5">
              <span>124 product</span>
              <h6 className=" mt-2 mb-2">only fresh fish to your table</h6>
              <p  className="hove-underline-animation">Shop now <i className="bi bi-arrow-right-short"></i></p>
          </div>
            <div><img src="/public/03.png" alt="lockel" width={150} loading="lazy" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

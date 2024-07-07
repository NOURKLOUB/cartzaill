import "./Footer.css";

export default function Footer() {
  return (
    <footer className=" container-fluid ">
      <div className=" container-fluid">
        <div className=" text-center py-5 px-5">
          <h5 className="py-3 fs-3">Stay in touch with us</h5>
          <p className="py-2 text-secondary">
            Receive the latest updates about our products & promotions
          </p>
          <form
            className="d-flex   justify-content-center py-2 foters"
            role="search"
            data-bs-theme="dark"
          >
            <input
            id="searcgh"
              className="form-control me-2 mb-2 w-25   bg-transparent rounded-5 text-light py-2"
              style={{ border: "0.4px solid rgb(224,229,234)" }}
              type="search"
              placeholder="You email"
              aria-label="Search"
            />
            <button className="btn btn-danger rounded-5" type="submit">
              subscribe
            </button>
          </form>
        </div>
         <h4 className="text-center fs-6 py-3 text-secondary">© All rights reserved. Made with © by Createx Studio </h4>
      </div>
    </footer>
  );
}

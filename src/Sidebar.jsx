import "./Sidebar.css"
const Sidebar = () => {
    return (<div className="S-baar p-3" style={{width:" 280px"}}>
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-5 fw-semibold">Shoes</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Home
        </button>
        
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Catalog
        </button>
        
        <div className="collapse show" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
          </ul>
        </div>
      </li>

      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Brands
        </button>
        <div className="collapse show" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Puma</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Asics</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Addidas</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reebok</a></li>
          </ul>
        </div>
      </li>

      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
      </li>
      
    </ul>
  </div>
    )
}
export default Sidebar;
import { Link } from "react-router-dom";
export default function AdminMenu()
{
    return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Online shop [admin panel]</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/AdminCategory">Categories</Link>
            <Link className="nav-link" to="/AdminProduct">Products</Link>
            <Link className="nav-link" to="/AdminUsers">Customers</Link>
            <Link className="nav-link" to="/AdminOrders">Orders</Link>
          </div>
        </div>
      </div>
    </nav>);
}
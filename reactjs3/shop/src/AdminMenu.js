export default function AdminMenu()
{
    return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Online shop [admin panel]</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="home.html">Home</a>
            <a className="nav-link" href="categories.html">Categories</a>
            <a className="nav-link" href="products.html">Products</a>
            <a className="nav-link" href="users.html">Customers</a>
            <a className="nav-link" href="orders.html">Orders</a>
            <a className="nav-link" href="change_password.html">Change Password</a>
          </div>
        </div>
      </div>
    </nav>);
}
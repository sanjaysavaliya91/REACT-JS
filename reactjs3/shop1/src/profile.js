export default function AccountMyItems() {
    return (
      <>
        <div>
          <noscript>
            &lt;iframe
            src="http://www.googletagmanager.com/ns.html?id=GTM-WKV3GT5"
            height="0" width="0" style="display: none; visibility:
            hidden;"&gt;&lt;/iframe&gt;
          </noscript>
          {/* Sign in / sign up modal*/}
          <div
            className="modal fade"
            id="signin-modal"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-secondary">
                  <ul className="nav nav-tabs card-header-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link fw-medium active"
                        href="#signin-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="ci-unlocked me-2 mt-n1" />
                        Sign in
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-medium"
                        href="#signup-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="ci-user me-2 mt-n1" />
                        Sign up
                      </a>
                    </li>
                  </ul>
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body tab-content py-4">
                  <form
                    className="needs-validation tab-pane fade show active"
                    autoComplete="off"
                    noValidate
                    id="signin-tab"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="si-email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="si-email"
                        placeholder="johndoe@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email address.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="si-password">
                        Password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control"
                          type="password"
                          id="si-password"
                          required
                        />
                        <label
                          className="password-toggle-btn"
                          aria-label="Show/hide password"
                        >
                          <input
                            className="password-toggle-check"
                            type="checkbox"
                          />
                          <span className="password-toggle-indicator" />
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 d-flex flex-wrap justify-content-between">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="si-remember"
                        />
                        <label className="form-check-label" htmlFor="si-remember">
                          Remember me
                        </label>
                      </div>
                      <a className="fs-sm" href="#">
                        Forgot password?
                      </a>
                    </div>
                    <button
                      className="btn btn-primary btn-shadow d-block w-100"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                  <form
                    className="needs-validation tab-pane fade"
                    autoComplete="off"
                    noValidate
                    id="signup-tab"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="su-name">
                        Full name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="su-name"
                        placeholder="John Doe"
                        required
                      />
                      <div className="invalid-feedback">
                        Please fill in your name.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="su-email">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="su-email"
                        placeholder="johndoe@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email address.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="su-password">
                        Password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control"
                          type="password"
                          id="su-password"
                          required
                        />
                        <label
                          className="password-toggle-btn"
                          aria-label="Show/hide password"
                        >
                          <input
                            className="password-toggle-check"
                            type="checkbox"
                          />
                          <span className="password-toggle-indicator" />
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="su-password-confirm">
                        Confirm password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control"
                          type="password"
                          id="su-password-confirm"
                          required
                        />
                        <label
                          className="password-toggle-btn"
                          aria-label="Show/hide password"
                        >
                          <input
                            className="password-toggle-check"
                            type="checkbox"
                          />
                          <span className="password-toggle-indicator" />
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-shadow d-block w-100"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <main className="page-wrapper">
            {/* Navbar for NFT Marketplace demo*/}
            {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
            <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <a
                  className="navbar-brand d-none d-sm-block me-4 order-lg-1"
                  href="index.html"
                >
                  <img src="img/logo-dark.png" width={142} alt="Cartzilla" />
                </a>
                <a
                  className="navbar-brand d-sm-none me-2 order-lg-1"
                  href="index.html"
                >
                  <img src="img/logo-icon.png" width={74} alt="Cartzilla" />
                </a>
                <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <a
                    className="navbar-tool d-none d-lg-flex"
                    href="javascript:void(0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#searchBox"
                    role="button"
                    aria-expanded="false"
                    aria-controls="searchBox"
                  >
                    <span className="navbar-tool-tooltip">Search</span>
                    <div className="navbar-tool-icon-box">
                      <i className="navbar-tool-icon ci-search" />
                    </div>
                  </a>
                  <div className="navbar-tool dropdown ms-lg-3 ms-2">
                    <a
                      className="navbar-tool-icon-box d-inline-block w-auto h-auto dropdown-toggle mt-n1"
                      href="nft-account-settings.html"
                    >
                      <img
                        src="img/nft/vendor/avatar-sm.png"
                        width={36}
                        alt="User"
                      />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div style={{ "min-width": "14rem" }}>
                        <h6 className="dropdown-header">@foxnet_creator</h6>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="nft-account-settings.html"
                        >
                          <i className="ci-settings opacity-60 me-2" />
                          Profile Settings
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="nft-account-my-items.html"
                        >
                          <i className="ci-image opacity-60 me-2" />
                          My Items
                          <span className="fs-xs text-muted ms-auto">5</span>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="nft-account-my-collections.html"
                        >
                          <i className="ci-view-list opacity-60 me-2" />
                          My Collections
                          <span className="fs-xs text-muted ms-auto">2</span>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="nft-account-favorites.html"
                        >
                          <i className="ci-heart opacity-60 me-2" />
                          Favorites
                          <span className="fs-xs text-muted ms-auto">3</span>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="nft-account-notifications.html"
                        >
                          <i className="ci-bell opacity-60 me-2" />
                          Notifications
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-3"
                    href="nft-create-item.html"
                  >
                    Create
                  </a>
                </div>
                <div
                  className="collapse navbar-collapse me-auto order-lg-2"
                  id="navbarCollapse"
                >
                  {/* Search (mobile)*/}
                  <div className="d-lg-none py-3">
                    <div className="input-group">
                      <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                      <input
                        className="form-control rounded-start"
                        type="text"
                        placeholder="What do you need?"
                      />
                    </div>
                  </div>
                  {/* Primary menu*/}
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="home-nft.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Catalog
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="nft-catalog-v1.html">
                            Catalog v.1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="nft-catalog-v2.html">
                            Catalog v.2
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-single-auction-live.html"
                          >
                            Single Item - Auction Live
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-single-auction-ended.html"
                          >
                            Single Item - Auction Ended
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="nft-single-buy.html">
                            Single Item - Buy Now
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="nft-vendor.html">
                            Vendor Page
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-connect-wallet.html"
                          >
                            Connect Wallet
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-create-item.html"
                          >
                            Create New Item
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-account-settings.html"
                          >
                            Profile Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-account-my-items.html"
                          >
                            My Items
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-account-my-collections.html"
                          >
                            My Collections
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-account-favorites.html"
                          >
                            Favorites
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="nft-account-notifications.html"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Back to main demo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Search collapse*/}
              <div className="search-box collapse" id="searchBox">
                <div className="container py-2">
                  <div className="input-group">
                    <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <input
                      className="form-control rounded-start"
                      type="text"
                      placeholder="What do you need?"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="page-title-overlap bg-accent pt-4">
              <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center mb-2 pt-2">
                <div className="d-flex align-items-center">
                  <div
                    className="img-thumbnail rounded-circle position-relative flex-shrink-0"
                    style={{ width: "6.375rem" }}
                  >
                    <img
                      className="rounded-circle"
                      src="img/nft/vendor/avatar.png"
                      alt="@foxnet_creator"
                    />
                  </div>
                  <div className="ps-3">
                    <h3 className="h5 mb-2 text-light">@foxnet_creator</h3>
                    <span className="d-block text-light fs-sm opacity-60">
                      Joined July 2021
                    </span>
                  </div>
                </div>
                <div className="my-sm-0 my-3 text-sm-end pt-1">
                  <div className="d-flex align-items-center text-nowrap fs-sm">
                    <div className="mb-2 me-sm-3 me-2 text-muted">
                      <span className="fw-medium text-light">766</span>{" "}
                      <span className="text-white opacity-70">followers</span>
                    </div>
                    <div className="mb-2 ps-sm-3 ps-2 border-start border-light text-muted">
                      <span className="fw-medium text-light">2K</span>{" "}
                      <span className="text-white opacity-70">following</span>
                    </div>
                  </div>
                  <a className="text-light" href="#">
                    0x1dDB2C08s97...9Ecd
                    <i
                      className="ci-copy ms-2 fs-sm"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Copy"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container mb-5 pb-3">
              <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                <div className="row">
                  {/* Sidebar*/}
                  <aside className="col-lg-3 pe-xl-5">
                    {/* Account menu toggler (hidden on screens larger 992px)*/}
                    <div className="d-block d-lg-none p-4">
                      <a
                        className="btn btn-outline-accent d-block"
                        href="#account-menu"
                        data-bs-toggle="collapse"
                      >
                        <i className="ci-menu me-2" />
                        Account menu
                      </a>
                    </div>
                    {/* Actual menu*/}
                    <div className="h-100 border-end mb-2">
                      <div className="d-lg-block collapse" id="account-menu">
                        <ul className="list-unstyled mb-0">
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="nft-account-settings.html"
                            >
                              <i className="ci-settings opacity-60 me-2" />
                              Profile Settings
                            </a>
                          </li>
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="nft-account-my-items.html"
                            >
                              <i className="ci-image opacity-60 me-2" />
                              My Items
                              <span className="fs-sm text-muted ms-auto">5</span>
                            </a>
                          </li>
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="nft-account-my-collections.html"
                            >
                              <i className="ci-view-list opacity-60 me-2" />
                              My Collections
                              <span className="fs-sm text-muted ms-auto">2</span>
                            </a>
                          </li>
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="nft-account-favorites.html"
                            >
                              <i className="ci-heart opacity-60 me-2" />
                              Favorites
                              <span className="fs-sm text-muted ms-auto">3</span>
                            </a>
                          </li>
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="nft-account-notifications.html"
                            >
                              <i className="ci-bell opacity-60 me-2" />
                              Notifications
                            </a>
                          </li>
                          <li className="border-bottom mb-0">
                            <a
                              className="nav-link-style d-flex align-items-center px-4 py-3"
                              href="account-signin.html"
                            >
                              <i className="ci-sign-out opacity-60 me-2" />
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  {/* Content*/}
                  <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
                    <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                      <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4">
                        <h1 className="h3 mb-sm-0 mb-2 pb-1 text-sm-start text-center">
                          My Items
                        </h1>
                        <div className="pb-1" style={{ "overflow-x": "auto" }}>
                          <ul className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-0">
                            <li className="nav-item">
                              <a className="nav-link active" href="#">
                                All <span className="opacity-70">(5)</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Sold <span className="opacity-70">(3)</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Live auctions{" "}
                                <span className="opacity-70">(2)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Items grid*/}
                      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 gx-3 mb-4">
                        {/* Product*/}
                        <div className="col mb-2">
                          <article className="card h-100 border-0 shadow">
                            <div className="card-img-top position-relative overflow-hidden">
                              <a
                                className="d-block"
                                href="nft-single-auction-live.html"
                              >
                                <img
                                  src="img/nft/catalog/02.jpg"
                                  alt="Product image"
                                />
                              </a>
                              {/* Countdown timer*/}
                              <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                                <i className="ci-time me-1" />
                                <div
                                  className="countdown d-inline"
                                  data-countdown="12/31/2022 09:00:00 PM"
                                >
                                  <span className="countdown-hours mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                    <span className="countdown-label fs-lg">
                                      :
                                    </span>
                                  </span>
                                  <span className="countdown-minutes mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                    <span className="countdown-label fs-lg">
                                      :
                                    </span>
                                  </span>
                                  <span className="countdown-seconds mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                  </span>
                                </div>
                              </div>
                              {/* Edit button*/}
                              <button
                                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Edit"
                                style={{ margin: "12px" }}
                              >
                                <i className="ci-edit" />
                              </button>
                            </div>
                            <div className="card-body">
                              <h3 className="product-title mb-2 fs-base">
                                <a
                                  className="d-block text-truncate"
                                  href="nft-single-auction-live.html"
                                >
                                  Ocean and sky
                                </a>
                              </h3>
                              <span className="fs-sm text-muted">
                                Current bid:
                              </span>
                              <div className="d-flex align-items-center flex-wrap">
                                <h4 className="mt-1 mb-0 fs-base text-darker">
                                  0.5 ETH
                                </h4>
                                <span className="mt-1 ms-1 fs-xs text-muted">
                                  (≈ $ 2,000.55)
                                </span>
                              </div>
                            </div>
                            <div className="card-footer mt-n1 py-0 border-0">
                              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                                <img
                                  className="me-2 rounded-circle"
                                  src="img/nft/catalog/avatars/07.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style fs-sm stretched-link"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                        {/* Product*/}
                        <div className="col mb-2">
                          <article className="card h-100 border-0 shadow">
                            <div className="card-img-top position-relative overflow-hidden">
                              <a className="d-block" href="nft-single-buy.html">
                                <img
                                  src="img/nft/catalog/04.jpg"
                                  alt="Product image"
                                />
                              </a>
                              {/* Edit button*/}
                              <button
                                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Edit"
                                style={{ margin: "12px" }}
                              >
                                <i className="ci-edit" />
                              </button>
                            </div>
                            <div className="card-body">
                              <h3 className="product-title mb-2 fs-base">
                                <a
                                  className="d-block text-truncate"
                                  href="nft-single-buy.html"
                                >
                                  Astronaut surrounded by lights
                                </a>
                              </h3>
                              <span className="fs-sm text-muted">
                                Reserve price:
                              </span>
                              <div className="d-flex align-items-center flex-wrap">
                                <h4 className="mt-1 mb-0 fs-base text-darker">
                                  0.1 ETH
                                </h4>
                                <span className="mt-1 ms-1 fs-xs text-muted">
                                  (≈ $ 400.19)
                                </span>
                              </div>
                            </div>
                            <div className="card-footer mt-n1 py-0 border-0">
                              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                                <img
                                  className="me-2 rounded-circle"
                                  src="img/nft/catalog/avatars/07.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style fs-sm stretched-link"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                        {/* Product*/}
                        <div className="col mb-2">
                          <article className="card h-100 border-0 shadow">
                            <div className="card-img-top position-relative overflow-hidden">
                              <a className="d-block" href="nft-single-buy.html">
                                <img
                                  src="img/nft/catalog/03.jpg"
                                  alt="Product image"
                                />
                              </a>
                              {/* Edit button*/}
                              <button
                                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Edit"
                                style={{ margin: "12px" }}
                              >
                                <i className="ci-edit" />
                              </button>
                            </div>
                            <div className="card-body">
                              <h3 className="product-title mb-2 fs-base">
                                <a
                                  className="d-block text-truncate"
                                  href="nft-single-buy.html"
                                >
                                  Aesthetic art collage
                                </a>
                              </h3>
                              <span className="fs-sm text-muted">
                                Reserve price:
                              </span>
                              <div className="d-flex align-items-center flex-wrap">
                                <h4 className="mt-1 mb-0 fs-base text-darker">
                                  0.6 ETH
                                </h4>
                                <span className="mt-1 ms-1 fs-xs text-muted">
                                  (≈ $ 2,400.65)
                                </span>
                              </div>
                            </div>
                            <div className="card-footer mt-n1 py-0 border-0">
                              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                                <img
                                  className="me-2 rounded-circle"
                                  src="img/nft/catalog/avatars/07.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style fs-sm stretched-link"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                        {/* Product*/}
                        <div className="col mb-2">
                          <article className="card h-100 border-0 shadow">
                            <div className="card-img-top position-relative overflow-hidden">
                              <a
                                className="d-block"
                                href="nft-single-auction-live.html"
                              >
                                <img
                                  src="img/nft/catalog/10.jpg"
                                  alt="Product image"
                                />
                              </a>
                              {/* Countdown timer*/}
                              <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                                <i className="ci-time me-1" />
                                <div
                                  className="countdown d-inline"
                                  data-countdown="12/31/2022 12:00:00 PM"
                                >
                                  <span className="countdown-hours mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                    <span className="countdown-label fs-lg">
                                      :
                                    </span>
                                  </span>
                                  <span className="countdown-minutes mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                    <span className="countdown-label fs-lg">
                                      :
                                    </span>
                                  </span>
                                  <span className="countdown-seconds mb-0 me-0">
                                    <span className="countdown-value">0</span>
                                  </span>
                                </div>
                              </div>
                              {/* Edit button*/}
                              <button
                                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Edit"
                                style={{ margin: "12px" }}
                              >
                                <i className="ci-edit" />
                              </button>
                            </div>
                            <div className="card-body">
                              <h3 className="product-title mb-2 fs-base">
                                <a
                                  className="d-block text-truncate"
                                  href="nft-single-auction-live.html"
                                >
                                  Ocean and sky
                                </a>
                              </h3>
                              <span className="fs-sm text-muted">
                                Current bid:
                              </span>
                              <div className="d-flex align-items-center flex-wrap">
                                <h4 className="mt-1 mb-0 fs-base text-darker">
                                  0.5 ETH
                                </h4>
                                <span className="mt-1 ms-1 fs-xs text-muted">
                                  (≈ $ 2,000.55)
                                </span>
                              </div>
                            </div>
                            <div className="card-footer mt-n1 py-0 border-0">
                              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                                <img
                                  className="me-2 rounded-circle"
                                  src="img/nft/catalog/avatars/07.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style fs-sm stretched-link"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                        {/* Product*/}
                        <div className="col mb-2">
                          <article className="card h-100 border-0 shadow">
                            <div className="card-img-top position-relative overflow-hidden">
                              <a className="d-block" href="nft-single-buy.html">
                                <img
                                  src="img/nft/catalog/11.jpg"
                                  alt="Product image"
                                />
                              </a>
                              {/* Edit button*/}
                              <button
                                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Edit"
                                style={{ margin: "12px" }}
                              >
                                <i className="ci-edit" />
                              </button>
                            </div>
                            <div className="card-body">
                              <h3 className="product-title mb-2 fs-base">
                                <a
                                  className="d-block text-truncate"
                                  href="nft-single-buy.html"
                                >
                                  Aesthetic art collage
                                </a>
                              </h3>
                              <span className="fs-sm text-muted">
                                Reserve price:
                              </span>
                              <div className="d-flex align-items-center flex-wrap">
                                <h4 className="mt-1 mb-0 fs-base text-darker">
                                  0.6 ETH
                                </h4>
                                <span className="mt-1 ms-1 fs-xs text-muted">
                                  (≈ $ 2,400.65)
                                </span>
                              </div>
                            </div>
                            <div className="card-footer mt-n1 py-0 border-0">
                              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                                <img
                                  className="me-2 rounded-circle"
                                  src="img/nft/catalog/avatars/07.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style fs-sm stretched-link"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      {/* Create new item*/}
                      <div className="d-flex flex-sm-row flex-column">
                        <a className="btn btn-accent" href="nft-create-item.html">
                          Create new item
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
          {/* Footer*/}
          <footer className="footer bg-darker">
            <div className="bg-dark">
              <div className="container py-5">
                <div className="row py-lg-4">
                  <div className="col-lg-4 mb-lg-0 mb-4">
                    <div className="widget pb-3 mb-lg-4">
                      <h3 className="widget-title text-light pb-1">
                        Stay informed
                      </h3>
                      <form
                        className="subscription-form validate"
                        action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                        method="post"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                        noValidate
                      >
                        <div className="input-group flex-nowrap">
                          <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                          <input
                            className="form-control rounded-start"
                            type="email"
                            name="EMAIL"
                            placeholder="Your email"
                            required
                          />
                          <button
                            className="btn btn-accent"
                            type="submit"
                            name="subscribe"
                          >
                            Subscribe*
                          </button>
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            className="subscription-form-antispam"
                            type="text"
                            name="b_c7103e2c981361a6639545bd5_29ca296126"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="form-text text-light opacity-50">
                          *Subscribe to our newsletter to receive early discount
                          offers, updates and new products info.
                        </div>
                        <div className="subscription-status" />
                      </form>
                    </div>
                    <div>
                      <a
                        className="btn-social bs-light bs-twitter me-2 mb-2"
                        href="#"
                      >
                        <i className="ci-twitter" />
                      </a>
                      <a
                        className="btn-social bs-light bs-facebook me-2 mb-2"
                        href="#"
                      >
                        <i className="ci-facebook" />
                      </a>
                      <a
                        className="btn-social bs-light bs-instagram me-2 mb-2"
                        href="#"
                      >
                        <i className="ci-instagram" />
                      </a>
                      <a
                        className="btn-social bs-light bs-pinterest me-2 mb-2"
                        href="#"
                      >
                        <i className="ci-pinterest" />
                      </a>
                      <a
                        className="btn-social bs-light bs-youtube me-2 mb-2"
                        href="#"
                      >
                        <i className="ci-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="d-flex flex-sm-row flex-column justify-content-sm-between mt-n4 mx-lg-n3">
                      <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                        <h3 className="widget-title text-light">Company</h3>
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              About Us
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              How It Works
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Create an NFT With Us
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Support
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Blog
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              My Account
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                        <h3 className="widget-title text-light">Marketplace</h3>
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              All NFTs
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              New
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Art
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Music
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Photography
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Utility
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                        <h3 className="widget-title text-light">Help</h3>
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Terms and Conditions
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Privacy Policy
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              FAQ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-lg-4 my-3 py-2">
              <div className="d-flex flex-md-row flex-column-reverse align-items-center justify-content-md-between">
                <div className="fs-xs text-light opacity-50">
                  © All rights reserved. Made by{" "}
                  <a
                    className="text-light"
                    href="https://createx.studio/"
                    target="_blank"
                    rel="noopener"
                  >
                    Createx Studio
                  </a>
                </div>
                <div className="d-flex align-items-start mb-md-0 mb-3 mx-n1">
                  <div className="px-1">
                    <a className="btn-market btn-apple bg-dark" href="#">
                      <span className="btn-market-subtitle">Download on the</span>
                      <span className="btn-market-title">App Store</span>
                    </a>
                  </div>
                  <div className="px-1">
                    <a className="btn-market btn-google bg-dark" href="#">
                      <span className="btn-market-subtitle">Download on the</span>
                      <span className="btn-market-title">Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Toolbar for handheld devices (NFT Marketplace)*/}
          <div className="handheld-toolbar">
            <div className="d-table table-layout-fixed w-100">
              <a
                className="d-table-cell handheld-toolbar-item"
                href="nft-account-settings.html"
                data-bs-toggle="modal"
              >
                <span className="handheld-toolbar-icon">
                  <i className="ci-user" />
                </span>
                <span className="handheld-toolbar-label">Account</span>
              </a>
              <a
                className="d-table-cell handheld-toolbar-item"
                href="javascript:void(0)"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onclick="window.scrollTo(0, 0)"
              >
                <span className="handheld-toolbar-icon">
                  <i className="ci-menu" />
                </span>
                <span className="handheld-toolbar-label">Menu</span>
              </a>
              <a
                className="d-table-cell handheld-toolbar-item"
                href="nft-create-item.html"
              >
                <span className="handheld-toolbar-icon">
                  <i className="ci-add" />
                </span>
                <span className="handheld-toolbar-label">Create item</span>
              </a>
            </div>
          </div>
          {/* Back To Top Button*/}
          <a className="btn-scroll-top" href="#top" data-scroll>
            <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
              Top
            </span>
            <i className="btn-scroll-top-icon ci-arrow-up"> </i>
          </a>
        </div>
      </>
    );
  }
import React from "react";
export default function SingleAuctionLive() {
  return (
    <>
      <div className="handheld-toolbar-enabled">
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
                <a
                  className="navbar-tool ms-lg-2"
                  href="#signin-modal"
                  data-bs-toggle="modal"
                >
                  <span className="navbar-tool-tooltip">Account</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon ci-user" />
                  </div>
                </a>
                <a
                  className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-2"
                  href="nft-connect-wallet.html"
                >
                  Connect Wallet
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
                  <li className="nav-item dropdown active">
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
                  <li className="nav-item dropdown">
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
          {/* Page Title*/}
          <div className="page-title-overlap bg-accent pt-4">
            <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
              <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <li className="breadcrumb-item">
                      <a className="text-nowrap" href="index.html">
                        <i className="ci-home" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item text-nowrap">
                      <a href="home-nft.html">Marketplace</a>
                    </li>
                    <li
                      className="breadcrumb-item text-nowrap active"
                      aria-current="page"
                    >
                      Single Project
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                <h1 className="h3 text-light mb-0">
                  Single Item - Auction Live
                </h1>
              </div>
            </div>
          </div>
          <section className="container pb-md-4">
            {/* Product*/}
            <div className="bg-light shadow-lg rounded-3 px-4 py-lg-4 py-3 mb-5">
              <div className="py-lg-3 py-2 px-lg-3">
                <div className="row gy-4">
                  {/* Product image*/}
                  <div className="col-lg-6">
                    <div className="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
                      <img
                        className="image-zoom"
                        src="img/nft/catalog/single.jpg"
                        data-zoom="img/nft/catalog/single.jpg"
                        alt="Product"
                      />
                      <div className="image-zoom-pane" />
                    </div>
                    <div className="pt-2 text-lg-start text-center">
                      <button
                        className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Favorites"
                      >
                        <i className="ci-heart" />
                      </button>
                      <button
                        className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Share"
                      >
                        <i className="ci-share-alt" />
                      </button>
                      <button
                        className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Flag"
                      >
                        <i className="ci-flag" />
                      </button>
                    </div>
                  </div>
                  {/* Product details*/}
                  <div className="col-lg-6">
                    <div className="ps-xl-5 ps-lg-3">
                      {/* Meta*/}
                      <h2 className="h3 mb-3">3d aesthetics with shapes</h2>
                      <div className="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm">
                        <div className="mb-2 me-sm-3 me-2 text-muted">
                          Minted on Oct 29, 2021
                        </div>
                        <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                          <i className="ci-eye me-1 fs-base mt-n1 align-middle" />
                          15 views
                        </div>
                        <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                          <i className="ci-heart me-1 fs-base mt-n1 align-middle" />
                          4 favorite
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                        {/* Creator*/}
                        <div className="col">
                          <div className="card position-relative h-100">
                            <div className="card-body p-3">
                              <h3 className="h6 mb-2 fs-sm text-muted">
                                Creator
                              </h3>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle me-2"
                                  src="img/nft/catalog/avatars/01.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style stretched-link fs-sm"
                                  href="nft-vendor.html"
                                >
                                  @foxnet_creator
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Collection*/}
                        <div className="col">
                          <div className="card position-relative h-100">
                            <div className="card-body p-3">
                              <h3 className="h6 mb-2 fs-sm text-muted">
                                Collection
                              </h3>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle me-2"
                                  src="img/nft/catalog/avatars/13.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <a
                                  className="nav-link-style stretched-link fs-sm"
                                  href="nft-catalog-v2.html"
                                >
                                  Cartzilla art collage
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Description*/}
                      <p className="mb-4 pb-md-2 fs-sm">
                        Hendrerit interdum sit massa lobortis. Habitant faucibus
                        lorem dui mauris. Pellentesque nunc, tortor quam
                        consequat odio. Sed faucibus id rhoncus, scelerisque
                        tristique ultricies nam.
                      </p>
                      {/* Auction*/}
                      <div className="row row-cols-sm-2 row-cols-1 gy-3 mb-4 pb-md-2">
                        <div className="col">
                          <h3 className="h6 mb-2 fs-sm text-muted">
                            Current bid
                          </h3>
                          <h2 className="h3 mb-1">2.80 ETH</h2>
                          <span className="fs-sm text-muted">(≈ $ 795.48)</span>
                        </div>
                        <div className="col">
                          <h3 className="h6 mb-2 pb-1 fs-sm text-muted">
                            Auction ends in
                          </h3>
                          <div
                            className="countdown h6 mb-0"
                            data-countdown="07/01/2023 07:00:00 PM"
                          >
                            <div className="countdown-days bg-dark text-light rounded p-2">
                              <span className="countdown-value">0</span>
                            </div>
                            <div className="countdown-hours bg-dark text-light rounded p-2">
                              <span className="countdown-value">0</span>
                            </div>
                            <div className="countdown-minutes bg-dark text-light rounded p-2">
                              <span className="countdown-value">0</span>
                            </div>
                            <div className="countdown-seconds bg-dark text-light rounded p-2">
                              <span className="countdown-value">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Place a bid*/}
                      <a
                        className="btn btn-lg btn-accent d-block w-100 mb-4"
                        href="#"
                      >
                        Place a bid
                      </a>
                      {/* Product info*/}
                      <div className="pt-3">
                        {/* Nav tabs*/}
                        <div className="mb-4" style={{ "overflow-x": "auto" }}>
                          <ul
                            className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-1"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#details"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Details
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#properties"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Properties
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#bids"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Bid History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#provenance"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Provenance
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Tabs content*/}
                        <div className="tab-content">
                          {/* Details*/}
                          <div
                            className="tab-pane fade show active"
                            id="details"
                            role="tabpanel"
                          >
                            <ul className="list-unstyled mb-0">
                              <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                <span>Contract Address</span>
                                <div>
                                  <a className="text-decoration-none" href="#">
                                    <span className="fw-medium text-body">
                                      0x1dDB2C08s97...9Ec
                                    </span>
                                    <i className="ci-external-link ms-3 text-accent" />
                                  </a>
                                </div>
                              </li>
                              <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                <span>Token ID</span>
                                <div>
                                  <a className="text-decoration-none" href="#">
                                    <span className="text-body">
                                      8508550793340827...
                                    </span>
                                    <i className="ci-copy ms-3 text-accent" />
                                  </a>
                                </div>
                              </li>
                              <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                <span>Token Standard</span>
                                <div>
                                  <span className="text-body">ERC-1155</span>
                                </div>
                              </li>
                              <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                <span>Blockchain</span>
                                <div>
                                  <span className="text-body">Ethereum</span>
                                </div>
                              </li>
                              <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                <span>Metadata</span>
                                <div>
                                  <span className="text-body">Editable</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* Properties*/}
                          <div
                            className="tab-pane fade"
                            id="properties"
                            role="tabpanel"
                          >
                            <div className="row row-cols-md-3 row-cols-2 g-3">
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Artist
                                    </h6>
                                    <h5 className="mb-1 fs-sm">
                                      <a
                                        className="nav-link-style text-primary"
                                        href="nft-vendor.html"
                                      >
                                        @foxnet_creator
                                      </a>
                                    </h5>
                                    <span className="fs-xs text-muted">
                                      0% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Asset size in bytes
                                    </h6>
                                    <h5 className="mb-1 fs-sm">84624728</h5>
                                    <span className="fs-xs text-muted">
                                      0% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Asset type
                                    </h6>
                                    <h5 className="mb-1 fs-sm">image / png</h5>
                                    <span className="fs-xs text-muted">
                                      15% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Category
                                    </h6>
                                    <h5 className="mb-1 fs-sm">3D art</h5>
                                    <span className="fs-xs text-muted">
                                      12% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Year of release
                                    </h6>
                                    <h5 className="mb-1 fs-sm">2021</h5>
                                    <span className="fs-xs text-muted">
                                      70% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="card h-100">
                                  <div className="card-body p-3">
                                    <h6 className="mb-1 fs-sm fw-normal text-muted">
                                      Theme
                                    </h6>
                                    <h5 className="mb-1 fs-sm">abstract</h5>
                                    <span className="fs-xs text-muted">
                                      9.5% rarity
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Bid History*/}
                          <div
                            className="tab-pane fade"
                            id="bids"
                            role="tabpanel"
                          >
                            <ul className="list-unstyled mb-0">
                              {/* Bid*/}
                              <li className="d-flex align-items-sm-center align-items-start w-100 mb-3 pb-3 border-bottom">
                                <img
                                  className="rounded-circle me-2"
                                  src="img/nft/catalog/avatars/16.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <div className="d-sm-flex align-items-sm-center w-100">
                                  <div className="mb-sm-0 mb-2">
                                    <h6 className="mb-1 fs-sm">
                                      <a
                                        href="nft-vendor.html"
                                        className="text-decoration-none text-accent"
                                      >
                                        @distrokid
                                      </a>{" "}
                                      placed a bid
                                    </h6>
                                    <span className="fs-sm fw-normal text-muted">
                                      2 hours ago
                                    </span>
                                  </div>
                                  <div className="ms-sm-auto text-nowrap">
                                    <h6 className="mb-0 fs-lg fw-medium text-darker">
                                      2.80 ETH
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      (≈ $ 795.48)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              {/* Bid*/}
                              <li className="d-flex align-items-sm-center align-items-start w-100 mb-3 pb-3 border-bottom">
                                <img
                                  className="rounded-circle me-2"
                                  src="img/nft/catalog/avatars/02.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <div className="d-sm-flex align-items-sm-center w-100">
                                  <div className="mb-sm-0 mb-2">
                                    <h6 className="mb-1 fs-sm">
                                      <a
                                        href="nft-vendor.html"
                                        className="text-decoration-none text-accent"
                                      >
                                        @Simonlee
                                      </a>{" "}
                                      placed a bid
                                    </h6>
                                    <span className="fs-sm fw-normal text-muted">
                                      Dec 22 at 3:41 pm
                                    </span>
                                  </div>
                                  <div className="ms-sm-auto text-nowrap">
                                    <h6 className="mb-0 fs-lg fw-medium text-darker">
                                      1.65 ETH
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      (≈ $ 575.02)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              {/* Bid*/}
                              <li className="d-flex align-items-sm-center align-items-start w-100">
                                <img
                                  className="rounded-circle me-2"
                                  src="img/nft/catalog/avatars/03.png"
                                  width={32}
                                  alt="Avatar"
                                />
                                <div className="d-sm-flex align-items-sm-center w-100">
                                  <div className="mb-sm-0 mb-2">
                                    <h6 className="mb-1 fs-sm">
                                      <a
                                        href="nft-vendor.html"
                                        className="text-decoration-none text-accent"
                                      >
                                        @Sharan_Pagadala
                                      </a>{" "}
                                      placed a bid
                                    </h6>
                                    <span className="fs-sm fw-normal text-muted">
                                      Oct 29 at 3:41 pm
                                    </span>
                                  </div>
                                  <div className="ms-sm-auto text-nowrap">
                                    <h6 className="mb-0 fs-lg fw-medium text-darker">
                                      0.12 ETH
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      (≈ $ 400.19)
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* Provenance*/}
                          <div
                            className="tab-pane fade"
                            id="provenance"
                            role="tabpanel"
                          >
                            <ul className="list-unstyled mb-4">
                              {/* Provenance item*/}
                              <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                <span
                                  className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                  style={{
                                    "-webkit-transform": "translateX(-50%)",
                                    "-ms-transform": "translateX(-50%)",
                                    transform: "translateX(-50%)",
                                  }}
                                />
                                <h6 className="mb-1 fs-sm">
                                  Listed by{" "}
                                  <a
                                    href="nft-vendor.html"
                                    className="text-decoration-none text-accent"
                                  >
                                    @distrokid
                                  </a>
                                </h6>
                                <span className="fs-sm text-muted">
                                  Dec 3 at 9:36 am
                                </span>
                              </li>
                              {/* Provenance item*/}
                              <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                <span
                                  className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                  style={{
                                    "-webkit-transform": "translateX(-50%)",
                                    "-ms-transform": "translateX(-50%)",
                                    transform: "translateX(-50%)",
                                  }}
                                />
                                <h6 className="mb-1 fs-sm">
                                  Purchased by{" "}
                                  <a
                                    href="nft-vendor.html"
                                    className="text-decoration-none text-accent"
                                  >
                                    @distrokid
                                  </a>
                                </h6>
                                <span className="fs-sm text-muted">
                                  Nov 15 at 11:20 am
                                </span>
                              </li>
                              {/* Provenance item*/}
                              <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                <span
                                  className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                  style={{
                                    "-webkit-transform": "translateX(-50%)",
                                    "-ms-transform": "translateX(-50%)",
                                    transform: "translateX(-50%)",
                                  }}
                                />
                                <h6 className="mb-1 fs-sm">
                                  Listed by{" "}
                                  <a
                                    href="nft-vendor.html"
                                    className="text-decoration-none text-accent"
                                  >
                                    @foxnet_creator
                                  </a>
                                </h6>
                                <span className="fs-sm text-muted">
                                  Oct 29 at 6:29 pm
                                </span>
                              </li>
                              {/* Provenance item*/}
                              <li className="position-relative mb-0 ps-4 border-start">
                                <span
                                  className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                  style={{
                                    "-webkit-transform": "translateX(-50%)",
                                    "-ms-transform": "translateX(-50%)",
                                    transform: "translateX(-50%)",
                                  }}
                                />
                                <h6 className="mb-1 fs-sm">
                                  Minted by{" "}
                                  <a
                                    href="nft-vendor.html"
                                    className="text-decoration-none text-accent"
                                  >
                                    @foxnet_creator
                                  </a>
                                </h6>
                                <span className="fs-sm text-muted">
                                  Oct 29 at 3:41 pm
                                </span>
                              </li>
                            </ul>
                            <button className="btn btn-outline-accent d-block w-100">
                              <i className="ci-loading me-2" />
                              Load more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Recent products*/}
          <section className="container mb-5 pb-md-4">
            <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-sm-between mb-sm-4 mb-3">
              <h2 className="h3 mb-sm-0">More from this collection</h2>
              <a
                className="btn btn-outline-accent ms-sm-3"
                href="nft-catalog-v2.html"
              >
                View collection
                <i className="ci-arrow-right ms-2" />
              </a>
            </div>
            {/* Product carousel*/}
            <div className="tns-carousel tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0">
              <div
                className="tns-carousel-inner row gx-xl-0 gx-3 mx-0"
                data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
              >
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a className="d-block" href="nft-single-buy.html">
                        <img src="img/nft/catalog/05.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
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
                      <span className="fs-sm text-muted">Reserve price:</span>
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
                          src="img/nft/catalog/avatars/05.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @Sharan_Pagadala
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/06.jpg" alt="Product image" />
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
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
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
                      <span className="fs-sm text-muted">Current bid:</span>
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
                          src="img/nft/catalog/avatars/06.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @Simonlee
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/07.jpg" alt="Product image" />
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
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          3d aesthetics with shapes
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.156 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 595.76)
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
                          @Shubham_Dhage
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/08.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Astronaut surrounded by lights
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Reserve price:</span>
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
                          src="img/nft/catalog/avatars/08.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @DistroKid
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Bg shape*/}
        <div className="pt-4 bg-secondary">
          {/* Features*/}
          <section className="container py-lg-5 py-4">
            <h2 className="mb-4 pb-md-3 pb-2">
              Begin your NFT journey with us!
            </h2>
            {/* Features carousel*/}
            <div className="tns-carousel mb-4">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 2, "nav": true, "gutter": 30, "responsive": {"0":{"items":1,"controls": false},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true}}}'
              >
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/wallet.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">Set up your wallet</h4>
                  <p className="mb-0 fs-sm text-muted">
                    Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                    blandit penatibus blandit. Amet mattis blandit urna
                    volutpat.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/add.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">
                    Create your collection
                  </h4>
                  <p className="mb-0 fs-sm text-muted">
                    Fringilla ullamcorper aenean tellus ullamcorper neque,
                    malesuada. Aliquam consequat nunc.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/image.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">Add your NFTs</h4>
                  <p className="mb-0 fs-sm text-muted">
                    Platea eu aliquam pellentesque parturient. Volutpat,
                    fermentum suspendisse at nisi cras mattis augue.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/shopping-cart.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">List them for sale</h4>
                  <p className="mb-0 fs-sm text-muted">
                    In eget nulla id feugiat ut placerat sapien malesuada. Sed
                    id risus non accumsan eu amet ut pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Mail subscription*/}
          <section className="container">
            <div className="card py-5 border-0 shadow">
              <div className="card-body py-md-4 py-3 px-4 text-center">
                <h3 className="mb-3">Never miss a drop!</h3>
                <p className="mb-4 pb-2">
                  Subscribe to our ultra-exclusive drop list and be the first to
                  know about upcoming drops.
                </p>
                <div
                  className="widget mx-auto"
                  style={{ "max-width": "500px" }}
                >
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
                    <div className="form-text mt-3">
                      *Receive early discount offers, updates and new products
                      info.
                    </div>
                    <div className="subscription-status" />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer*/}
        <footer className="footer bg-darker">
          <div className="mt-n10 pt-10 bg-dark">
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
              className="d-none handheld-toolbar-item"
              href="#vendor-sidebar"
              data-bs-toggle="offcanvas"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-sign-in" />
              </span>
              <span className="handheld-toolbar-label">Sidebar</span>
            </a>
            <a
              className="d-table-cell handheld-toolbar-item"
              href="#signin-modal"
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
              href="nft-connect-wallet.html"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-wallet" />
              </span>
              <span className="handheld-toolbar-label text-nowrap">
                Connect wallet
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
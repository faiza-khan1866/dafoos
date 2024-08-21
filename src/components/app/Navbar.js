import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../http/API";
import { loadproducts } from "../../state/feature/products";
import { loadSolutions } from "../../state/feature/solutions";

const Navbar = (props) => {
  const [showLogo, setShowogo] = useState(false);

  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();
  // const solutionFetched = useSelector((state) => state.solution);
  const solutionFetched = useSelector((state) => state.solution.list);
  const productFetched = useSelector((state) => state.product.list);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const fetchSolutions = () => dispatch(loadSolutions());
  const fetchProducts = () => dispatch(loadproducts());

  useEffect(() => {
    fetchSolutions();
    fetchProducts();
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
        setShowogo(true);
      } else {
        elementId.classList.remove("is-sticky");
        setShowogo(false);
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav text-left">

                  {
                    showLogo &&
                    <li className="nav-item">
                      <Link to="/" >
                        <img src="/images/logo.png" alt="logo" />
                      </Link>
                    </li>
                  }

                  <li className="nav-item">
                    <Link to="/about-us" activeclassname="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        About Us
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/solutions">
                      <a
                        onClick={toggleNavbar}
                        className="nav-link dropdown-toggle"
                      >
                        Solutions
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      {solutionFetched?.length > 0 &&
                        solutionFetched?.map((item, index) => (
                          <li className="nav-item" key={index}>
                            <Link
                              to={`/solution-details/#${item.slug}`}
                              activeclassname="active"
                            >
                              <a
                                onClick={() => {
                                  toggleNavbar();
                                  setTimeout(() => {
                                    document
                                      .getElementById(`${item?.slug}`)
                                      .scrollIntoView();
                                  }, "smooth");
                                }}
                                className="nav-link"
                              >
                                {item.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/products">
                      <a
                        onClick={toggleNavbar}
                        className="nav-link dropdown-toggle"
                      >
                        Products
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      {productFetched.length > 0 &&
                        productFetched.map((item, index) => (
                          <li className="nav-item" key={index}>
                            <Link
                              to={`/products/${item.slug}`}
                              activeclassname="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                {item.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/references" activeclassname="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        References
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/careers" activeclassname="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Careers
                      </a>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                                        <Link to="/blog" activeclassname="active">
                                            <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                        </Link>
                                    </li> */}

                  {/* <li className="nav-item">
                                        <Link to="/news" activeclassname="active">
                                            <a onClick={toggleNavbar} className="nav-link">Media Center </a>
                                        </Link>
                                    </li> */}

                  <li className="nav-item">
                    <Link to="/contact-us" activeclassname="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

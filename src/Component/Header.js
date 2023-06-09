import React from 'react'

export default function Header() {

    const myStyles = {
        color: 'white',
     
        fontSize: '12px'
      };
      
      const myStyles1 = {
        background: 'rgb(55,81,126)',

      };

  return (
    <>
    {/* ======= Header ======= */}
<header id="header" style={myStyles1} className="fixed-top ">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><a href="index.html">Ambai</a><br></br><h3 style={myStyles}>Automation</h3></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
        {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
      </ul>
      <i className="bi " />
    </nav>{/* .navbar */}
  </div>
</header>{/* End Header */}

    </>
  )
}

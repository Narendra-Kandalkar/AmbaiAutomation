import React from 'react'

export default function HeroSection() {
   
  return (
     <>
      <section id="hero" className="d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex text-start flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
        <h1>Better Solutions For Your Business</h1>
        <h2>Innovative technology solutions that enhance customer engagement</h2>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
        <img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683370332/hero-img_m5du81.png" className="img-fluid animated " alt=""  />
      </div>
    </div>
  </div>
</section>
     </>
  )
}

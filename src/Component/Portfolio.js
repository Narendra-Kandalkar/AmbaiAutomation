import React from 'react'

export default function Portfolio() {
  const style1 = {
    marginTop: "30px"
  }

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Our portfolio showcases a diverse range of projects we've completed for clients in education, retail, and corporate sectors. From large-scale digital signage installations to interactive displays and LED screens, we've helped businesses and institutions enhance communication and engagement with their audiences.</p>
          </div>
          <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img"><img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683573977/1_lqgja8.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a href="https://res.cloudinary.com/dq4tpe282/image/upload/v1683573977/1_lqgja8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img"><img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683575585/c9947bab-e695-4237-9e67-bf7c2959d088_lj9hkw.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="https://res.cloudinary.com/dq4tpe282/image/upload/v1683575585/c9947bab-e695-4237-9e67-bf7c2959d088_lj9hkw.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img"><img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683574615/gettyimages-970297432-612x612_ahrnxx.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a href="https://res.cloudinary.com/dq4tpe282/image/upload/v1683574615/gettyimages-970297432-612x612_ahrnxx.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img"><img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683575682/826d0645-0ab6-4c1a-a2de-35288fa4cd30_iwcc25.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a href="https://res.cloudinary.com/dq4tpe282/image/upload/v1683575682/826d0645-0ab6-4c1a-a2de-35288fa4cd30_iwcc25.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img"><img src="https://res.cloudinary.com/dq4tpe282/image/upload/v1683574940/55b7246e-4d81-4bb2-8b86-9df31fed8dd7_wdqnwm.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a href="https://res.cloudinary.com/dq4tpe282/image/upload/v1683574940/55b7246e-4d81-4bb2-8b86-9df31fed8dd7_wdqnwm.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

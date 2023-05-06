import React from 'react'

export default function Services() {
    const style1 = {
        marginTop: "30px"
    }
    return (
        <div>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 style={style1}>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row text-start">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file" /></div>
                                <h4><a href>Educational Solutions</a></h4>
                                <p>Innovative solutions designed specifically for educational institutions, including interactive digital panels, digital display solutions for classrooms, and software solutions for content management and collaboration.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble" /></div>
                                <h4><a href>IT Solutions</a></h4>
                                <p>Customizable and easy-to-use IT solutions that power digital displays, including content management systems, digital menu boards, and interactive software applications.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-tachometer" /></div>
                                <h4><a href>Digital Display Solutions</a></h4>
                                <p>Eye-catching and engaging digital signage solutions for businesses and organizations, interactive digital panels. as well as solutions for entertainment venues like concerts, sporting events, and theaters.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={400}>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer" /></div>
                                <h4><a href>Hospitality Solutions</a></h4>
                                <p>Tailored solutions designed for the hospitality industry, including digital signage solutions for lobbies, wayfinding systems, and interactive displays for menus and promotions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

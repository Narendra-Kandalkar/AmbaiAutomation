import React from 'react'

export default function AboutUs() {
    const style1 = {
        marginTop: "30px"
    }

    return (
        <div >
            <section id="about" className="about" style={style1}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title mt-100px">
                        <h2 style={style1}>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6 text-start">
                            <p>
                                Ambai Automation is a leading provider of innovative display and IT solutions for a variety of industries.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line" /> We're constantly exploring new ideas and technologies to stay ahead of the curve.</li>
                                <li><i className="ri-check-double-line" /> We deliver high-quality solutions that our clients can count on.</li>
                                <li><i className="ri-check-double-line" /> We deliver customized web solutions that meet our clients' specific needs.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 text-start">
                            <p>
                                Our mission is to empower interactive spaces with cutting-edge technology that enhances the user experience, drives engagement, and achieves our clients' business objectives. With our expertise and commitment to innovation, we're here to help you transform your space and achieve your goals.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>{/* End About Us Section */}

        </div>
    )
}

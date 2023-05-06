import React from 'react'

export default function WhyUs() {
    return (
        <div>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column text-start justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>Empowering Education with <br></br> <strong>Innovative Solutions</strong></h3>
                                <p>
                                    We empower education with innovative solutions designed to enhance learning experiences and improve outcomes.                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Q: What types of innovative solutions do you offer to educational institutions? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                We offer a range of solutions, including digital signage, interactive displays, and classroom management software, all designed to enhance the learning experience and promote better outcomes.                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span>How do your solutions help to improve student engagement?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Our solutions are designed to create a more immersive and interactive learning environment, which has been shown to improve student engagement and retention.                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> How can your solutions help educational institutions adapt to remote and hybrid learning models? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Our solutions are designed to be flexible and adaptable to various learning environments, including remote and hybrid models. For example, our digital signage and interactive displays can be used for remote collaboration and virtual learning.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("https://res.cloudinary.com/dq4tpe282/image/upload/v1683370332/why-us_p8ajum.png")' }} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
                    </div>
                </div>
            </section>

        </div>
    )
}

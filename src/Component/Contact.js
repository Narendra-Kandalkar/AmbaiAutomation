import React from 'react'

export default function Contact() {
    const style1 = {
        marginTop: "30px"
    }
    return (
        <div>
            <section id="contact" className="contact text-start">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 style={style1}>Contact</h2>
                        <p className='text-start'>Need assistance or have questions about our solutions? Our friendly and knowledgeable team is here to help! Whether you have a technical issue, need pricing information, or just want to learn more about our products and services, we're available to assist you via phone, email, or social media.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Near Shivaji Commercial, Lane no. 1 , Ravi nagar, Amravati - 444605</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>ambaiautomation111@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 8329058255</p>
                                </div>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen /> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.884913217225!2d77.74658641057722!3d20.91694939152953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4b46914d71f%3A0xdfab079347d97eed!2sShivaji%20Commercial%20Centre!5e0!3m2!1sen!2sin!4v1683568479886!5m2!1sen!2sin"  frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="mailto:narendrakandalkar@gmail.com" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center" ><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

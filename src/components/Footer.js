import React from 'react'
import Address from '../Images/footer-icon-01.png.png';
import Email from '../Images/email.jpg';
import Phone from '../Images/green-telephone-icon-5.png';
const Footer = () => {
    return (
            <footer class="footer-main">
                <div class="container">
                    <div class="row address-main">
                        <div class="col-lg-4 col-sm-12 col-xs-12">
                            <div class="address-box clearfix">
                                <div class="add-icon">
                                    <img src={Address} alt="" />
                                </div>
                                <div class="add-content">
                                    <h5>Address</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut veniam </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-xs-12">
                            <div class="address-box clearfix">
                                <div class="add-icon">
                                    <img src={Phone} alt="" />
                                </div>
                                <div class="add-content">
                                    <h5>Phone</h5>
                                    <p>  +(91) 000000000 <br />
                                        +(91) 000000000  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-xs-12">
                            <div class="address-box clearfix">
                                <div class="add-icon">
                                    <img src={Email} alt="" />
                                </div>
                                <div class="add-content">
                                    <h5>Email</h5>
                                    <p> <a href="mailto:"
                                        style={{ textDecoration: 'none' }}
                                    >collab@codewithkovai.com</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer class="icon-footer text-center text-white">
                    <div class="container p-4 pb-0">
                        <section class="mb-4">
                            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i class="fa fa-facebook-f"></i
                            ></a>

                            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i class="fa fa-twitter"></i
                            ></a>

                            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i class="fa fa-google"></i
                            ></a>

                            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i class="fa fa-instagram"></i
                            ></a>

                        </section>
                    </div>

                    <div class="text-center p-3"
                        style={{ background: '#21D191' }}
                    >
                        codewithkovai © 2024 All Rights Reserved.
                    </div>
                </footer>
            </footer>
    )
}

export default Footer
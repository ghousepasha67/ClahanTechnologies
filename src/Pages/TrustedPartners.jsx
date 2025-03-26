import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cola, Ibm, testimonial } from './ImagePath';

function TrustedPartners(params) {
    return (
        <section>
            <div class="container-fluid justify-content-start w-80Percentage">
                <div className="row">
                    <h1 class="text-xxl text-white text-start ">
                        <div class="title_decoration title_decoration_initial text-Bold"></div>
                        Trusted Partners
                    </h1>
                    <p class="fs-2 line-h-2 text-start"> Explore our various services that help to gow your business</p>
                </div>
                <div className="row">
                    <div className=" col-md-8">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div class="row p-4">
                                    <div class="col-md-7 col-lg-6 zzz">
                                        <span className='beforeImg'></span>
                                        <img class="w-100 rounded-3" src={testimonial} alt="..." />
                                        <span className='afterImg'></span>
                                    </div>
                                    <div class="col-md-5 col-lg-6 order-md-1 text-start">
                                        <h3 class="fs-xl-7 fs-lg-4 fs-md-3 mt-5 mt-md-0">Excellent service</h3>
                                        <p class="fs-xl-1 ls-3 pe-xl-2 ">"Excellent service from sahabalkhair team. Completed works very professionally My house was locked and not used for a long time. But these guys did a good job by transforming it into a living atmosphere. Keep up the good work!"</p>
                                        <h1 class="fs-xl-1 ls-3 pe-xl-2 fw-bold">Mycall CRM</h1>
                                        <p class="fs-xl-1 ls-3 pe-xl-2 fw-bold">Managing director</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide><div class="row p-4">
                                <div class="col-md-7 col-lg-6 zzz">
                                    <span className='beforeImg'></span>
                                    <img class="w-100 rounded-3" src={testimonial} alt="..." />
                                    <span className='afterImg'></span>
                                </div>
                                <div class="col-md-5 col-lg-6 order-md-1 text-start">
                                    <h3 class="fs-xl-7 fs-lg-4 fs-md-3 mt-5 mt-md-0">Excellent service</h3>
                                    <p class="fs-xl-1 ls-3 pe-xl-2 ">"Excellent service from sahabalkhair team. Completed works very professionally My house was locked and not used for a long time. But these guys did a good job by transforming it into a living atmosphere. Keep up the good work!"</p>
                                    <h1 class="fs-xl-1 ls-3 pe-xl-2 fw-bold">Swiggy</h1>
                                    <p class="fs-xl-1 ls-3 pe-xl-2 fw-bold">CTO</p>

                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide><div class="row p-4">
                                <div class="col-md-7 col-lg-6 zzz">
                                    <span className='beforeImg'></span>
                                    <img class="w-100 rounded-3" src={testimonial} alt="..." />
                                    <span className='afterImg'></span>
                                </div>
                                <div class="col-md-5 col-lg-6 order-md-1 text-start">
                                    <h3 class="fs-xl-7 fs-lg-4 fs-md-3 mt-5 mt-md-0">Excellent service</h3>
                                    <p class="fs-xl-1 ls-3 pe-xl-2 ">"Excellent service from sahabalkhair team. Completed works very professionally My house was locked and not used for a long time. But these guys did a good job by transforming it into a living atmosphere. Keep up the good work!"</p>
                                    <h1 class="fs-xl-1 ls-3 pe-xl-2 fw-bold">Truecaller</h1>
                                    <p class="fs-xl-1 ls-3 pe-xl-2 fw-bold">Manager</p>

                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-md-4 client_wrapper">
                        <h2 className='p-4 mx-auto '>Top Clients</h2>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Ibm} alt='ibm' className='py-3'/>
                                <img src={Ibm} alt='ibm' className='py-3'/>
                                <img src={Ibm} alt='ibm' className='py-3'/>
                            </div>
                            <div className='col-md-6'>
                                <img src={cola} alt='cola' className='py-3'/>
                                <img src={cola} alt='cola' className='py-3'/>
                                <img src={cola} alt='cola' className='py-3'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TrustedPartners;
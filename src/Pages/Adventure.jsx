import { FaArrowRight } from 'react-icons/fa';
import { carrerBanner } from "./ImagePath";

function Adventure(params) {
    return (
        <section class="mt-5">
        
                <div class="container">
                  <div class="text-start">
                    <div class="row p-5 bg-adventure rounded-3">
                      <div class="col-sm-12 col-lg-7">
                            <h1 class="font-size-color ls-2 lh-base fw-bold py-4">Embark on a New Adventure with Us</h1>
                            <h4 class="mt-3 fs-4 fs-sm-4 latter-sp-3 lh-base fw-semi-bold py-4">Ready to innovate and inspire? Join us as we build a more beautiful tomorrow, one bold idea at a time. Your adventure begins now!</h4>
                            <button class="btn btn-info btn-start px-4">Explore New Adventure <span className='px-2'><FaArrowRight></FaArrowRight></span></button>
                      </div>
                      <div class="col-sm-12 col-lg-5">
                        <img className='img-adventure'src={carrerBanner} alt="carrerBanner"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )
}
export default Adventure;
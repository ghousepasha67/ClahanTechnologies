import { FaArrowRight } from 'react-icons/fa';
function GetStarted(params) {
    return (
        <section class="mt-5 bg-footer">

        <div class="container">
          <div class="text-center  ">
            <div className=''>
            <div class="rounded-3 b-radius bg-adventure get p-3">
              <div class="py-3 ">
                <h1 class="opacity-50 ls-2 lh-base fw-medium text-start">Get started now!</h1>
                <h6 class="mt-3 fs-4 fs-sm-7 latter-sp-3 lh-base fw-semi-bold">It takes less than a minute of your time.</h6>
              </div>
              <div class="flex-center d-flex px-4">
                <button class="btn btn-info">Request a qoute  <span className='px-2'><FaArrowRight></FaArrowRight></span></button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
}
export default GetStarted;
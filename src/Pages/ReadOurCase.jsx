import { case1 } from "./ImagePath";

function ReadOurCase() {
    return(
        <section className="bg-case-study">
            <div class="container-fluid justify-content-start w-1100px">
            <div className="row">
                <div className="col-lg-6">
                    <h1 class="text-xxl text-white text-start ">
                        <div class="title_decoration title_decoration_initial text-Bold"></div>
                        <h1 className="txt-col">Read Our
                        Case Studies</h1>
                    </h1>
                </div>
                <div className="col-lg-6">
                    <p class="fs-2 line-h-2">Explore our various services that help to gow your business</p>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-start">
                    <div className="bg-white p-5 rounded-3">
                        <img src={case1} className="w-100P" alt="image1"/>
                        <button class="btn btn-info btn-start px-4 my-4">Cloud computing</button>
                        <h1 className="txt-col"> Create Seamless deployment services</h1>
                        <p class="fs-2 line-h-2">Help the Infosys to provide seamless experience on the project deployment</p>
                    </div>
                </div>
                <div className="col-md-6 text-start mt-100px py-8">
                    <div className="bg-white p-5 rounded-3">
                        <img src={case1} className="w-100P" alt="image1"/>
                        <button class="btn btn-info btn-start px-4 my-4">Cloud computing</button>
                        <h1 className="txt-col"> Create Seamless deployment services</h1>
                        <p class="fs-2 line-h-2">Help the Infosys to provide seamless experience on the project deployment</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default ReadOurCase;
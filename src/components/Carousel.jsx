import Grid from "./Grid"
import "../assets/stylesheet/carousel.css"

function Carousel(params) {
    return (
        <>
            <div className="carousel">
                <div className="carousel-inner">
                    {/* {
                        Array(5).fill(21).map((foo, index = index + 1) => {
                            return (
                                <>
                                    <input className="carousel-open" type="radio" id={`carousel-${index}`} name="carousel" aria-hidden="true" hidden defaultChecked={true} />
                                    <div className="carousel-item">
                                        <Grid data={params.data.slice(foo*index, foo*(index+1))}/>
                                    </div>
                                </>
                            )
                        })
                    } */}

                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked={true} />
                    <div className="carousel-item">
                        <Grid data={params.data.slice(0, 21)}/>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item">
                        <Grid data={params.data.slice(21, 42)}/>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item">
                        <Grid data={params.data.slice(42, 63)}/>
                    </div>

                    {/* {
                        Array(4).fill(21).map((foo, index = index + 1) => {
                            return (
                                <>
                                    <label htmlFor={`carousel-${index}`} className={`carousel-control prev control-${index+1}`}>‹</label>
                                    <label htmlFor={`carousel-${index+1}`} className={`carousel-control next control-${index}`}>›</label>
                                </>
                            )
                        })
                    }
                    <label htmlFor="carousel-4" className="carousel-control prev control-1">‹</label>
                    <label htmlFor="carousel-1" className="carousel-control next control-4">›</label> */}

                    {/* <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                    <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                    <label htmlFor="carousel-3" className="carousel-control prev control-4">‹</label>
                    <label htmlFor="carousel-4" className="carousel-control prev control-5">‹</label>
                    <label htmlFor="carousel-5" className="carousel-control prev control-6">‹</label>
                    <label htmlFor="carousel-6" className="carousel-control prev control-7">‹</label>
                    <label htmlFor="carousel-7" className="carousel-control prev control-8">‹</label>
                    <label htmlFor="carousel-8" className="carousel-control prev control-1">‹</label>
                    
                    <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                    <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                    <label htmlFor="carousel-4" className="carousel-control next control-3">›</label>
                    <label htmlFor="carousel-5" className="carousel-control next control-4">›</label>
                    <label htmlFor="carousel-6" className="carousel-control next control-5">›</label>
                    <label htmlFor="carousel-7" className="carousel-control next control-6">›</label>
                    <label htmlFor="carousel-8" className="carousel-control next control-7">›</label>
                    <label htmlFor="carousel-1" className="carousel-control next control-8">›</label> */}


                                        
                    <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
                    <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                    <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                    <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                    <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                    <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
                   

                    <ol className="carousel-indicators">
                        {/* {
                            Array(5).fill(21).map((foo, index) => {
                                return (
                                    <li>
                                        <label htmlFor={`carousel-${index+1}`} className="carousel-bullet">•</label>
                                    </li>
                                )
                            })
                        } */}

                        <li>
                            <label htmlFor="carousel-1" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label htmlFor="carousel-2" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label htmlFor="carousel-3" className="carousel-bullet">•</label>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}


export default Carousel
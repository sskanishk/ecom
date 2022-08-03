import "../assets/stylesheet/grid.css"

function Grid(params) {    
    return (
        <div className="grid_">
            {
                params.data && params.data.length > 0 && params.data.map((img, i) => {
                    return (
                        <div className="product_info" key={`${img.id}${i}`} onClick={() => window.open("https://amazon.in")}>
                            <img src={img.image} alt={img.description} width="60px" />
                            <div className="info">
                                <p className="title">{img.title}</p>
                                <p className="price">Rs. { img.price }</p>
                                <p className="extra_info"> 
                                    <span>{ img.category } </span>
                                    <span className="icon">›</span>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grid
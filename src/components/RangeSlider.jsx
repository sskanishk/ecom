import { useState } from "react"
import "../assets/stylesheet/rangeslider.css"

function RangeSlider({handlePriceFilter}) {

    const breakpoints = [25, 50, 100, 1000, 1500]
    const [activeDot, setActiveDot] = useState(3)
    const [selectedDot, setSelectedDot] = useState(3)

    return (
        <div className="rangeslider__wrapper">
            <div className="range">
                <input 
                    type="range" 
                    min="0" 
                    max="4" 
                    steps='1'
                    value={activeDot} 
                    className="range__input" 
                    onChange={(e) => {
                        console.log(e.target.value)
                        setActiveDot(parseInt(e.target.value))
                        setSelectedDot(parseInt(e.target.value))
                        handlePriceFilter(breakpoints[e.target.value])
                    }}
                />
            </div>

            <ul className="range-labels">
                {
                    breakpoints.map((brk, i) => {
                        return <li 
                            key={`xyz${i}`}
                            className={`${i === activeDot ? "active" : ""} ${selectedDot > i-1 ? "selected" : ""}`}
                            onClick={(e) => {
                                let index = breakpoints.indexOf(parseInt(e.target.innerText))
                                setActiveDot(index)
                                setSelectedDot(index)
                                handlePriceFilter(breakpoints[index])
                            }}
                        >{brk}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RangeSlider
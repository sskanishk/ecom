import { useState } from "react"
import "../assets/stylesheet/dropdown.css"

function Dropdown({handleCategoryFilter}) {
    const options = [
        { label: 'All', value: '' },
        { label: 'Clothes', value: 'Clothes' },
        { label: 'Shoes', value: 'Shoes' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Others', value: 'Others' }
    ]

    const [selectedValue, setSelectedValue] = useState("Select")

    return (
        <div className="dropdown__wrapper">
            <DropdownReusable
                options={options}
                value={selectedValue} 
                onChange={(e) => {
                    setSelectedValue(e.target.value)
                    handleCategoryFilter(e.target.value)
                }}
            />
        </div>
    )
}

const DropdownReusable = ({ value, options, onChange }) => {
    return (
        <select value={value} onChange={onChange} className="dropdown-select">
            {options.map((option, i) => (
                <option value={option.value} key={`${option.value}${i}`}>{option.label}</option>
            ))}
        </select>
    )
}






export default Dropdown
import noresult from "../assets/images/no_result.png"

function EmptyState() {
    return (
        <div style={emptystatestyle}>
            <img src={noresult} width="200px"/>
        </div>
    )
}

const emptystatestyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px auto",
    height: "350px",
    alignItems: "center"
}

export default EmptyState
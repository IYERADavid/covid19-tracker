function Addworldstatics({data, data_value}) {
    return (
        <>
        <div className="col-md-3 my-3">
            <div className="bg-info text-center rounded-3 shadow-lg">
                <div className="data py-3">
                    <h5 className="title">{data}</h5>
                    <div className="total_number pt-2">
                    <p>{data_value}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Addworldstatics

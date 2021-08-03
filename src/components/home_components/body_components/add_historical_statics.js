function Addhistoricalstatics({data, data_value, class_name}) {
    return (
        <>
        <div className={class_name}>
            <div className="bg-light text-center rounded-pill shadow mx-3">
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

export default Addhistoricalstatics
